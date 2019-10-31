$( document ).ready(function() {

$('.l-6').click(function() {
  $('.s-6').addClass('show');
});

$('.l-2').click(function() {
  $('.s-2').addClass('show');
});

$('.l-3').click(function() {
  $('.s-3').addClass('show');
});

$('.shape').click(function() {
  $(this).removeClass('show');
});

});