/**
 * crear 3 variables y asignarles un valor numerico a las primeras dos, 
 * y mostrar por consola la suma, resta, el producto, division y observar
 * si son pares o no(los dos primeros numeros). A la tercera variable
 * asignarle un valor y sumarla a la suma anterior, multiplicarla por el 
 * producto anterior y restarsela a la resta anterior. 
 */

let numero_1 = 30 , numero_2 = 45 , numero_3; 


console.log(`La suma entre ${numero_1} y ${numero_2} es: ${numero_1 + numero_2}`);
console.log(`La resta entre ${numero_1} y ${numero_2} es: ${numero_1 - numero_2}`);
console.log(`La multiplicacion entre ${numero_1} y ${numero_2} es: ${ numero_1 * numero_2}`);
console.log(`La division entre ${numero_1} y ${numero_2} es: ${ numero_1 / numero_2}`);

numero_3 = 100; 

console.log("   ")
console.log(`La suma entre la suma anterior ${numero_1 + numero_2} y ${numero_3} es: ${numero_1 + numero_2 + numero_3}`);
console.log(`La resta entre la resta anterior  ${numero_1 - numero_2} y ${numero_3} es: ${numero_1 - numero_2 - numero_3}`);
console.log(`La multiplicacion entre la multiplicacion anterior ${numero_1 * numero_2} y ${numero_3} es: ${numero_1 * numero_2 * numero_3}`);
