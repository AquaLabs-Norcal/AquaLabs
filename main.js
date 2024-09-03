
document.addEventListener("DOMContentLoaded", () => {

    let homePage = document.getElementById("home-page-container");
    let quotePage = document.getElementById("quote-page-container");
    let currentPage = "home";

    let slideshowDiv = document.getElementById("slideshow-image-container");
    let slideshowImages = slideshowDiv.children;

    let pointer = 0;
    let slideshowLength = slideshowImages.length;
    let slideshowLeftArrow = document.getElementById("slideshow-left-arrow");
    let slideshowRightArrow = document.getElementById("slideshow-right-arrow");

    slideshowLeftArrow.addEventListener("click", () => {
        slideshowImages[pointer].classList.remove("shown-flex");
        slideshowImages[pointer].classList.add("hidden");
        if (pointer === 0) {
            pointer = slideshowImages.length - 1;
        } else {
            pointer -= 1;
        }
        slideshowImages[pointer].classList.remove("hidden");
        slideshowImages[pointer].classList.add("shown-flex");
    });

    slideshowRightArrow.addEventListener("click", () => {
        slideshowImages[pointer].classList.remove("shown-flex");
        slideshowImages[pointer].classList.add("hidden");
        if (pointer === slideshowImages.length - 1) {
            pointer = 0;
        } else {
            pointer += 1;
        }
        slideshowImages[pointer].classList.remove("hidden");
        slideshowImages[pointer].classList.add("shown-flex");
    });

    let getQuoteNavLink = document.getElementById("get-quote-nav-link");

    function swapPage() {
        if (currentPage === "home") {

            homePage.classList.add("hidden");
            homePage.classList.remove("shown-block");
            quotePage.classList.remove("hidden");
            quotePage.classList.add("shown-block");
            currentPage = "quote";
    
        } else {

            quotePage.classList.add("hidden");
            quotePage.classList.remove("shown-block");
            homePage.classList.remove("hidden");
            homePage.classList.add("shown-block");
            currentPage = "home";
        }
    }

    getQuoteNavLink.addEventListener("click", () => {
        swapPage();
    });


    // slideshowDiv.appendChild(slideshowImg1);
});