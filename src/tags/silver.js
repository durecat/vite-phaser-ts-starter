import dungeon from "../dungeon"

const silver = {
  name: "Silver",
  initialize: function() {
    this.name = `Silver ${this.name}`
    this.tint = 0xccbc00;

    if (this.sprite) {
      this.sprite.tint = this.tint
      this.sprite.tintFill = true
    }

    if (this.type == "item") {
			this.equipHPBonus = 2;
		}
  },

  equip(acc, itemNumber, entity) {
    if(this.equipHPBonus > 0) {
      dungeon.log(`+${this.equipHPBonus} health bonus for equipping silver item.`);
      entity.healthPoints += this.equipHPBonus
      this.equipHPBonus = 0
    }
  },

  // attack(acc = 0) {
  //   if(acc > 0) {
  //     acc += 1
  //   }
  //   return acc
  // },

  // protection(acc = 0) {
  //   if(acc > 0) {
  //     acc += 1
  //   }
  //   return acc
  // }
}

export default silver;