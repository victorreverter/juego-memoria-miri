var movimientos;

function iniciar(){

movimientos=0;
reparteTarjetas();
  document.querySelector("#mov").innerText = "00";
clearInterval(cronometro);
iniciaCronometro();









document.querySelectorAll(".tarjeta").forEach(function(elemento) {
  elemento.addEventListener("click", descubrir);

});


}

function reiniciar() {
document.querySelector("#ganaste").classList.remove("visible");
document.querySelector("#game-over").classList.remove("visible");
document.querySelector("#tiempo").classList.remove("visible");

clearInterval(cronometro);

  iniciar();



}
