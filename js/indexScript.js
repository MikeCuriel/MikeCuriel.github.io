$(document).ready(function(){
    $("#btnWhats").click(function(){
        var phoneNumber = "+5213319923518"; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
        var message = $(this).data("message");
        var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.open(url, "_blank");
    });
  });

$(document).ready(function(){
    $("#EnviarInvitacion").click(function(){
  
        // Obtener el nombre de la persona desde el atributo data-nombre
        var nombre = $(this).attr('data-nombre');
  
        // Obtener el número de teléfono de la misma fila
        var telefono = $(this).closest('tr').find('.NombreContacto').val();
  
        var phoneNumber = "+5213319923518";
        var message = "Hola";
        alert("Nombre obtenido: " + phoneNumber);
        // Crear el enlace de WhatsApp con el nombre y el número de teléfono
        var mensaje = encodeURIComponent(nombre + ' te invito a mi fiesta de XV de Jatziry Giselle. Haz clic aquí para unirte: https://mikecuriel.github.io/pagina/Familia/' + nombre.replace(" ", "") + '.html');
        var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  
        alert("URL:" + url);

        // Abrir el enlace en una nueva pestaña
        window.open(url, "_blank");
    });
  });