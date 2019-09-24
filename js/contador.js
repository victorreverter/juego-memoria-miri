function actualizaContador(){
    var movimientosTexto;
    movimientos++;
    movimientosTexto = movimientos;



    if (movimientos < 10){
      movimientosTexto = "0" + movimientos;
    }
if (movimientos > 20){

  gameOver();


}

    document.querySelector("#mov").innerHTML = movimientosTexto;

  }
