var numeroA;
var numeroB;
var respuestaAB;

function calculadora(){

  var display = document.getElementById("display");

  var encendido = document.getElementById("on");
  var signo = document.getElementById("sign");
  var raiz = document.getElementById("raiz");
  var division = document.getElementById("dividido");

  var siete = document.getElementById("7");
  var ocho = document.getElementById("8");
  var nueve = document.getElementById("9");
  var multiplicacion = document.getElementById("por");

  var cuatro = document.getElementById("4");
  var cinco = document.getElementById("5");
  var seis = document.getElementById("6");
  var resta = document.getElementById("menos");

  var uno = document.getElementById("1");
  var dos = document.getElementById("2");
  var tres = document.getElementById("3");

  var cero = document.getElementById("0");
  var punto = document.getElementById("punto");
  var igual = document.getElementById("igual");

  var suma = document.getElementById("mas");


  encendido.onclick = function(e){
    reseteo();
  }
  signo.onclick = function(e){
    display.textContent = display.textContent + "sign"
  }
  raiz.onclick = function(e){
    numeroA = display.textContent;
    respuestaAB = "raiz";
  }
  division.onclick = function(e){
    numeroA = display.textContent;
    respuestaAB = "/";
    limpieza();
  }
  siete.onclick = function(e){
    display.textContent = display.textContent + "7";
  }
  ocho.onclick = function(e){
    display.textContent = display.textContent + "8";
  }
  nueve.onclick = function(e){
    display.textContent = display.textContent + "9";
  }
  multiplicacion.onclick = function(e){
    numeroA = display.textContent;
    respuestaAB = "*";
    limpieza();
  }
  cuatro.onclick = function(e){
    display.textContent = display.textContent + "4";
  }
  cinco.onclick = function(e){
    display.textContent = display.textContent + "5";
  }
  seis.onclick = function(e){
    display.textContent = display.textContent + "6";
  }
  uno.onclick = function(e){
    display.textContent = display.textContent + "1";
  }
  dos.onclick = function(e){
    display.textContent = display.textContent + "2";
  }
  tres.onclick = function(e){
    display.textContent = display.textContent + "3";
  }

  resta.onclick = function(e){
    numeroA = display.textContent;
    respuestaAB = "-";
    limpieza();
  }
  cero.onclick = function(e){
    display.textContent = display.textContent + "0";
  }
  punto.onclick = function(e){
    display.textContent = display.textContent + "punto";
  }
  igual.onclick = function(e){
    numeroB = display.textContent;
    respuesta();
  }
  suma.onclick = function(e){
    numeroA = display.textContent;
    respuestaAB = "+";
    limpieza();
  }
  signo.onclick = function(e){
    numeroA = display.textContent;
    respuestaAB = "sign";
    respuesta2();
  }
}
function limpieza(){
    display.textContent = "";

}
function reseteo(){
  display.textContent = 0;
  numeroA = "";
  numeroB = "";
  respuestaAB = "";
}
function respuesta(){
  var rta = 0;
  switch(respuestaAB){
    case "+":
      rta = parseFloat(numeroA) + parseFloat(numeroB);
      break;
    case "-":
      rta = parseFloat(numeroA) - parseFloat(numeroB);
      break;
    case "*":
      rta = parseFloat(numeroA) * parseFloat(numeroB);
      break;
    case "/":
      rta = parseFloat(numeroA) / parseFloat(numeroB);
      break;
    case "raiz":
      rta = parseFloat(Math.sqrt(numeroA));
      break;
  }
  reseteo();
  display.textContent = rta;
}


function respuesta2(){
  var rta = 0;
  switch(respuestaAB){
    case "sign":
      rta = parseFloat(-numeroA);
      break;
  }
  reseteo();
  display.textContent = rta;
}





/***
function teclaTextBox(event){
  var tecla = event.which || event.keyCode;
  document.querySelector("#calculadoraFondo .display span").innerHTML="Presionaste: "+String.fromCharCode(tecla)
}
*****/
