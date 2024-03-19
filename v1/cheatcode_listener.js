class CheatCode {

	constructor(code, action) {
		this.code = code;
		this.action = action;
		this.progress = 0;
	}

	handleKey(key) {
		if(key === this.code[this.progress]) {
			this.progress += 1;
			if(this.progress === this.code.length) {
				this.action();
				this.reset();
			}
		} else {
			this.reset();
		}
	}

	reset() {
		this.progress = 0;
	}

}

function konamiCode() {
	var audio = new Audio("../assets/audio/mario_power_up.mp3");
	audio.play();
}

function exampleFunction() {
	window.location.href = "/example.html";
}

const cheats = [
	new CheatCode(['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'], konamiCode),
	new CheatCode(['t', 'e', 's', 't'], exampleFunction)
];

document.addEventListener('keyup', (e) => {
	cheats.forEach((cheat) => cheat.handleKey(e.key));
});
