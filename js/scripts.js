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
      stop.src= '../../img/play.png';
    }
  }

  stop.onclick = function(event) {
    if (event.target == stop) {
      if(!audio.paused){
        modal.style.display = "none";
        audio.pause();
        stop.src= '../../img/play.png';
      }
      else{
        audio.play();
        stop.src= '../../gif/music.gif';
      }
    }
  }
}

$(document).ready(function(){
  $("#btnWhats").click(function(){
      var phoneNumber = "+5213319923518"; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
      var message = $(this).data("message");
      var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
      window.open(url, "_blank");
  });
});

 // Establecer la fecha de finalización del contador
 var countdownDate = new Date("Apr 27, 2024 16:00:00").getTime();

 // Actualizar el contador cada segundo
 var countdown = setInterval(function() {
   // Obtener la fecha y hora actuales
   var now = new Date().getTime();
   
   // Calcular la diferencia entre la fecha de finalización y la fecha actual
   var distance = countdownDate - now;
   
   // Calcular los días, horas, minutos y segundos restantes
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
  // Mostrar el resultado en los elementos HTML
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
   
   // Si el contador llega a cero, detenerlo
   if (distance < 0) {
     clearInterval(countdown);
     document.getElementById("countdown").innerHTML = "EXPIRED";
   }
 }, 1000);

 window.addEventListener('beforeunload', function(event) {
  var audio = document.getElementById('audio');
  audio.pause();
});

var estadoReproduccion = false; // Estado inicial de la reproducción

function cambiarImagen() {
  var boton = document.getElementById('btnMusic');
  if (estadoReproduccion) {
    boton.src = 'play.png'; // Cambia a la imagen de play
  } else {
    boton.src = 'pause.png'; // Cambia a la imagen de pausa
  }
  estadoReproduccion = !estadoReproduccion; // Invierte el estado de reproducción
}
