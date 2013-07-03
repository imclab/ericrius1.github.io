$(document).ready(function() {
  $('#container').hide();
  var opacityTarget = 0.08;

  $('#name').on('click', function() {
    $('#container').fadeToggle(1000);
    console.log(opacityTarget);
    $('#canvas').animate({
      opacity: opacityTarget,
    }, 1000, function() {
      opacityTarget = opacityTarget === 1.0 ? 0.06 : 1.0;
      console.log(opacityTarget);

    });
    
  });
})