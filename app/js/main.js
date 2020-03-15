
$(document).ready(function(){
  $('.header__slider-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<img class="nextArrow slider-nextArrow" src="../img/icons/slider-arrow.png" alt="arrow-right">',
    prevArrow: '<img class="prevArrow slider-prevArrow" src="../img/icons/slider-arrow.png" alt="arrow-left">'
  });
});
