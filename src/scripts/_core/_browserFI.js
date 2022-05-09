
// Placeholder for dropdowns

var fixPlaceHolder = document.querySelectorAll("select[placeholder]");
if (fixPlaceHolder.length > 0) {
	for (var i = 0; i < fixPlaceHolder.length; i++) {
		fixPlaceHolder[i].classList.add("placeholder-shown");
		fixPlaceHolder[i].addEventListener("change", function () {
			if (this.value !== "") {
				this.classList.add("placeholder-hidden");
				this.classList.remove("placeholder-shown");
			} else {
				this.classList.remove("placeholder-hidden");
				this.classList.add("placeholder-shown");
			}
		});
	}
}