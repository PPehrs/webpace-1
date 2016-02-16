define([
	'backbone',
	'communicator',
	'hbs!tmpl/layout/homeLayout_tmpl'
],
function( Backbone, Communicator, HomelayoutTmpl  ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.LayoutView.extend({

		initialize: function() {
			_.bindAll(this, 'updateLayout');

			var aImg = new Image();
			aImg.onload = function () {
				console.log(this.src)
			};

			aImg.src = this.borders[0];

			_.each(this.works, function(work) {
				var img = new Image();
				img.onload = function () {
					console.log(this.src)
				};

				img.src = work;
			})
		},

		borders: [
			'http://phandroid.s3.amazonaws.com/wp-content/uploads/2015/03/wood-wallpaper-4.jpg',
			//'https://hdwallpapers.cat/wallpaper/pattern_paper_wood_golden_texture_abstract_hd-wallpaper-1801462.jpg',
			'http://www.yvelledesigneye.com/wp-content/uploads/2012/06/GoldenCarvedWoodSAMPLE.png',
			'http://www.yvelledesigneye.com/wp-content/uploads/2012/06/GoldLeafSAMPLE.png',
			'http://www.yvelledesigneye.com/wp-content/uploads/2012/07/Stucco-2.png',
			'http://www.wolfgranite.com/picdtl/Golden-Wood.jpg',
			'http://thumbs.dreamstime.com/x/buddhist-wood-carving-golden-temple-sri-lanka-11448691.jpg',
			'http://www.marmergranit.com/images/tiles/OnyxGoldenWood.jpg',
			'http://www.marmergranit.com/images/tiles/GialloRigalto.jpg',
			'http://www.marmergranit.com/images/tiles/CremaValencia.jpg'
		],

		works: [
			'http://i.giphy.com/zcRJsHCcYwyGc.gif',
			'http://i.giphy.com/5rfk9LmK9MjGU.gif',
			'http://i.giphy.com/zqtESrEJ0tF5K.gif',
			'http://i.giphy.com/qkNZbFkQRLprW.gif',
			'http://i.giphy.com/zXOIHJS2hbd5u.gif',
			'http://i.giphy.com/bHYgbJUtYvdFS.gif',
			'http://i.giphy.com/I83ZIZoXJLUru.gif',
			'http://i.giphy.com/e92xSnfei7qBW.gif',
			'http://i.giphy.com/k0tLLP5AKzze8.gif',
			'http://i.giphy.com/NRjjGm7Pf5X7W.gif',
			'http://i.giphy.com/JYtmfSNGvcEbC.gif',
			'http://i.giphy.com/6OV0JZzckqhPO.gif'
		],

    	template: HomelayoutTmpl,
		windowSizeInterval: null,
		innerSize: null,
		innerSizeType: null,
		currentWidth: -1,
		currentHeight: -1,

		borderPos: 0,
		workPos: 0,

    	/* ui selector cache */
    	ui: {
			next: '.fa-chevron-circle-right'
		},

		/* Ui events hash */
		events: {
			'dblclick': 'onDblClick',
			'click @ui.next': 'onClickNext'
		},

		onClickNext: function () {
			var _self = this;
			$('#webpace-creation').fadeOut('fast', function() {
				$('#webpace-creation').attr('src',  null);
				if(_self.workPos >= _self.works.length) {
					_self.workPos = 0;
				}

				var containerHeight = $('#webpace-passepartout').height();
				var containerWidth = $('#webpace-passepartout').width();


				$('#webpace-creation').attr('src',  _self.works[_self.workPos]);
				$('.webpace-start-page').fadeOut('slow');

				var aImg = new Image();
				aImg.onload = function () {
					var creationHeight = this.height;
					var creationWidth = this.width;

					if(creationHeight >= creationWidth) {
						$('#webpace-creation').css({
													   'width': containerWidth,
													   'height': containerHeight
												   });
					} else {
						$('#webpace-creation').css({
													   'width': containerWidth,
													   'height': containerHeight
												   });
					}

					$('#webpace-creation').fadeIn(2000, function() {
						setTimeout(function () {
							$('.webpace-surfin').addClass('downer').fadeIn(3000);
						}, 3000);
					});
				};

				aImg.src = _self.works[_self.workPos];
				_self.workPos += 1;
			})
		},

		onDblClick: function () {
			this.borderPos += 1;
			if(this.borderPos >= this.borders.length) {
				this.borderPos = 0;
			}
			$('.webpace-border-image').css('background-image', 'url(' + this.borders[this.borderPos] +')');

		},

		preloadBorders: function () {
			var images = new Array();
			for (var i = 0; i < this.borders.length; i++) {
				images[i] = new Image();
				images[i].src = this.borders[i];
			}
		},

		updateLayout: function () {
			var _self = this;
			var cw = $('#webpace-body').innerWidth();
			var ch = $('#webpace-body').innerHeight();
			if(cw != this.currentWidth || ch != this.currentHeight) {
				this.currentWidth = cw;
				this.currentHeight = ch;
				Communicator.mediator.trigger("WINDOW:SIZE:CHANGED");
				$('#webpace-egg-region').empty();
				_self.startEggs();
			}
		},

		startEggs: function () {
			var cw = $('#webpace-body').innerWidth();
			var ch = $('#webpace-body').innerHeight();

			var h = 200;

			var m = Math.floor(cw / (h));
			var n = Math.floor(ch / (h));

			var k = ( (cw - (m * h)) / m);
			var l = ( (ch - (n * h)) / n);


     		$('#webpace-egg-region').append('<img src="https://scontent.xx.fbcdn.net/hphotos-xpt1/t31.0-8/s960x960/10505104_279472512256179_1029767175783653657_o.jpg" class="webpace-pedro-egg" width="' + h + '" height="' + h + '"  style="margin:' + l + 'px ' + k + 'px;border-radius: ' + h + 'px;height: ' + h + 'px;"></img>');
			setTimeout(function() {
				$('.webpace-pedro-egg').fadeIn(5000);
			}, 3000);

		},

		onDestroy: function () {
			clearInterval(this.windowSizeInterval);
		},

		/* on render callback */
		onRender: function() {},

		onShow: function () {
			$('#webpace-artist-name').animate({fontSize: "3em" }, 1500 , function() {
				$('#webpace-artist-name').addClass('text-shadow-l-white');
				$('#webpace-artist-undertitle').show();

				$('#webpace-artist-undertitle').animate({fontSize: "2.5em" }, 800 , function() {
					$('#webpace-artist-undertitle').addClass('text-shadow-l-white');
					setTimeout(function() {
						$('#webpace-artist-info').fadeIn('slow');
					}, 1000);
				});
			});

			this.windowSizeInterval = setInterval(this.updateLayout, 400);
			this.preloadBorders();

			$( window ).resize(function() {
				if($('#webpace-creation').attr('src')) {

					var containerHeight = $('#webpace-passepartout').height();
					var containerWidth = $('#webpace-passepartout').width();

					var creationHeight = $('#webpace-creation').height();
					var creationWidth = $('#webpace-creation').width();

					if(creationHeight >= creationWidth) {
						$('#webpace-creation').css({
													   'width': containerWidth,
													   'height': containerHeight
												   });
					} else {
						$('#webpace-creation').css({
													   'width': containerWidth,
													   'height': containerHeight
												   });
					}
				}
			});
		}
	});

});
