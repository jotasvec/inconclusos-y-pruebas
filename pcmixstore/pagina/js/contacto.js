$(document).on("ready", main);
/* 
Funcion 
*/
function main(){
	$("#buttom").on("click", validaFormulario);
}

function validaFormulario(){
	var nombre = $("#fNombre").val();
	var email = $("#fEmail").val();
	var asunto = $("#fAsunto").val();
	var mensaje = $("#fMensaje").val();

	if(nombre == ""){
		$("#fNombre").addClass("campo_vacio");
	}else{
		$("#fNombre").removeClass("campo_vacio");
	}
		if(email == ""){
		$("#fEmail").addClass("campo_vacio");
	}else{
		$("#fEmail").removeClass("campo_vacio");
	}
		if(asunto == ""){
		$("#fAsunto").addClass("campo_vacio");
	}else{
		$("#fAsunto").removeClass("campo_vacio");
	}
		if(mensaje == ""){
		$("#fMensaje").addClass("campo_vacio");
	}else{
		$("#fMensaje").removeClass("campo_vacio");
	}

	if(nombre == "" || email == "" || asunto == "" || mensaje == ""){
		$("#errores").fadeIn();
		return false;
	}else{
		$("#errores").fadeOut();
		/* hacer k los valores sean vacio nuevamente */
		return true;
	}
}