var __appFancyBox = () => {
	///////////////////////////////////
	// FANCY BOX
	///////////////////////////////////
	Fancybox.bind('[data-fancybox]', {
		groupAll: true, // Group all items
		Image: {
			zoom: true,
		},
		Panzoom: {
			zoomFriction: 0.7,
			maxScale: function () {
				return 5;
			},
		},
		Thumbs: {
			Carousel: {
				Sync: {
					friction: 0.9
				}
			},
		},
		Toolbar: {
			display: [
				{ id: "prev", position: "center" },
				{ id: "counter", position: "center" },
				{ id: "next", position: "center" },
				"zoom",
				"slideshow",
				"fullscreen",
				"download",
				"thumbs",
				"close",
			],
		}
	});
	// Fancybox.Plugins.Thumbs.defaults.Carousel.preload = 0;
}