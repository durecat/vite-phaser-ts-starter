import GenericItem from "./genericItem.js";
import dungeon from "../dungeon.js";

export default class CursedGem extends GenericItem {
  constructor(x, y) {
    super(x,y)

    this.tile = 720
    this.name = "Cursed Gem"
    this.description = "A cursed gem that is now stuck to your hand. you can only remove it by finding a potion."
    this.actionPoints = 1
    this.cursed = true

    dungeon.initializeEntity(this)
    this.sprite.tint = Phaser.Display.Color.GetColor(223, 188, 25);
  }
  turn() {
    if (dungeon.player.items.includes(this)) {
      this.active = true
      dungeon.log(`Cursed gem gives 1 damage to player. Find potion to cure.`)
      dungeon.player.healthPoints -= 1
    }
    this.actionPoints = 0
  }
  refresh() {
    this.actionPoints = 1
  }
  over() {
    return this.actionPoints == 0
  }
}