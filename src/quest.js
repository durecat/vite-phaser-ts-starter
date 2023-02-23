import Amulet from "./items/amulet";
import dungeon from "./dungeon";
import tm from "./turnManager";

export function addAmulet(x = NULL, y = NULL) {
  if( x && y ) {
    tm.addEntity(new Amulet(x, y));
		console.log(`amulet added to`, x, y);
  }

  if (dungeon.dungeon.currentLevel == dungeon.dungeon.levels.length - 1) {
		let room = Phaser.Math.RND.weightedPick(dungeon.rooms);
		let pos = dungeon.randomWalkableTileInRoom(room.x, room.y, room.w, room.h);
		tm.addEntity(new Amulet(pos.x, pos.y));
		console.log(`amulet added to`, pos);
	}
}

const quest = [
  addAmulet
];

export default quest;