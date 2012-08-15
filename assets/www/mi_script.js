( function( $ ) {
	var total = 0;
	$(document).bind('pageinit', registerEventListeners);

	function registerEventListeners() {
		$("#add_time").on("tap", addTime);
		$("#reset").on("tap", resetTime);
	}

	function addTime (evt) {
		//Calculo la nueva fecha
		var hora = new Date();
		//Añado el tiempo a la lista de tiempos
		if(total==0) {
			$("#reset").show();
			var html = '<li data-role="list-divider" role="heading" class="ui-li ui-li-divider ui-bar-e ui-corner-top ui-corner-bottom">Tiempos almacenados</li>'
			$("#tiempos").append(html);
		}
		total++;
		//Construyo el nuevo elemento para la lista
		var html = "<li data-theme='c' class='ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-corner-bottom ui-btn-up-c mia'><div class='ui-btn-inner ui-li'><div class='ui-btn-text'><a class='ui-link-inherit'>Hora "+ total + ": " + hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds() + "</div></div></a></li>"
		$("#tiempos").append(html);
	}

	function resetTime( evt ) {
		total = 0;
		$("#tiempos").html("");
		$("#reset").hide();
	}
})( jQuery )