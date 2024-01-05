
let peso = document.getElementById("peso");

let altura = document.getElementById("altura");

let calcular = document.getElementById("form");

calcular.addEventListener( "submit", (event) => {

  event.preventDefault();

  const IMC = peso.value / (altura.value * altura.value);

  document.getElementById("resultado").innerHTML = `O seu IMC = ${IMC}`;

})




