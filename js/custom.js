(function($){
  'use strict';
  /*---===jquery-start---===*/

  /*---===isotop-start---===*/
  // filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item'
  }
});
  /*---===isotop-End---===*/
  $('.grid-item').removeAttr('style');

 $('.saction03-insotop-button button').on('click',function(){
   $('.saction03-insotop-button button').removeClass('section03-button-color');
  $(this).addClass('section03-button-color');
 });

 $('.responsive-button i').on('click',function(){
   $('.header-main').slideToggle();
 });

 var a = $(window).width();
 $(window).resize(function(){
   if( a >911){
    $('.header-main').removeAttr('style');
   }
 });
  








 



  /*---===jquery-end---===*/
}) (jQuery);