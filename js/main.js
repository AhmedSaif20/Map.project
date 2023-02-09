let span = document.querySelector(".upT");

window.onscroll = function () {
    this.scrollY >= 700 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
// **********
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        400: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        676: {
        slidesPerView: 3,
        spaceBetween: 30,
        },
        992: {
        slidesPerView: 4,
        spaceBetween: 40,
        }
    }
});