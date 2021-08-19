;(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const swiperContents = document.querySelectorAll('.js-back-slider');

        if (swiperContents.length) {
            for (const swiperContent of swiperContents) {
                const prev = swiperContent.querySelector('.js-back-slider-controls .prev');
                const next = swiperContent.querySelector('.js-back-slider-controls .next');

                const swiper = swiperContent.querySelector('.js-back-slider-swiper');

                if (swiper) {
                    new Swiper(swiper, {
                        slidesPerView: "auto",
                        autoplay: {
                            delay: 3000,
                        },
                        loop: true,
                        navigation: {
                            prevEl: prev,
                            nextEl: next,
                        }
                    });
                }
            }
        }
    })
})();