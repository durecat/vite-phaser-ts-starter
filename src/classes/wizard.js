import dungeon from "../dungeon";
import BasicHero from "./basicHero";
import ScrollOfFireball from "../items/scrolloffireball";
import ScrollOfLightning from "../items/scrolloflightning";
import HealthPotion from "../items/healthPotion";

export default class Wizard extends BasicHero {
  constructor(x, y) {
    super(x, y)

    this.name = "Wizard"
    this.movementPoints = 3
    this.actionPoints = 1
    this.healthPoints = 20
    this.tile = 88

    this.items.push(new ScrollOfFireball())
    this.items.push(new ScrollOfLightning())
    this.items.push(new HealthPotion())
    this.items.push(new HealthPotion())
    this.toggleItem(1)

    dungeon.initializeEntity(this)
  }

  refresh() {
    this.movementPoints = 3
    this.actionPoints = 1
  }
}