function konamiCode() {
	var audio = new Audio("../assets/audio/mario_power_up.mp3");
	audio.play();
}

function exampleFunction() {
	window.location.href = "/example.html";
}

const CHEAT_CODES = [
	{
		code: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
		function: konamiCode
	},
	{
		code: ['t', 'e', 's', 't'],
		function: exampleFunction
	}
];
let cursors = new Array(CHEAT_CODES.length).fill(0);

document.addEventListener('keyup', (e) => {
	for(let i = 0; i < CHEAT_CODES.length; i++) {
		cursors[i] = (e.key == CHEAT_CODES[i].code[cursors[i]]) ? cursors[i] + 1 : 0;
		if(cursors[i] == CHEAT_CODES[i].code.length) {
			CHEAT_CODES[i].function();
			cursors[i] = 0;
		}
	}
});
