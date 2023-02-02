import GenericItem from "./genericItem.js";
import dungeon from "../dungeon.js";

export default class BoostPotion extends GenericItem {
	constructor(x, y) {
		super(x, y);

		this.tile = 1007;
		this.name = "Boost Potion";
		this.description = "A potion that boost your attack.";
		this.boostPotion = true;
		this.actionPoints = 1;
		this.turn = 3;

		dungeon.initializeEntity(this);
	}

	equip(itemNumber) {
		dungeon.log(`A boost portion increase your attack for ${this.turn} rounds.`);
		dungeon.player.removeItem(itemNumber);
		console.log('items => ', dungeon.player.items )
	}

	damage() {
		return 3;
	}

	turn() {
		if (this.active) {
			dungeon.log(`A boost portion increase your attack: ${this.turn} remaining.`);

			if (this.turn < 0) {
				dungeon.player.removeItemByProperty("boostPotion", true);
			}
			this.turn--;
		}
		this.actionPoints = 0;
	}

	refresh() {
		this.actionPoints = 1;
	}

	over() {
		return this.actionPoints == 0;
	}
}
