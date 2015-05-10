<?php 

//fecha y hora
$fecha = date("d-m-");
$hora = date("H:i:s");

//datos desde el html

$nombre = $_POST["fNombre"];
$email = $_POST["fEmail"];
$asunto = $_POST["fAsunto"];
$mensaje = $_POST["fMensaje"];

//datos para el envio
$para = "jotasvec@gmail.com";
$titulo = "enviado desde pcmix-store";
$header = "enviado por: ".$email;
$msjCorreo = 'nombre: '.$nombre.'\r\n 
				 	email: '.$email. '\r\n
					asunto: '.$asunto.'\r\n
					mensaje: '.$mensaje.'\r\n 
					enviado: '.$fecha.' a las '.$hora;

$mailSend = mail($para, $titulo, $msjCorreo, $header);				
//echo $mailSend;

if ($mailSend) {
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