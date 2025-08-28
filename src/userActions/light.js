/*  Light.  Applicable only to lamp and urn. */
import { isObjectInInventory } from "../inventory.js"
import { getCurrentLocationDescription } from "../locations.js"
import {
    getObjectByWord,
    updateObjectState,
    getObjectFromCurrentLocation,
} from "../object.js"

export function light(action, param) {
    const lamp =
    isObjectInInventory("lamp") || getObjectFromCurrentLocation("lamp")
    const urn = isObjectInInventory("urn") || getObjectFromCurrentLocation("urn")
    let obj = param

    if (!param && (lamp || urn)) {
        const id = lamp ? "lamp" : "urn"
        const lightObj = getObjectByWord(id)
        if (lightObj.currentState === `${id}Dark`) obj = lightObj
    }

    if (obj && obj === "lamp" && lamp) {
        const lampState = updateObjectState(lamp.id, "lampBright")
        return `${lampState.change}\n${getCurrentLocationDescription()}`
    }

    if (obj && obj === "urn" && urn) {
        const urnState = updateObjectState(
            urn.id,
            obj.currentState === "urnEmpty" ? "urnBright" : "urnEmpty",
        )
        return urnState.change
    }

    return action.message
}
