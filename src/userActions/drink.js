import { messages, objects, settings } from "../data/index.js"
import { println } from "../console.js"
import { addObjectToInventory, isObjectInInventory } from "../inventory.js"
import { updateObjectState } from "../object.js"

export function drink({ action, object, currentLocation }) {
    const { fluid, oily } = currentLocation
    const isParamWater = object?.id === "water"

    // Validations d'entrée
    if ((fluid && oily) || (object && !isParamWater)) {
        return messages.ridiculousAttempt
    }

    const bottle = objects.find(({ locations, words }) =>
        locations.includes(currentLocation.id) && words.includes("bottle")
    )
    const isBottleInInventory = isObjectInInventory("bottle")

    if (!fluid && oily && !bottle && !isBottleInInventory) {
        return messages.noLiquid
    }

    // Cas principal : boire depuis une bouteille présente
    if (!object && bottle) {
        const isBottleFullOfWater = bottle.currentState === "waterBottle"

        if (!isBottleFullOfWater) {
            return messages.noLiquid
        }

        if (!isBottleInInventory) {
            addObjectToInventory("bottle")
        }

        const newState = updateObjectState("bottle", "emptyBottle")
        println(newState.change)
        return null
    }

    return action.message
}
// if (obj == BLOOD) {
//     DESTROY(BLOOD);
//     state_change(DRAGON, DRAGON_BLOODLESS);
//     game.blooded = true;
//     return GO_CLEAROBJ;
// }
//
