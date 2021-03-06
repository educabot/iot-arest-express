console.log("hola");
$( document ).ready(function() {

  // Create new aREST device when button is clicked
  $('#validate').click(function() {
    var address = $('#device_address').val();
    var device = new Device(address);
    

    // Set device pins
    device.pinMode(13, "OUTPUT");
    //device.pinMode(2, "INPUT");

    // Button
    $('#on').click(function() {
      device.digitalWrite(13, 1);
    });

    $('#off').click(function() {
      device.digitalWrite(13, 0);
    });

    // Analog write
    // $('#slider').mouseup(function() {
    //   var val = $('#slider').val();
    //   device.analogWrite(13, val);
    // });

    //Analog read every 5 seconds
    device.analogRead(0, function(data) {
      $("#A0").html(data.return_value);
    });
    setInterval(function() {
      device.analogRead(0, function(data) {
        $("#A0").html(data.return_value);
      });
    }, 5000);
/*
    // Digital read every 5 seconds
    device.digitalRead(11, function(data) {
      $('#2').html(data.return_value);
    });  
    setInterval(function() {
      device.digitalRead(11, function(data) {
        $('#2').html(data.return_value);
      });
    }, 5000);

    // Temperature display
    device.getVariable('temperature', function(data) {
      $('#temperature').html(data.temperature);
    });

    // Humidity display
    device.getVariable('humidity', function(data) {
      $('#humidity').html(data.humidity);
    });*/
  });

});

