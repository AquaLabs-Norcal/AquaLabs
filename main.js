
document.addEventListener("DOMContentLoaded", () => {

    let homePage = document.getElementById("home-page-container");
    let quotePage = document.getElementById("quote-page-container");
    let currentPage = "home";
    
    let slideshowDiv = document.getElementById("slideshow-image-container");
    let imageCount = 9;
    let imageContainerCount;
    let overlay = document.getElementById("overlay1");
    let xOutOverlayIcon = document.getElementById("x-out-overlay-icon");

    xOutOverlayIcon.addEventListener("click", () => {
        overlay.style.opacity = 0;
        overlay.style.position = "";
        document.getElementById("overlay-img").remove();
        xOutOverlayIcon.style.display = "hidden";

    });
    
    function calculateImages() {
        if (visualViewport.width > 800) {
            imageContainerCount = 3;
            for (let i = 0; i < imageCount / 3; i++) {
                let imageContainer = document.createElement("div");
                slideshowDiv.appendChild(imageContainer);
                imageContainer.classList.add("slideshow-group");
                imageContainer.id = `slideshow-group-${i + 1}`;
                if (i !== 0) {
                    // imageContainer.classList.add("hidden");
                    imageContainer.classList.add("hidden");
                }
                for (let k = 0; k < 3; k++) {
                    if (i * 3 + k >= imageCount) {
                        break;
                    }
    
                    let img = document.createElement("img");
                    img.src = `assets/FishTank${(i * 3) + k + 1}.jpg`
                    // img.style.height = "10vw";
                    img.classList.add("slideshow-image");
    
                    img.addEventListener("click", () => {
                        overlay.style.opacity = 1;
                        overlay.style.position = "fixed";
                        
                        let overlayImg = document.createElement("img");
                        overlayImg.src = img.src;
                        overlayImg.style.maxWidth = "90%";
                        overlayImg.style.maxHeight = "90%";
                        overlayImg.id = "overlay-img";
                        overlayImg.classList.add("invisible");
                        overlay.appendChild(overlayImg);
                        xOutOverlayIcon.style.display = "block";
                        
                        setTimeout(() => {
                            overlayImg.style.opacity = 1;
                        }, 1)
                    });
    
                    imageContainer.appendChild(img);
    
                }
            }
        } else {
            imageContainerCount = 9;
            for (let i = 0; i < imageCount; i++) {
                let imageContainer = document.createElement("div");
                slideshowDiv.appendChild(imageContainer);
                imageContainer.classList.add("slideshow-group");
                imageContainer.id = `slideshow-group-${i + 1}`;
                // imageContainer.width = "75%"
                if (i !== 0) {
                    // imageContainer.classList.add("hidden");
                    imageContainer.classList.add("hidden");
                }
    
                let img = document.createElement("img");
                img.src = `assets/FishTank${i + 1}.jpg`;
                // img.style.maxWidth = "60hw";
                img.classList.add("slideshow-image");
                img.addEventListener("click", () => {
                    overlay.style.opacity = 1;
                    overlay.style.position = "fixed";
                    
                    let overlayImg = document.createElement("img");
                    overlayImg.src = img.src;
                    overlayImg.style.maxWidth = "90%";
                    overlayImg.style.maxHeight = "90%";
                    overlayImg.id = "overlay-img";
                    overlayImg.classList.add("invisible");
                    overlay.appendChild(overlayImg);
                    xOutOverlayIcon.style.display = "block";
                    
                    setTimeout(() => {
                        overlayImg.style.opacity = 1;
                    }, 1)
                });

                imageContainer.appendChild(img);
            }
        }
    }
    
    calculateImages();
    
    let slideshowImages = slideshowDiv.children;

    let pointer = 0;
    let slideshowLength = slideshowImages.length;
    let slideshowLeftArrow = document.getElementById("slideshow-left-arrow");
    let slideshowRightArrow = document.getElementById("slideshow-right-arrow");


    slideshowLeftArrow.addEventListener("click", () => {
        slideshowImages[pointer].classList.remove("shown-flex");
        slideshowImages[pointer].classList.add("hidden");
        slideshowImages[pointer].classList.remove("slide-effect");
        if (pointer === 0) {
            pointer = slideshowImages.length - 1;
        } else {
            pointer -= 1;
        }
        slideshowImages[pointer].classList.remove("hidden");
        slideshowImages[pointer].classList.add("shown-flex");
        slideshowImages[pointer].classList.toggle("slide-effect");
    });

    slideshowRightArrow.addEventListener("click", () => {

        slideshowImages[pointer].classList.add("hidden");
        slideshowImages[pointer].classList.remove("shown-flex");
        slideshowImages[pointer].classList.remove("slide-effect");


        if (pointer === slideshowImages.length - 1) {
            pointer = 0;
        } else {
            pointer += 1;
        }
        slideshowImages[pointer].classList.remove("hidden");
        slideshowImages[pointer].classList.add("shown-flex");
        slideshowImages[pointer].classList.toggle("slide-effect");
    });

    let getQuoteNavLink = document.getElementById("get-quote-nav-link");
    quotePage.style.opacity = 0;

    function swapPage() {
        if (currentPage === "home") {
            let count = 0;

            homePage.style.opacity = 0;
            let interval = setInterval(() => {
                if (count === 1) {
                    homePage.classList.add("hidden");
                    homePage.classList.remove("shown-block");
                } else if (count === 2) {
                    quotePage.classList.remove("hidden");
                    quotePage.classList.add("shown-block");
                } else if (count === 3) {
                    quotePage.style.opacity = 1;
                    currentPage = "quote";
                    clearInterval(interval);
                }

                count += 1;
                
            }, 100)
    
        } else {
            // quotePage.classList.add("hidden");
            // quotePage.classList.remove("shown-block");
            // homePage.classList.remove("hidden");
            // homePage.classList.add("shown-block");
            // currentPage = "home";

            let count = 0;

            quotePage.style.opacity = 0;
            let interval = setInterval(() => {
                if (count === 1) {
                    quotePage.classList.add("hidden");
                    quotePage.classList.remove("shown-block");
                } else if (count === 2) {
                    homePage.classList.remove("hidden");
                    homePage.classList.add("shown-block");
                } else if (count === 3) {
                    homePage.style.opacity = 1;
                    currentPage = "home";
                    clearInterval(interval);
                }

                count += 1;
                
            }, 100)
        }
    }

    getQuoteNavLink.addEventListener("click", () => {
        if (currentPage === "home") {
            swapPage();

        }
    });

    document.getElementById("main-title").addEventListener("click", () => {
        if (currentPage !== "home") {
            swapPage();
            currentPage = "home";
        }
    });

    document.getElementById("about-link").addEventListener("click", () => {
        if (currentPage !== "home") {
            swapPage();
            currentPage = "home";
            setTimeout(() => {
                document.getElementById("about-us-section").scrollIntoView();
            }, 300)
        }
    });

    document.getElementById("designs-link").addEventListener("click", () => {
        if (currentPage !== "home") {
            swapPage();
            currentPage = "home";
            setTimeout(() => {
                document.getElementById("slideshow-container").scrollIntoView();
            }, 300)
        }
    });

    document.getElementById("services-link").addEventListener("click", () => {
        if (currentPage !== "home") {
            swapPage();
            currentPage = "home";
            setTimeout(() => {
                document.getElementById("our-services-section").scrollIntoView();
            }, 300)
        }
    });

    document.getElementById("contact-link").addEventListener("click", () => {
        if (currentPage !== "home") {
            swapPage();
            currentPage = "home";
            setTimeout(() => {
                document.getElementById("contact-us-section").scrollIntoView();
            }, 300)
        }
    });

    

    document.getElementById("logo").addEventListener("mouseover", () => {
        // document.getElementById("audio1").volume = 100;
        document.getElementById("audio1").play();
    });

    let quotePageButton = document.getElementById("quote-page-button");
    quotePageButton.addEventListener("click", () => {
        setTimeout(() => {
            document.getElementById("quote-form").reset();
        }, 200)
    });

    window.addEventListener("resize", () => {
        if (visualViewport.width < 800 && imageContainerCount === 3) {
            let groups = document.querySelectorAll(".slideshow-group");
            for (let i = 0; i < groups.length; i++) {
                groups[i].remove();
            }
            calculateImages();
            pointer = 0;
        } else if (visualViewport.width > 800 && imageContainerCount === 9) {
            let groups = document.querySelectorAll(".slideshow-group");
            for (let i = 0; i < groups.length; i++) {
                groups[i].remove();
            }
            calculateImages();
            pointer = 0;
        }
    });


    // slideshowDiv.appendChild(slideshowImg1);
});