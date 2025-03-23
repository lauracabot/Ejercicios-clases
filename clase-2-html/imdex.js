// Este problema consiste en recorrer un array de numeros, si el numero es un multiplo de 3 tenemos que reemplazarlo con la palabra FIZZ, si es un multiplo de 5 con la palabra BUZZ y si es un multiplo de 3 y 5 con FIZZ BUZZ.
//Ej. 1,2, FIZZ, 4, BUZZ, 7 , 9 , FIZZ BUZZ, 11, FIZZ, 13, 14, FIZZ BUZZ...

//Primero de todo tenemos que conocer el operador de resto(%), este operador nos permite calcular la resta de una division.

//ej. 3 % 3 es 1 y 3 % 3 es 0.

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

numeros.forEach((numero, i) =>{
    if(numero & 3 === 0 && numero % 5 ===0)
    numeros[i] = "FIZZ BUZZ";

    else if(numero % 3 === 0)
        numeros[i] = "FIZZ";
    else if(numero % 5 === 0)
        numeros[i] = "BUZZ";
})

console.log(numeros[i]);
