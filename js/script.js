var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
      nextEl: ".portfolioSection .swiper-button-next",
      prevEl: ".portfolioSection .swiper-button-prev",
    },
  });

  var swiper = new Swiper(".reviewsSwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: ".reviewsSection .swiper-button-next",
      prevEl: ".reviewsSection .swiper-button-prev",
    },
  });