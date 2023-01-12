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
			this.load.spritesheet('tiles', 'assets/colored.png', {
				frameWidth: 16,
				frameHeight: 16,
				spacing: 1
			})
		},
		create() {
			this.cursors = this.input.keyboard.createCursorKeys()
			let level = [
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			];
			const wall = 554
			const floor = 0
			level = level.map(r => r.map(t => t === 1 ? wall : floor))

			const tileSize = 16
			const config = {
				data: level,
				tileWidth: tileSize,
				tileHeight: tileSize
			}

			const map = this.make.tilemap(config)
			const tileSet = map.addTilesetImage('tiles', 'tiles', tileSize, tileSize, 0, 1)

			const ground = map.createStaticLayer(0, tileSet, 0, 0)
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
