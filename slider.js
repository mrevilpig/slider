$(document).ready(function() {
  var min=1;
  var max=1000;
  $( "#slider-range-min" ).slider({
    range: "min",
    value: 100,
    min: min,
    max: max,
    slide: function( event, ui ) {
      $( "#amount" ).html( "$" + ui.value );
    }
  });
  $( "#amount" ).html( "$" + $( "#slider-range-min" ).slider( "value" ) );
  $("#min").html("$"+min+"<br/> per day");
  $('#max').html("$"+max+"<br/> per day");

  $( ".ui-slider-handle" ).mousemove(function() {
    $('.ui-slider-handle').html("<br/><div class='price'>$" + $( "#slider-range-min" ).slider( "value" ) + "</div>");
  })
});


