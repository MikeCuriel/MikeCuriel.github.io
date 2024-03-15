window.onload = function() {
    var modal = document.getElementById("miModal");
    var span = document.getElementsByClassName("cerrar")[0];
    var audio = document.getElementById("miMusica");
  
    // Abrir la modal automáticamente
    modal.style.display = "block";
  
    // Cuando el usuario hace click en <span> (x), cierra la modal
    span.onclick = function() {
      modal.style.display = "none";
      audio.play(); // Reproduce la música después de cerrar la modal
    }
  
    // También cierra la modal y reproduce la música si se hace clic fuera de ella
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        audio.play();
      }
    }
  }