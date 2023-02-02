import GenericItem from "./genericItem.js";
import dungeon from "../dungeon.js";

export default class HealthPotion extends GenericItem {
	constructor(x, y) {
		super(x, y);

		this.tile = 730;
		this.name = "Health Potion";
		this.health = 3;
		this.description = ""

		dungeon.initializeEntity(this);
	}
	equip(itemNumber) {
		dungeon.log(`A health portion recharges your health by ${this.health}.`)
		dungeon.player.healthPoints += this.health;
		dungeon.player.removeItem(itemNumber)
	}
}
