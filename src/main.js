import './style.css'
import 'phaser';

const GameConfig = {
	title: "ExampleGame",
	// url: "https://github.com/digitsensitive/phaser3-typescript",
	version: "1.0",
	width: 800,
	height: 600,
	type: Phaser.AUTO,
	parent: "app",
	scene: {
		preload() {
			this.load.bitmapFont("arcade", "assets/font/arcade.png", "assets/font/arcade.xml")
		},
		create() {
			this.helloText = this.add.bitmapText(400, 300, "arcade", "Hello Phaser").setOrigin(0.5)
			this.cursors = this.input.keyboard.createCursorKeys()
		},
		update() {
			if(this.cursors.left.isDown) {
				this.helloText.x -= 10;
			}
			if (this.cursors.right.isDown) {
				this.helloText.x += 10;
			}
			if (this.cursors.up.isDown) {
				this.helloText.y -= 10;
			}
			if (this.cursors.down.isDown) {
				this.helloText.y += 10;
			}
		}
	},
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

window.addEventListener('load', () => {
  // Expose `_game` to allow debugging, mute button and fullscreen button
  window._game = new Game(GameConfig);
});
