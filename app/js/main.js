$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows--left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows--right" src="img/arrow-right.svg" alt=""></img>',
        asNavFor: '.slider-dotshead'
    })
    
    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider'
    });

    $('.surf-slider').slick({
        prevArrow: '<img class="slider-arrows slider-arrows--left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows--right" src="img/arrow-right.svg" alt=""></img>',
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-map'
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slideToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true
    }) ;
});

