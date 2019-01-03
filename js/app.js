function inicio(){
  //alert("Hola, mundo");

  var respuesta = document.getElementById("calculadoraFondo")

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

  var suma = document.getElementById("mas");}


  encendido.onclick = function(e){
    if {

    }
    respuesta.TextContent = resultado.TextContent + "on";
    else {
      reset();
    }
  }
  signo.onclick = function(e){
    respuesta.TextContent = resultado.TextContent + "sign"
  }
  raiz.onclick = function(e){
    respuesta.TextContent = resultado.TextContent + "raiz";
  }
  division.onclick = function(e){
    respuesta.TextContent = resultado.TextContent + "dividido";
  }
  siete.onclick = function(e){
    respuesta.TextContent = resultado.TextContent + "7";
  }
  ocho.onclick = function(e){
    respuesta.TextContent = resultado.TextContent + "8";
  }
  nueve.onclick = function(e){
    respuesta.TextContent = resultado.TextContent + "9";
  }
  multiplicacion.onclick = function(e){
    respuesta.TextContent = resultado.TextContent + "por";
  }
  cuatro.onclick = function(e){
    respuesta.TextContent = resultado.TextContent + "4";
  }
  cinco.onclick = function(e){
    respuesta.TextContent = resultado.TextContent + "5";
  }
  seis.onclick = function(e){
    respuesta.TextContent = resultado.TextContent + "6";
  }
  resta.onclick = function(e){
    respuesta.TextContent = resultado.TextContent + "menos";
  }
  cero.onclick = function(e){
    respuesta.TextContent = resultado.TextContent + "0";
  }
  punto.onclick = function(e){
    respuesta.TextContent = resultado.TextContent + "punto";
  }
  igual.onclick = function(e){
    respuesta.TextContent = resultado.TextContent + "igual";
  }
  suma.onclick = function(e){
    respuesta.TextContent = resultado.TextContent + "mas";
  }

}



function teclaTextBox(event){
  var tecla = event.which || event.keyCode;
  document.querySelector("#calculadoraFondo .display span").innerHTML="Presionaste: "+String.fromCharCode(tecla)
}
