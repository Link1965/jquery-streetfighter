$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
  	$('.ryu-ready').show();
  })
 .mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
  })
  .mousedown(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show()
    .animate(
  		{'left': '1020px'},
  		500,
  		function() {
  		$(this).hide();
   		$(this).css('left', '565px');

	});
  })
  .mouseup(function() {
    $('.ryu-still').show();
    $('.ryu-ready').hide();
    $('.ryu-throwing').hide();
    $('.hadouken').hide();
  });
  });