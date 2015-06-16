var keypad = require('./keypad');

//console.log(keypad.getCharCombos('34'));

var keysPressed = "31";

keypad.getCharCombos(keysPressed, function(err, data) {
    if (err) {
        console.log("Error with keypad app");
    }
    else {
        console.log("Printing results: " + data);
    }
});