window.onload = function() {
	if (document.addEventListener) {
	 	document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
	 	document.addEventListener('click', function (ev) {});
	}
		
	var bt = jQuery(".botao");
	
	loadSounds();
	
	bt.on("click", function(ev) {
		ev.preventDefault();
		var cordaId = "#corda" + jQuery(this).attr("class").split(" ")[0];	
		sounds[jQuery(this).attr("id")].play();
		newAddClass(jQuery(cordaId), "corda-animada");	
	});
};

var newAddClass = function (el, newClass) {
	el.addClass(newClass);
	
	setTimeout(function () {
		el.removeClass(newClass);
	}, 500)
};

var loadSounds = function () {
	var soundsArray = document.getElementsByTagName("audio");

	sounds = {
		casa1a: soundsArray[0],
		casa1b: soundsArray[1],
		casa1c: soundsArray[2],
		casa1d: soundsArray[3],
		casa1e: soundsArray[4],
		casa1f: soundsArray[5],
		casa2a: soundsArray[6],
		casa2b: soundsArray[7],
		casa2c: soundsArray[8],
		casa2d: soundsArray[9],
		casa2e: soundsArray[10],
		casa2f: soundsArray[11],
		casa3a: soundsArray[12],
		casa3b: soundsArray[13],
		casa3c: soundsArray[14],
		casa3d: soundsArray[15],
		casa3e: soundsArray[16],
		casa3f: soundsArray[17]
	}
	
	console.log(soundsArray);
}