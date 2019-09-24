
document.querySelector("#comenzar").classList.remove("hidden");
document.querySelector("#mesa").classList.add("hidden");
var inicio = document.querySelector(".inicio");
inicio.addEventListener("click", iniciarJuego);


function iniciarJuego(){
  document.querySelector("#comenzar").classList.add("hidden");
  document.querySelector("#cabecera").classList.remove("hidden");
  document.querySelector("#mesa").classList.remove("hidden");
  iniciar();

}

document.querySelectorAll(".reiniciar").forEach(function(elemento) {
  elemento.addEventListener("click", reiniciar);
});
