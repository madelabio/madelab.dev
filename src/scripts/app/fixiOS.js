var __appFixediOS = () => {
	let wwget = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if (navigator.userAgent.match(/(iPad|iPhone|iPod|webOS|Safari)/gi) && wwget < 1366) {
		var css = '' +
		'#worn-video,' +
		'#worn-involved' +
		'{background-attachment: scroll !important;}' +
		'',
			head = document.head || document.getElementsByTagName('head')[0],
			style = document.createElement('style');

		head.appendChild(style);

		if (style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}

	}
}