/*  Light.  Applicable only to lamp and urn. */
import { isObjectInInventory } from "../inventory.js"
import { getCurrentLocation } from "../locations.js"
import {
    getObjectByWord,
    updateObjectState,
    getObjectFromCurrentLocation,
    getObjectState,
} from "../object.js"
import { messages } from "../data/index.js"

export function extinguish(action, object) {
    const lamp =
    isObjectInInventory("lamp") || getObjectFromCurrentLocation("lamp")
    const urn = isObjectInInventory("urn") || getObjectFromCurrentLocation("urn")
    const { conditions } = getCurrentLocation()
    let obj = object

    if (!object && (lamp || urn)) {
        const id = lamp ? "lamp" : "urn"
        const lightObj = getObjectByWord(id)
        if (lightObj.currentState === `${id}Bright`) obj = lightObj
    }

    if (obj.id === "urn") {
        if (obj.currentState !== "urnEmpty")
            return updateObjectState(obj.id, "urnDark").change
        return getObjectState(obj.id).change
    }

    if (obj.id === "lamp") {
        let description = updateObjectState(obj.id, "lampDark").change
        if (conditions && !conditions.lit) description += `\n${messages.pitchDark}`
        return description
    }

    return messages[action.id].message
}
