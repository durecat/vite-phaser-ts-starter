import level from "./level"

const dungeon = {
  sprites: {
    floor: 0,
    wall: 554
  },
  initialize: function(scene) {
		this.scene = scene;
		// Just convert the walls from 1 to 554.
		scene.level = level.map((r) => r.map((t) => (t === 1 ? this.sprites.wall : this.sprites.floor)));
		
    // Draw the tilemap
		const tileSize = 16;
		const config = {
			data: scene.level,
			tileWidth: tileSize,
			tileHeight: tileSize,
		};

		const map = scene.make.tilemap(config);
		const tileset = map.addTilesetImage("tiles", "tiles", tileSize, tileSize, 0, 1);
		this.map = map.createDynamicLayer(0, tileset, 0, 0);
	}
}

export default dungeon
