$(document).ready(function(){
    $(".EnviarInvitacion").click(function(event){
        // Obtener el valor del primer <td> (nombre)
        var primerTD = $(this).closest('tr').find('td:first-child').text();
        
        // Obtener el nombre de la persona desde el atributo data-nombre
        var nombre = $(this).attr('data-nombre');
  
        // Obtener el número de teléfono de la misma fila
        var telefono = $(this).closest('tr').find('.NombreContacto').val();

        // Crear el enlace de WhatsApp con el nombre y el número de teléfono
        var mensaje = encodeURIComponent(primerTD + ' te invito a mi fiesta de XV de Jatziry Giselle. Haz clic aquí para unirte: https://mikecuriel.github.io/pagina/Familia/' + nombre.replace(" ", "") + '.html');
        var url = "https://wa.me/" + "+521" + telefono + "?text=" + mensaje;

        // Abrir el enlace en una nueva pestaña
        window.open(url, "_blank");
    });
  });