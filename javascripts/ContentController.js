$(document).ready(function() {
  $('#container').hide();
  var opacityTarget = 0.06

  $('#name').on('click', function() {
    $('#container').fadeToggle(1000);
    $('#canvas').animate({
      opacity: opacityTarget,
    }, 1000, function() {
      opacityTarget = 1.0;
    });

  })
})