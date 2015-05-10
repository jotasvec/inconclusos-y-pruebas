$(document).on("ready",main);

function main () {
	// body...
	$("#nav a").on("click", salta);
	$(window).scroll(scrollMenu);
}

function salta(){
	var seccion = $(this).attr("href");
	$("body, html").animate({
		scrollTop: $(seccion).offset().top-150
	}, 800);
	return false;
}

function scrollMenu(){
	// body...
	var secciones = [$("#inicio").offset().top,$("#servicio").offset().top,$("#contacto").offset().top, $("body").height()]

	if($(this).scrollTop() > secciones[0]-150 && $(this).scrollTop() < secciones[1]-150){
		$("#nav a").eq(0).addClass("seleccionado");
	}
	else{
		$("#nav a").eq(0).removeClass("seleccionado");	
	}

	if($(this).scrollTop() > secciones[1]-150 && $(this).scrollTop() < secciones[2]-150){
		$("#nav a").eq(1).addClass("seleccionado");
	}
	else{
		$("#nav a").eq(1).removeClass("seleccionado");	
	}
	if($(this).scrollTop() > secciones[2]-150 && $(this).scrollTop() < secciones[3]-150){
		$("#nav a").eq(2).addClass("seleccionado");
	}
	else{
		$("#nav a").eq(2).removeClass("seleccionado");	
	}

}