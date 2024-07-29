// script for swiper slider
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 10,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});
// Swiper slider end


