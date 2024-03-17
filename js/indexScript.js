$(document).ready(function(){
    console.log("Hola");
    $(".EnviarInvitacion").click(function(event){
        // Evitar el comportamiento predeterminado del enlace
        event.preventDefault();
  
        // Obtener el nombre de la persona desde el atributo data-nombre
        var nombre = $(this).attr('data-nombre');
  
        // Obtener el número de teléfono de la misma fila
        var telefono = $(this).closest('tr').find('.NombreContacto').val();
  
        // Imprimir en la consola los datos obtenidos
        console.log("Nombre:", nombre);
        console.log("Teléfono:", telefono);
  
        // Crear el enlace de WhatsApp con el nombre y el número de teléfono
        var mensaje = encodeURIComponent(nombre + ' te invito a mi fiesta de XV de Jatziry Giselle. Haz clic aquí para unirte: https://mikecuriel.github.io/pagina/Familia/' + nombre.replace(" ", "") + '.html');
        var url = 'https://api.whatsapp.com/send?phone=' + '+521' + telefono + '&text=' + mensaje;
  
        // Abrir el enlace en una nueva pestaña
        window.open(url, "_blank");
    });
  });