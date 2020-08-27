var texto = document.getElementById("text_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoporclick);

var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var ancho = d.width;
var alto = d.height;


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoporclick(){
  var x = parseInt(texto.value);
  var lineas = x;
  var l = 0;
  var xi, yf;
  var color2 = "#9620FF"

  while (l < lineas) {
    xi = (ancho/lineas)*l;
    yf = (alto/lineas)*(l+1);
    dibujarlinea(color2,xi,0,300,yf);
    l++;
  }
  l = 0;
  while (l < lineas) {
    xi = (ancho/lineas)*l;
    yf = (alto/lineas)*(l+1);
    dibujarlinea(color2,0,xi,yf,300);
    l++;
  }


  dibujarlinea(color2,1,1,300,1);
  dibujarlinea(color2,299,299,299,1);
  dibujarlinea(color2,1,1,1,300);
  dibujarlinea(color2,299,299,1,299);
}
