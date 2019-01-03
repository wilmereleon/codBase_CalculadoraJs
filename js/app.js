function inicio(){

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

  var cero = document.getElementById("0");
  var punto = document.getElementById("punto");
  var igual = document.getElementById("igual");

  var suma = document.getElementById("mas");


  encendido.onclick = function(e){
    display.textContent = resultado.textContent + "on";
  }
  signo.onclick = function(e){
    display.textContent = display.textContent + "sign"
  }
  raiz.onclick = function(e){
    display.textContent = display.textContent + "raiz";
  }
  division.onclick = function(e){
    display.textContent = display.textContent + "dividido";
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
    display.textContent = display.textContent + "por";
  }
  cuatro.onclick = function(e){
    display.textContent = display.textContent + "4";
  }
  cinco.onclick = function(e){
    respuesta.textContent = display.textContent + "5";
  }
  seis.onclick = function(e){
    display.textContent = display.textContent + "6";
  }
  resta.onclick = function(e){
    display.textContent = display.textContent + "menos";
  }
  cero.onclick = function(e){
    display.textContent = display.textContent + "0";
  }
  punto.onclick = function(e){
    display.textContent = display.textContent + "punto";
  }
  igual.onclick = function(e){
    display.textContent = display.textContent + "igual";
  }
  suma.onclick = function(e){
    display.textContent = display.textContent + "mas";
  }

}



function teclaTextBox(event){
  var tecla = event.which || event.keyCode;
  document.querySelector("#calculadoraFondo .display span").innerHTML="Presionaste: "+String.fromCharCode(tecla)
}
