
document.addEventListener("DOMContentLoaded", () => {

    let homePage = document.getElementById("home-page-container");
    let quotePage = document.getElementById("quote-page-container");
    let currentPage = "home";
    
    let slideshowDiv = document.getElementById("slideshow-image-container");
    let imageCount = 9;
    let imageContainerCount;
    let overlay = document.getElementById("overlay1");
    let xOutOverlayIcon = document.getElementById("x-out-overlay-icon");
    let leftArrowClickActive = true;
    let rightArrowClickActive = true;

    let imagesObj = {
        1: {
            name: "Dramatic Cliffscape",
            price: "$120/month",
            gallons: "20 Gallon"
        },
        2: {
            name: "Fast-Moving Jungle Stream",
            price: "$200/month",
            gallons: "50 Gallon"
        },
        3: {
            name: "The Trio Terrascapes",
            price: "$75/month",
            gallons: "variable"
        },
        4: {
            name: "Driftwood Peaks",
            price: "$200/month",
            gallons: "50 Gallon"
        },
        7: {
            name: "Jungle Orb",
            price: "$50/month",
            gallons: "5 Gallon"
        },
        8: {
            name: "Convex Mountain",
            price: "$50/month",
            gallons: "5 Gallon"
        },
        6: {
            name: "Tree of Life",
            price: "$150/month",
            gallons: "30 Gallon"
        },
        5: {
            name: "Mountain Paludarium",
            price: "$50/month",
            gallons: "7.5 Gallon"
        },
        9: {
            name: "TBD",
            price: "TBD",
            gallons: "TBD"
        },
    };

    function generateImageSubtext(imgNum) {
        let nameDiv = document.createElement("div");
        let priceDiv = document.createElement("div");
        let gallonDiv = document.createElement("div");

        nameDiv.classList.add("small-font");
        priceDiv.classList.add("small-font");
        gallonDiv.classList.add("small-font");

        nameDiv.innerHTML = imagesObj[imgNum]["name"];
        priceDiv.innerHTML = imagesObj[imgNum]["price"];
        gallonDiv.innerHTML = imagesObj[imgNum]["gallons"];

        let imageTextContainer = document.createElement("div");
        imageTextContainer.appendChild(nameDiv);
        imageTextContainer.appendChild(priceDiv);
        imageTextContainer.appendChild(gallonDiv);
        imageTextContainer.classList.add("image-text-container");

        return imageTextContainer;
    }

    function generateImage(imgNum) {
        let img = document.createElement("img");
        img.src = `assets/FishTank${imgNum}.jpg`

        img.classList.add("slideshow-image");
        img.id = `FishTank${imgNum}`;

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
            }, 1);
        });

        let imgDiv = document.createElement("div");
        imgDiv.classList.add("single-image-container");

        imgDiv.appendChild(img);
        // imgDiv.appendChild(generateImageSubtext(imgNum));
        
        
    
        return imgDiv;
    }

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
                    imageContainer.classList.add("hidden");
                }
                for (let k = 0; k < 3; k++) {
                    if (i * 3 + k >= imageCount) {
                        break;
                    }

                    imageContainer.appendChild(generateImage((i*3)+k+1))
    
                }
            }
        } else {
            imageContainerCount = 9;
            for (let i = 0; i < imageCount; i++) {
                let imageContainer = document.createElement("div");
                slideshowDiv.appendChild(imageContainer);
                imageContainer.classList.add("slideshow-group");
                imageContainer.id = `slideshow-group-${i + 1}`;
                if (i !== 0) {
                    imageContainer.classList.add("hidden");
                }
    
                

                imageContainer.appendChild(generateImage(i+1));
            }
        }
    }
    
    calculateImages();
    
    let slideshowImages = slideshowDiv.children;

    let pointer = 0;
    let slideshowLeftArrow = document.getElementById("slideshow-left-arrow");
    let slideshowRightArrow = document.getElementById("slideshow-right-arrow");


    slideshowLeftArrow.addEventListener("click", () => {
        if (leftArrowClickActive) {
            leftArrowClickActive = false;
            
            slideshowImages[pointer].classList.add("slide-out-to-right-effect"); //instantly have current images slide out to left on click
            slideshowImages[pointer].style.position = "absolute";//change to absolute to prevent page interaction during animation
            slideshowImages[pointer].style.left = "0";
            let prev;

            if (pointer === 0) {
                pointer = slideshowImages.length - 1;
                prev = 0;
            } else {
                pointer -= 1;
                prev = pointer + 1;
            }

            slideshowImages[pointer].classList.remove("hidden");
            slideshowImages[pointer].classList.add("shown-flex");
            slideshowImages[pointer].classList.remove("slide-in-from-left-effect");
            slideshowImages[pointer].classList.add("slide-in-from-left-effect");
            

            setTimeout(() => {
                slideshowImages[prev].classList.remove("shown-flex");
                slideshowImages[prev].classList.add("hidden");
                slideshowImages[prev].classList.remove("slide-in-from-left-effect");
                slideshowImages[prev].classList.remove("slide-out-to-right-effect");
                slideshowImages[prev].style.position = "relative";
                slideshowImages[pointer].classList.remove("slide-in-from-left-effect");
            }, 645);
            
            setTimeout(() => {
                leftArrowClickActive = true;
            }, 1000);
            
        }
        

    });

    slideshowRightArrow.addEventListener("click", () => {
        if (rightArrowClickActive) {
            rightArrowClickActive = false;
            
            slideshowImages[pointer].classList.add("slide-out-to-left-effect"); //instantly have current images slide out to left on click
            slideshowImages[pointer].style.position = "absolute";//change to absolute to prevent page interaction during animation
            slideshowImages[pointer].style.left = "0";
            let prev;

            if (pointer === slideshowImages.length - 1) {
                pointer = 0
                prev = slideshowImages.length - 1;
            } else {
                pointer += 1;
                prev = pointer - 1;
            }

            slideshowImages[pointer].classList.remove("hidden");
            slideshowImages[pointer].classList.add("shown-flex");
            slideshowImages[pointer].classList.remove("slide-in-from-right-effect");
            slideshowImages[pointer].classList.add("slide-in-from-right-effect");
            

            setTimeout(() => {
                slideshowImages[prev].classList.remove("shown-flex");
                slideshowImages[prev].classList.add("hidden");
                slideshowImages[prev].classList.remove("slide-in-from-right-effect");
                slideshowImages[prev].classList.remove("slide-out-to-left-effect");
                slideshowImages[prev].style.position = "relative";
                slideshowImages[pointer].classList.remove("slide-in-from-right-effect");
            }, 645);
            
            setTimeout(() => {
                rightArrowClickActive = true;
            }, 1000);
        }

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

});