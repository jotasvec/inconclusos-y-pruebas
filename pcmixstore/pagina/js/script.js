$(document).on("ready",main);

function main(){
	$("#navigation a").on("click", saltar);
	$(window).scroll(scrollMenu);
}

function saltar(){
	var seccion = $(this).attr("href");
	$("body, html").animate({
		scrollTop: $(seccion).offset().top-150
}, 800);
	return false;
}

function scrollMenu(){
	var secciones = [$("#home").offset().top,$("#mapa").offset().top,$("#formulario").offset().top,$("body").height()]

	if($(this).scrollTop() > secciones[0]-150 && $(this).scrollTop() < secciones[1]-150){
		$("#navigation a").eq(0).addClass("seleccionado");
	}
	else{
		$("#navigation a").eq(0).removeClass("seleccionado");	
	}

	if($(this).scrollTop() > secciones[1]-150 && $(this).scrollTop() < secciones[2]-150){
		$("#navigation a").eq(1).addClass("seleccionado");
	}
	else{
		$("#navigation a").eq(1).removeClass("seleccionado");	
	}
	if($(this).scrollTop() > secciones[2]-150 && $(this).scrollTop() < secciones[3]-150){
		$("#navigation a").eq(2).addClass("seleccionado");
	}
	else{
		$("#navigation a").eq(2).removeClass("seleccionado");	
	}

}		