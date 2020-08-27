var numeros = 100;

for(var i = 1; i <= 100; i++){
  var divi = false;
  if(i%3==0){
    document.write("Fizz");
    divi = true;
  }
  if(i%5==0){
    document.write("Buzz");
    divi = true;
  }
  if(!divi) {
    document.write(i);
  }
  document.write("<br />");

}
