// keypad.js

var combos = {
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
    0: ''
}
     
console.log(combos);

//function getCharCombos(keysPressed, callback) {
//    console.log("keys pressed length: " + keysPressed.length);
//    console.log("Final result: " + callback());
 
//}

//var keys = "34";

//getCharCombos(keyspressed, myHandler);
              
module.exports.getCharCombos = function(keysPressed, callback) {
    
    console.log("keysPressed: "+ keysPressed);
                
    var result = [];
    var temp = [];

    result.push("");

    for (var i = 0; i < keysPressed.length; i++) {
        console.log("for i : " + i);
        console.log("  result: " + result);
        
        // Get the result array. First time result is length 1
        for (var j = 0; j < result.length; j++) {
            console.log("  for j : " + j + " result.length: " + result.length);
            console.log("    keysPressed.charAt(" + i + "): " + keysPressed.charAt(i)); 
            var keyNumber = keysPressed.charAt(i); // first time is 3
            var letters = combos[keyNumber]; // if keysPressed.charAt(0), returns "def"
            console.log("    letters: " + letters);
            
            // Check for values 0 and 1 that don't have characters associated with them
            if (letters != '') {
                // Loop through letters associated with the number
                for (var k = 0; k < letters.length; k++) {
                    temp.push(result[j] + letters.charAt(k)); // Add [d e f]
                    console.log("      for k: " + k + " letters.length: " + letters.length);
                    console.log("        result[" + j + "]: " + result[j]);
                    console.log("        letters.charAt(" + k + "): " + letters.charAt(k));
                    console.log("        temp: " + temp);
                }
                console.log("      outside for k: temp: " + temp);
            }
            else {
                temp.push(result[j]);
            }
        }
        result = temp;
        temp = [];
    }

    callback(null, result);
}
