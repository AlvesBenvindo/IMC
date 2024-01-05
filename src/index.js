

let altura = Number(document.getElementById("peso").innerHTML);

let peso = Number(document.getElementById("altura").innerHTML);

const IMC = peso / (altura * altura);
document.getElementById("resultado").innerHTML = `O seu IMC = ${IMC}`;
