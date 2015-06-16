// modular.js

var keypad = require('./keypad');

var keysPressed = "234";

keypad.getCharCombos(keysPressed, function(err, data) {
    if (err) {
        console.log("Error with keypad app");
    }
    else {
        console.log("Printing results: " + data);
    }
});
