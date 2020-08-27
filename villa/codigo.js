var vp = document.getElementById("villa");
var papel = vp.getContext("2d");

var cantidad1 = aleatorio(5, 250);
var cantidad2 = aleatorio(5, 250);
var cantidad3 = aleatorio(5, 250);

var fondo = {
  url: "tile.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarfondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarvaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarcerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarpollo);

function cargarfondo(){
  fondo.cargaOK = true;
  dibujar();
}

function cargarvaca(){
  vaca.cargaOK = true;
  dibujar();
}

function cargarcerdo(){
  cerdo.cargaOK = true;
  dibujar();
}

function cargarpollo(){
  pollo.cargaOK = true;
  dibujar();
}



function dibujar(){
  if(fondo.cargaOK){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK){

    console.log(cantidad1);
    for(var v=0; v < cantidad1; v++)
    {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.cargaOK){

    console.log(cantidad2);
    for(var v=0; v < cantidad2; v++)
    {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
  if(pollo.cargaOK){

    console.log(cantidad3);
    for(var v=0; v < cantidad3; v++)
    {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      papel.drawImage(pollo.imagen, x, y);
    }
  }
}

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
