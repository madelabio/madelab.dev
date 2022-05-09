var __videoAutoPlay = () => {
	// VIDEO AUTOPLAY 
	document.addEventListener("DOMContentLoaded", function () {
		var playPromise = document.getElementById("video-background").play();
		if (playPromise !== undefined) {
			playPromise.then(_ => {
			}).catch(error => {});
		}
	});
}
