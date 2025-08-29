import { getTravel } from "./locations.js"
import { manageLocationsHistory } from "./settings.js"
import { messages, settings } from "./data/index.js"
import { displayText } from "./console.js"
import { isObjectInInventory } from "./inventory.js"
import { getObjectById } from "./object.js"

export function manageTravel({ answer, currentLocation }) {
    const travel = getTravel({ answer, currentLocation })
    if (travel.id === "goTo") {
        if (travel.condition) {
            manageTravelConditions(travel)
        } else {
            manageLocationsHistory(travel.description)
        }
    } else if (travel.id === "speak") {
        settings.repeat = true
        displayText(messages[travel.description])
    }
}

function manageTravelConditions(travels) {
    const { condition } = travels
    if (condition.type === "object") {
        const { currentState } = getObjectById(condition.object)
        if (currentState === condition.state) {
            manageLocationsHistory(travels.description)
        } else {
            travelConditionFailed(travels.conditionFailed)
        }
    } else if (condition.type === "carry") {
        if (!isObjectInInventory(condition.object)) {
            travelConditionFailed(travels.conditionFailed)
        }
    }
}

function travelConditionFailed(conditionFailed) {
    if (conditionFailed.id === "goTo") {
        manageLocationsHistory(conditionFailed.description)
    }
    if (conditionFailed.id === "speak") {
        settings.repeat = true
        displayText(messages[conditionFailed.description])
    }
}
