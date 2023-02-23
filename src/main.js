import "phaser";
import "../assets/style.css";
import ui from "./ui";
import world from "./world";
import gameOver from "./gameOver";
import intro from "./intro";

const GameConfig = {
	title: "ExampleGame",
	// url: "https://github.com/digitsensitive/phaser3-typescript",
	version: "1.0",
	width: 80 * 16,
	height: 50 * 16,
	type: Phaser.AUTO,
	parent: "app",
	scene: [intro, world, ui, gameOver],
	input: {
		keyboard: true,
	},
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 0 },
			debug: false,
		},
	},
	backgroundColor: "#472d3c",
	render: { pixelArt: false, antialias: true },
	// scale: {
	// 	mode: Phaser.Scale.FIT,
	// 	autoCenter: Phaser.Scale.CENTER_BOTH,
	// 	// `fullscreenTarget` must be defined for phones to not have
	// 	// a small margin during fullscreen.
	// 	fullscreenTarget: "app",
	// 	expandParent: false,
	// },
};

export class Game extends Phaser.Game {
	constructor(config) {
		super(config);
	}
}

// window.addEventListener("load", () => {
// 	// Expose `_game` to allow debugging, mute button and fullscreen button
// 	window._game = new Game(GameConfig);
// });

document.fonts.load('10pt "Doomed"').then(() => {
	// Expose `_game` to allow debugging, mute button and fullscreen button
	window._game = new Game(GameConfig);
});