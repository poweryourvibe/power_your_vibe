document.addEventListener("DOMContentLoaded", function () {
    let carouselElement = document.getElementById("imageCarousel");

    if (carouselElement) {
        let carousel = new bootstrap.Carousel(carouselElement, {
            interval: 2000,  // Rotate images every 2 seconds
            wrap: true  // Ensures smooth looping
        });
    }

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
