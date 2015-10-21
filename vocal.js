console.log("Introduce una vocal");
var vocal = prompt();

function max() {
if ((vocal === 'a') || (vocal === 'e') || (vocal === 'i') || (vocal === 'o') || (vocal === 'u')) {
    console.log(vocal + "es una vocal");
} 
else if ((vocal != 'a') || (vocal != 'e') || (vocal != 'i') || (vocal != 'o') || (vocal != 'u')) {
    console.log(vocal + "no es una vocal");
} 
}

max();