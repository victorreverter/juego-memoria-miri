function descubrir() {
  var descubiertas;
  var tarjetasPendientes;
  var totalDescubiertas = document.querySelectorAll(
    ".descubierta:not(.acertada)"
  );

  if (totalDescubiertas.length > 1) {
    return;
  }

  this.classList.add("descubierta");


  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  if (descubiertas.length < 2) {
    return;
  }

  comparar(descubiertas);
actualizaContador();

  tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
  if (tarjetasPendientes.length <= 2) {
    setTimeout(finalizar, 2000);
    
  }


}

function comparar(tarjetasAComparar){
  if (tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor){
    acierto(tarjetasAComparar);
  } else{
    error(tarjetasAComparar);
  }
}
