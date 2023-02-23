import dungeon from "../dungeon";
import BasicHero from "./basicHero";
import Bow from "../items/bow";

export default class Elf extends BasicHero {
  constructor(x, y) {
    super(x, y)

    this.name = "Elf"
    // this.movementPoints = 4
    // this.actionPoints = 3
    // this.healthPoints = 20
    this.actionPoints = 1
    this.movementPoints = 1
    this.healthPoints = 1
    this.tile = 56

    this.items.push(new Bow())
    this.toggleItem(0)

    dungeon.initializeEntity(this)
  }

  refresh() {
    this.movementPoints = 4
    this.actionPoints = 3

    // Clerics heal a bit every turn
    if(this.healthPoints < 40) {
      this.healthPoints += 1
      dungeon.log("Cleric heals 1 hp")
    }
  }
}