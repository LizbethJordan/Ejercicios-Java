console.log("Escribe un número");
var num1 = prompt();
console.log("Escribe otro número");
var num2 = prompt();

if(num1>num2){
    console.log("El mayor es " + num1);
} else if (num2>num1) {
    console.log("El mayor es " + num2);
} else if (num1===num2) {
    console.log("Ambos son iguales");
}