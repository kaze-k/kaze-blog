var swiper=new Swiper(".blog-slider",{direction:"horizontal",passiveListeners:!0,spaceBetween:0,effect:"slide",loop:!0,speed:800,autoplay:{disableOnInteraction:!0,delay:3e3},mousewheel:!0,pagination:{el:".blog-slider__pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});swiper.el.onmouseenter=function(){swiper.autoplay.stop()},swiper.el.onmouseleave=function(){swiper.autoplay.start()};