$(document).ready(function(){
  console.log("I am ready");
  $('#container').hide();

  $('#name').on('click', function(){
    $('#container').fadeToggle('slow');
    $('#canvas').fadeToggle('slow');
  })
})