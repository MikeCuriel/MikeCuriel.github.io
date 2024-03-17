$(document).ready(function(){
    $(".EnviarInvitacion").click(function(event){
        // Obtener el valor del primer <td> (nombre)
        var primerTD = $(this).closest('tr').find('td:first-child').text();
        
        // Obtener el nombre de la persona desde el atributo data-nombre
        var nombre = $(this).attr('data-nombre');
  
        // Obtener el número de teléfono de la misma fila
        var telefono = $(this).closest('tr').find('.NombreContacto').val();

        // Crear el enlace de WhatsApp con el nombre y el número de teléfono
        var mensaje = encodeURIComponent('Hola ' + primerTD + ' soy Jatziry Giselle tienen un lugar especial reservado en mi corazón y en mi fiesta de XV años, su presencia sería el toque perfecto para hacer de este día un momento inolvidable. ¿Qué dices? ¿Te unes a nosotros para celebrar juntos? ¡Haz clic aquí para confirmar tu asistencia y ser parte de este día único en mi vida!": https://mikecuriel.github.io/pagina/Familia/' + nombre.replace(" ", "") + '.html');
        var url = "https://wa.me/" + "+521" + telefono + "?text=" + mensaje;

        // Abrir el enlace en una nueva pestaña
        window.open(url, "_blank");
    });
  });