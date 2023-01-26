import GenericItem from "./genericItem.js";
import dungeon from "../dungeon.js";

export default class HealthPotion extends GenericItem {
	constructor(x, y) {
		super(x, y);

		this.tile = 730;
		this.name = "Health Potion";
		this.health = 3;
		this.description = "A potion that increase health."

		dungeon.initializeEntity(this);
	}
	equip(itemNumber) {
		dungeon.log(`A health portion increase your health to ${this.health}.`)
		dungeon.player.healthPoints += this.health;
		dungeon.player.removeItem(itemNumber)
	}
}
