import { messages, settings } from "../data/index.js"
import { getErrorMessage } from "../directions.js"
import { println } from "../console.js"

export function getAuthorizedDirections(currentLocation) {
    return currentLocation.actions
        ?.filter(action => action.type === "goTo")
        ?.flatMap(action => action.verbs) || []
}

export function handleDirectionMovement(directionMatch, currentLocation) {
    const directionId = directionMatch.id
    const authorizedDirections = getAuthorizedDirections(currentLocation)

    if (!authorizedDirections.includes(directionId)) {
        return handleUnauthorizedDirection(directionId, currentLocation)
    }

    const locationAction = findLocationAction(currentLocation, directionId)
    if (!locationAction) {
        println(messages.cantApply)
        settings.noDescription = true
        return
    }

    executeLocationAction(locationAction, directionId, currentLocation)
}

function handleUnauthorizedDirection(directionId, currentLocation) {
    if (directionId === "back") {
        handleBackMovement(currentLocation)
        return
    }

    const errorMessage = getErrorMessage(directionId)
    println(errorMessage)
    settings.noDescription = true
}

function handleBackMovement(currentLocation) {
    if (currentLocation.conditions?.noback) {
        println(messages.twistTurn)
        settings.repeat = true
        return
    }

    if (settings.previousLocation) {
        settings.currentLocation = settings.previousLocation
        settings.previousLocation = currentLocation.id
    }
}

function findLocationAction(currentLocation, directionId) {
    return currentLocation.actions?.find(action =>
        action.verbs?.includes(directionId)
    )
}

function executeLocationAction(action, directionId, currentLocation) {
    if (directionId === "back" && action.ref === currentLocation.id) {
        println(messages.forgotPath)
        settings.noDescription = true
        return
    }

    if (action.type === "speak") {
        println(messages[action.ref])
        settings.noDescription = true
        return
    }

    // Mouvement normal
    settings.previousLocation = currentLocation.id
    settings.currentLocation = action.ref
}
