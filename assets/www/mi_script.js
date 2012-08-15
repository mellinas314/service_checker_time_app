( function( $ ) {
	var total;
	$(document).bind('pageinit', init);

	function init() {
		renderHorasGuardadas();
		registerEventListeners();
	}

	function registerEventListeners() {
		$("#add_time").on("tap", addTime);
		$("#reset").on("tap", resetTime);
	}

	function renderHorasGuardadas() {
		total = parseInt(window.localStorage.getItem("total")) || 0;
		if(total!=0) {
			//Añado la cabecera
			$("#reset").show();
			var html = '<li data-role="list-divider" role="heading" class="ui-li ui-li-divider ui-bar-e ui-corner-top ui-corner-bottom">Tiempos almacenados</li>'
			$("#tiempos").append(html);
			//Añado los tiempos
			for(var i = 0; i<total; i++){
				var hora = new Date(window.localStorage.getItem("hora"+i));
				var minutos = hora.getMinutes().toString();
				var segundos = hora.getSeconds().toString();
				if(minutos.length<2) {
					minutos = "0" + minutos;
				}
				if(segundos.length<2) {
					segundos = "0" + segundos;
				}
				//Construyo el nuevo elemento para la lista
				var html = "<li data-theme='c' class='ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-corner-bottom ui-btn-up-c mia'><div class='ui-btn-inner ui-li'><div class='ui-btn-text'><a class='ui-link-inherit'>Hora "+ parseInt(i+1) + ": " + hora.getHours() + ":" + minutos + ":" + segundos + "</div></div></a></li>"
				$("#tiempos").append(html);
			}
		}
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
		window.localStorage.setItem("hora" + total, hora);
		total++;
		window.localStorage.setItem("total", total);
		var minutos = hora.getMinutes().toString();
		var segundos = hora.getSeconds().toString();
		if(minutos.length<2) {
			minutos = "0" + minutos;
		}
		if(segundos.length<2) {
			segundos = "0" + segundos;
		}
		//Construyo el nuevo elemento para la lista
		var html = "<li data-theme='c' class='ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-corner-bottom ui-btn-up-c mia'><div class='ui-btn-inner ui-li'><div class='ui-btn-text'><a class='ui-link-inherit'>Hora "+ total + ": " + hora.getHours() + ":" + minutos + ":" + segundos + "</div></div></a></li>"
		$("#tiempos").append(html);
	}

	function resetTime( evt ) {
		total = 0;
		window.localStorage.removeItem("total");
		$("#tiempos").html("");
		$("#reset").hide();
	}
})( jQuery )