$(document).ready(function() {
  $('#container').hide();
  var opacityTarget = 0.06

  $('#name').on('click', function() {
    $('#container').fadeToggle(1000);
    $('#canvas').fadeToggle(1000);
    });

  })
})