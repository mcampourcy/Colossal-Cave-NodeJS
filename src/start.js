import { messages, settings } from "./data/index.js"
import { ask, println } from "./console.js"
import { getCurrentLocation } from "./locations.js"
import { manageActions } from "./actions.js"
import {
    getLocationDescription,
    parseUserInput,
    findMatches,
} from "./NEW/gameEngine.js"
import { handleDirectionMovement } from "./NEW/movement.js"

const YES_ANSWERS = ["y", "yes"]
const NO_ANSWERS = ["n", "no"]

export async function getInstructions() {
    const shouldShowInstructions = await askForInstructions()

    if (shouldShowInstructions) {
        println(messages.caveNearby)
    }

    await startGameLoop()
}

async function askForInstructions() {
    while (true) {
        const input = await ask(messages.welcomeYou)
        const parsedInput = parseUserInput(input)
        const firstWord = parsedInput[0]

        if (YES_ANSWERS.includes(firstWord)) {
            return true
        }

        if (NO_ANSWERS.includes(firstWord)) {
            settings.novice = false
            return false
        }

        println(messages.pleaseAnswer)
    }
}

function handlePlayerAction({action, object, currentLocation}) {
    const actionResult = manageActions({ action, object, currentLocation })
    println(actionResult)
    settings.noDescription = true
}

async function processGameTurn() {
    const currentLocation = getCurrentLocation()
    const locationDescription = getLocationDescription(currentLocation)

    resetTurnSettings()

    const input = await ask(locationDescription, !locationDescription)
    const parsedInput = parseUserInput(input)

    if (parsedInput.length === 0) {
        println(messages.pleaseAnswer)
        return
    }

    const matches = findMatches(parsedInput)
    const { direction, action, object } = matches

    if (direction) {
        handleDirectionMovement(direction, currentLocation)
    } else if (action) {
        handleSpecialActions(action) || handlePlayerAction({ action, object, currentLocation })
    } else {
        println(messages.cantApply)
    }
}

function resetTurnSettings() {
    settings.noDescription = false
    settings.repeat = false
}

function handleSpecialActions(action) {
    if (action.id === "go") {
        println(action.message)
        settings.noDescription = true
        return true
    }
    return false
}

async function startGameLoop() {
    while (true) {
        await processGameTurn()
    }
}

export function pct(percentage = 0) {
    return Math.random() < percentage / 100
}
