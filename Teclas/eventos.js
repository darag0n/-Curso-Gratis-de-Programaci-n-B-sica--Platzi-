var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarConTeclado);
var cuadrito = document.getElementById("dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;
dibujarlinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarConTeclado(evento) {
  var colorx = "brown";
  var movimiento = 3;
 if(evento.keyCode == teclas.UP){
   dibujarlinea(colorx, x, y, x, y - movimiento, papel)
   y = y - movimiento;
 }
 if(evento.keyCode == teclas.DOWN){
   dibujarlinea(colorx, x, y, x, y + movimiento, papel)
   y = y + movimiento;
 }
 if(evento.keyCode == teclas.LEFT){
   dibujarlinea(colorx, x, y, x - movimiento, y, papel)
   x = x - movimiento;
 }
 if(evento.keyCode == teclas.RIGHT){
   dibujarlinea(colorx, x, y, x + movimiento, y, papel)
   x = x + movimiento;
 }
}

console.log(teclas);
