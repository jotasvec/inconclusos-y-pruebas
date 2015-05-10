//script para el menu
$(document).on("ready",main);

function main(){
	$(".menu a").on("click", salta);
	$(window).scroll(scrollMenu);
}

function salta(){
	var seccion = $(this).attr("href");
	$("body,html").animate({
		scrollTop: $(seccion).offset().top-50
	}, 800);
	return false;
}

function scrollMenu(){
	var secciones = [$(".cont-cntr-right-top").offset().top,$(".servicios").offset().top,$(".portafolio").offset().top,$(".holding").offset().top, $("body").height()]
	
	if ($(this).scrollTop() < secciones[0]){
		$(".menu ul li").eq(0).addClass('seleccionado');
	}else{
		$(".menu ul li").eq(0).removeClass('seleccionado');
	}

	if ($(this).scrollTop() > secciones[1]-150 && $(this).scrollTop() < secciones[2]-150){// && $(this).scrollTop < secciones[1]){
		$(".menu ul li").eq(1).addClass('seleccionado');
	}else{
		$(".menu ul li").eq(1).removeClass('seleccionado');
	}

	if ($(this).scrollTop() > secciones[2]-150 && $(this).scrollTop() < secciones[3]-150){
		$(".menu ul li").eq(2).addClass("seleccionado");
	}else{
		$(".menu ul li").eq(2).removeClass("seleccionado");
	}
	if ($(this).scrollTop() > secciones[3]-200 && $(this).scrollTop() < secciones[4]){
		$(".menu ul li").eq(3).addClass("seleccionado");
	}else{
		$(".menu ul li").eq(3).removeClass("seleccionado");
	}
}