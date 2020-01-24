/* 
Todo ejr code:
*/

var pesoA = 72;
var alturaA =1.72;

var pesoB = 89;
var alturaB =1.75;


/* 

Todo Calcular IMC: 

IMC = peso(kg)/(altura)^2
*/ 

function IMC(peso,altura) {

    indice = peso/(Math.pow(altura,2));
    imc = indice.toFixed(2);
    console.log(`El IMC es de: ${imc}.`);
    //return imc;
}

IMC(pesoA,alturaA);
IMC(pesoB,alturaB);







