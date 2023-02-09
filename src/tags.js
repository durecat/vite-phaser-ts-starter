import aggro from "./tags/aggro";
import fast from "./tags/fast";
import royal from "./tags/royal";
import burning from "./tags/burning";
import cursed from "./tags/cursed";
import poison from "./tags/poison";
import goingSomewhere from "./tags/goingsomewhere";
import hunter from "./tags/hunter";
import patrolling from "./tags/patrolling";
import iron from "./tags/iron";
import silver from "./tags/silver";
import golden from "./tags/golden";

const tags = {
  aggro,
  fast,
  royal,
  burning,
  cursed,
  poison,
  goingSomewhere,
  hunter,
  patrolling,
  iron,
  silver,
  golden,
}

export const materials = [
  "golden",
  "silver",
  "iron",
]

export const enemyModifiers = [
  "aggro",
  "fast",
  "royal"
]

export const behaviors = [
  "goingSomewhere",
  "hunter",
  "patrolling"
]

export const effects = [
  "burning",
  "cursed",
  "poison"
]

export function getRandomTagsForItem(modifierCount = 1, effectCount = 0) {
  let res = new Set()

  while(modifierCount > 0) {
    res.add(Phaser.Utils.Array.GetRandom(materials))
    modifierCount--
  }

  while(effectCount > 0) {
    res.add(Phaser.Utils.Array.GetRandom(effects))
    effectCount--
  }

  return [...res]
}

export function getRandomTagsForEnemy(modifierCount = 1) {
  let res = new Set()

  while(modifierCount > 0) {
    res.add(Phaser.Utils.Array.GetRandom(enemyModifiers))
    modifierCount--
  }

  res.add(Phaser.Utils.Array.GetRandom(behaviors))

  return [...res]
}

export default tags