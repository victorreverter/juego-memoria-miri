function acierto(lasTarjetas){
  setTimeout(function(){
  lasTarjetas.forEach(function(elemento){
    elemento.classList.add("acertada");
  });
}, 200);
}
function error(lasTarjetas){
  setTimeout(function() {
    lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("error");
  });

},800);

  setTimeout(function() {
    lasTarjetas.forEach(function(elemento) {
    elemento.classList.remove("error");
      elemento.classList.remove("descubierta");


    });
  }, 1000);

}
