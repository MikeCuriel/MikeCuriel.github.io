window.onload = function() {
  var modal = document.getElementById("miModal");
  var span = document.getElementsByClassName("cerrar")[0];
  var audio = document.getElementById("miMusica");
  var stop = document.getElementById("btnMusic");


  // Abrir la modal automáticamente
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; 

  // Cuando el usuario hace click en <span> (x), cierra la modal
  span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
    audio.play(); // Reproduce la música después de cerrar la modal
  }

  // También cierra la modal y reproduce la música si se hace clic fuera de ella
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      audio.play();
    }
  }

  stop.onclick = function(event) {
    if (event.target == stop) {
      if(!audio.paused){
        modal.style.display = "none";
        audio.pause();
      }
      else{
        audio.play();
      }
    }
  }
}

$(document).ready(function(){
  $("#btnWhats").click(function(){
      var phoneNumber = "+5213319923518"; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
      var message = "La familia Bibiana Morales confirma asistencia" ; // Mensaje a enviar
      var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
      window.open(url, "_blank");
  });
});

