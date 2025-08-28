import { actions, directions, messages } from "./data/index.js"
// import { getErrorMessage } from "./directions.js"
// import { getLocationDescription, getCurrentLocation } from "./locations.js"
// import { getObjectByWord } from "./object.js"
import { drink, inventory, listen } from "./userActions/index.js"
// import { getLocationLight } from "./light.js"

function getAction(instruction) {
    return actions.find(({ verbs }) => verbs && verbs.includes(instruction))
}

/**
 * Manage user actions
 *
 * Manage actions !== manage travels
 * This function manage actions verbs, not directions indications
 * */
export function manageActions({ action, object, currentLocation }) {
    // const locationTooDark = !getLocationLight(currentLocation)

    if (action.noaction) return action.message

    switch (action.id) {
        case "attack":
        case "throw":
        // return attack(param, action.id)
        case "carry":
        // return locationTooDark
        //     ? messages.cantApply
        //     : carry(param, action.id, verb)
        case "discard":
        // return discard(param, action.id, verb)
        case "drink":
            return drink({ action, object, currentLocation })
        case "extinguish":
        // return extinguish(param)
        case "fill":
        // return locationTooDark
        //     ? messages.cantApply
        //     : fill({ param, actionId: action.id, verb })
        case "inventory":
            return inventory()
        case "light":
        // return light(action, param)
        case "listen":
            return listen(currentLocation)
        case "look":
            return `${messages.noMoreDetail}\n${currentLocation.description.long}`
        case "lock":
        case "unlock":
        // return lock(param, action.id)
        case "read":
        // return read(param)
        case "wave":
        // return wave(param, verb)
        default:
            return messages.cantApply
    }
}
