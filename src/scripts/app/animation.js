var __appSetAnimation = (e) => {

	window.addEventListener("load", () => {
		const sections = Array.from(document.querySelectorAll('.animatable'));
		const scrollHandler = entries =>
			entries.forEach(entry => {
				const section = entry.target;
				const animate = section.dataset.animate.split(" ")
				if (entry.intersectionRatio > 0) {
					animate.forEach((anim) => {
						section.classList.add(anim);
					});
				}
			});
		const observer = new IntersectionObserver(scrollHandler);
		sections.forEach(section => observer.observe(section));
	});


}
