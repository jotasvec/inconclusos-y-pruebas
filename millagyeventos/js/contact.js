$(document).on("ready",main);

function main() {
	// body...
	$("#button").on("click", validaFormulario);
}

function validaFormulario() {
	// body...
	var nombre = $("#inputNombre").val();
	var email = $("#inputEmail").val();
	var asunto = $("#inputAsunto").val();
	var comentario = $("#inputComentario").val();

	if (nombre == "") {
		$("#inputNombre").addClass("campo_vacio");
	}else{
		$("#inputNombre").removeClass("campo_vacio");
	}
	if (email == "") {
		$("#inputEmail").addClass("campo_vacio");
	}else{
		$("#inputEmail").removeClass("campo_vacio");
	}
	if (asunto == "") {
		$("#inputAsunto").addClass("campo_vacio");
	}else{
		$("#inputAsunto").removeClass("campo_vacio");
	}
	if (comentario == "") {
		$("#inputComentario").addClass("campo_vacio");
	}else{
		$("#inputComentari").removeClass("campo_vacio");
	}
	
	if(nombre == "" || email == "" || asunto == "" || comentario == "" ){
		$("#errores").alert('open');
		return false;
	}else{
		$("#errores").alert('close');
		return true;
	}
}