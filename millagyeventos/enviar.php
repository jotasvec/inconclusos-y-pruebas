<?php 

//variables

//variables del form
$nombre = $_POST["inputNombre"];
$email = $_POST["inputEmail"];
$asunto = $_POST["inputAsunto"];
$comentario = $_POST["inputComentario"];

//variables fecha y hora

$fecha = date("d-m-");
$hora = date("H:i:s");

//datos envio de mensaje
$para = "jotasvec@gmail.com";
$titulo = "enviado desde millagyEventos";
$encabezado = "mensaje enviado por: ".$email;
$mensaje = "nombre: ".$nombre.
			"asunto: ".$asunto.
			"mensaje: ".$comentario.
			"enviado dese millagyEventos el ".$fecha." a las ".$hora;

//envio del mensaje

$envioEmail = mail($para, $titulo, $mensaje, $encabezado);

if($envioEmail){
	# code...
	echo "<script>
	alert('mensaje a sido enviado, muchas gracias');
	window.location.href = 'index.html';
	</script>";
}else{
	echo "<script>
	alert('a fallado el envio del mensaje, por favor intente de nuevo');
	window.location.href = 'index.html';
	</script>";
}


?>