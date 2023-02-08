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