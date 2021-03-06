$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    $('.ryu-cool').hide();
  })

  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })

  .mousedown(function() {
    playHadouken();
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
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
  });

  $(document).keydown(function(event) {
    if (event.which == 88) {
      $('.ryu-cool').show();
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
    }
  })

  $(document).keyup(function(event) {
    if (event.which == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
      $('.ryu-ready').hide();
    }
  })

  
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}