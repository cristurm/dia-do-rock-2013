document.ontouchmove = function(e){
	e.preventDefault();
}

window.onload = function () {
	var page = new Page();
	page.init();
};

var Page = function () {
	return {
		init: function () {
			this.isMob = (/iPhone|iPod|iPad|Android|BlackBerry|Windows Phone/i).test(navigator.userAgent);
			var fileExtension = this.getFileExtension()

			this.bindEvents();

			createjs.Sound.initializeDefaultPlugins();

			var manifest = [

			    {src: 'audio/B5' + fileExtension,  	id:'casa2b'},
			    {src: 'audio/Db5' + fileExtension,  id:'casa3c'},
			    {src: 'audio/D5' + fileExtension,   id:'casa2c'},

			    {src: 'audio/F6' + fileExtension,  	id:'casa3a'},
			    {src: 'audio/G6' + fileExtension,  	id:'casa2a'},

			    {src: 'audio/A4' + fileExtension,  	id:'casa2e'},
			    {src: 'audio/B4' + fileExtension,  	id:'casa1e'},
			    {src: 'audio/D3' + fileExtension,  	id:'casa2f'},
			    {src: 'audio/E3' + fileExtension,  	id:'casa1f'},

			    {src: 'audio/Ab6' + fileExtension, 	id:'casa1a'},
			    {src: 'audio/Bb5' + fileExtension, 	id:'casa3b'},

			    {src: 'audio/G5' + fileExtension,  	id:'casa1d'},
			    {src: 'audio/Gb5' + fileExtension, 	id:'casa2d'},
			    {src: 'audio/F5' + fileExtension,  	id:'casa3d'},
			    {src: 'audio/E5' + fileExtension,  	id:'casa1c'},

			    {src: 'audio/G4' + fileExtension,  	id:'casa3e'},
			    {src: 'audio/C5' + fileExtension,  	id:'casa1b'},
			    {src: 'audio/C3' + fileExtension,  	id:'casa3f'}
			];

			createjs.Sound.registerManifest(manifest);
		},

		getFileExtension: function () {
			if ( (/opera|firefox/i).test(navigator.userAgent) ) {
				return '.ogg'
			} else {
				return '.mp3';
			}
		},

		playSound: function (target) {
		    var instance = createjs.Sound.play(target.id, createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
		    if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) { return; }
		},

		onStringClicked: function (el) {
			var cordaId = "#corda" + $(el).attr("class").split(" ")[0];
			var sombra = $(el).find(".sombra");
			
			this.newAddClass($(cordaId), sombra, "corda-animada", "ativa");
			
			this.playSound(el);
		},

		newAddClass: function (el1, el2, newClass1, newClass2) {
			el1.addClass(newClass1);
			el2.addClass(newClass2);
			
			setTimeout(function () {
				el1.removeClass(newClass1);
				el2.removeClass(newClass2);
			}, 500)
		},
		
		bindEvents: function () {
			var self = this,
				keys = $('#casas .botao');

			for (var i = 0, len = keys.length; i < len; i++) {
				if (self.isMob) {
					$(keys[i]).tap(function (ev) {
						ev.preventDefault();
						self.onStringClicked(this);
					});
				} else {
					$(keys[i]).on('click', function (ev) {
					 	ev.preventDefault();
					 	
					 	self.onStringClicked(this);
				 	});
				}
			}

			if (!this.isMob) {
				this.bindKeyboardKeys()
			}
		},

		configKeys: function () {
			this.keysElements = {
				65: $('#casa1a'),
				66: $('#casa2a'),
				67: $('#casa3a'),

				68: $('#casa1b'),
				69: $('#casa2b'),
				70: $('#casa3b'),

				71: $('#casa1c'),
				72: $('#casa2c'),
				73: $('#casa3c'),

				74: $('#casa1d'),
				75: $('#casa2d'),
				76: $('#casa3d'),

				77: $('#casa1e'),
				78: $('#casa2e'),
				79: $('#casa3e'),

				80: $('#casa1f'),
				81: $('#casa2f'),
				82: $('#casa3f')
			}
		},

		bindKeyboardKeys: function () {
			var self = this;

			this.configKeys();

			window.onkeydown = function (ev) {
				self.onKeyPress(ev.keyCode);
			}
		},

		onKeyPress: function (key) {
			if ( this.keysElements[key] ) {
				this.onStringClicked( this.keysElements[key][0] );
			}
		}
	}
}