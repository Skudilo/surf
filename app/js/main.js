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
    });

    $('.holder__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows--left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows--right" src="img/arrow-right.svg" alt=""></img>'
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></<img></div></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></<img></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    $('.quantity-button').on('click', function() {
        let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
        $('.summ').html('$' + summ + ' USD')
    });

    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ  + ' USD');

    $('.surfboard__box-circle').on('click', function () {
        $(this).toggleClass('active')
    });

    $('.menu-btn').on('click', function () {
        $('.menu').toggleClass('active');
    })
});

