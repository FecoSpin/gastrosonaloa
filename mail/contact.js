$(document).ready(function(){
    $("#contactForm").on("submit", function(e){
        e.preventDefault();
        var name = $("#name").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var message = $("#message").val();
        if(name != "" && phone != "" && email != "" && message != ""){
            $.ajax({
                url: '../forms/contact.php',
                type: 'POST',
                data: {name: name, phone: phone, email: email, message: message},
                success: function(data){
                    if(data == "success"){
                        Swal.fire({
                            icon: 'success',
                            title: 'Mensaje enviado. Gracias '+ name+ ', le responderemos pronto',
                            showConfirmButton: false,
                            timer: 1800
                          })
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Error al enviar el mensaje. Inténtelo de nuevo más tarde.'
                          })
                    }
                }
            });
        }else{
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Por favor llene todos los campos.'
              })
        }
    });
});
