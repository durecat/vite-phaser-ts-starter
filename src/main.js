import "phaser";
import "../assets/style.css";
import dungeon from "./dungeon";
import tm from "./turnManager";
import PlayerCharacter from "./player";
import BasicMonster from "./monster";

const scene = {
	preload() {
		// load tiles ...
		this.load.spritesheet("tiles", "assets/colored.png", {
			frameWidth: 16,
			frameHeight: 16,
			spacing: 1,
		});
	},
	create() {
		dungeon.initialize(this);
		dungeon.player = new PlayerCharacter(15, 15);
		tm.addEntity(dungeon.player);
		tm.addEntity(new BasicMonster(20, 20));
		tm.addEntity(new BasicMonster(20, 10));
		tm.addEntity(new BasicMonster(76, 10));
		tm.addEntity(new BasicMonster(29, 24));
		tm.addEntity(new BasicMonster(29, 20));
	},
	update() {
		if (tm.over()) {
			tm.refresh();
		}
		tm.turn();
	},
};

const GameConfig = {
	title: "ExampleGame",
	// url: "https://github.com/digitsensitive/phaser3-typescript",
	version: "1.0",
	width: 80 * 16,
	height: 50 * 16,
	type: Phaser.AUTO,
	parent: "app",
	scene: scene,
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
	backgroundColor: "#000",
	render: { pixelArt: false, antialias: true },
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		// `fullscreenTarget` must be defined for phones to not have
		// a small margin during fullscreen.
		fullscreenTarget: "app",
		expandParent: false,
	},
};

export class Game extends Phaser.Game {
	constructor(config) {
		super(config);
	}
}

window.addEventListener("load", () => {
	// Expose `_game` to allow debugging, mute button and fullscreen button
	window._game = new Game(GameConfig);
});
