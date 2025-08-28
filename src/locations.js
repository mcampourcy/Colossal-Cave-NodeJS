import { directions, locations, messages, settings } from "./data/index.js"
import { getObjectsDescription } from "./objects.js"
import { manageLocationsHistory } from "./settings.js"
import { pct } from "./start.js"
import { getLocationLight } from "./light.js"

export function getCurrentLocation() {
    console.log("CURRENT")
    return locations.find(({ id }) => id === settings.currentLocation)
}

function isSpecial(location) {
    return /^locFoof/.test(location)
}

export function getCurrentLocationDescription({
    currentLocation,
    forceLong = false,
}) {
    const { previousPreviousLocation, repeat } = settings
    const isLocationLight = getLocationLight(currentLocation)
    let description = ""

    if (isSpecial(currentLocation.id)) {
        description += `${currentLocation.description.long}\n`
        manageLocationsHistory(currentLocation.actions[0].description)
    }

    const {
        description: { long, short },
        id: currentId,
    } = currentLocation

    // The player came here two moves ago
    // e.g.: locStart => locBuilding => locStart
    const turnAround = currentId === previousPreviousLocation

    if (isLocationLight) {
        const objectsDescription = getObjectsDescription(
            currentLocation,
            isLocationLight,
        )

        const hasShortDescription = short && !forceLong
        description += hasShortDescription && (repeat || turnAround) ? short : long

        if (currentId === "y2" && pct(25))
            description += `\n ${messages.saysPlugh}`

        return objectsDescription.length
            ? `${description}\n${objectsDescription}`
            : description
    }

    return format(
        description.length
            ? `${description}\n${messages.pitchDark}`
            : messages.pitchDark,
    )
}

export function getFluidConditions() {
    const { conditions } = getCurrentLocation()
    if (conditions.fluid) return conditions.oily ? "oil" : "water"

    return null
}

export function getRoutesFromCurrentLocation(currentLocation) {
    return currentLocation.actions
        .map((action) => {
            if (action.id === "goTo") return action.verbs
        })
        .flat()
}

export function getTravel({ answer, currentLocation }) {
    const { travels } = getCurrentLocation()
    const direction = directions.find(({ verbs }) => verbs.includes(answer))
    return travels.find(({ verbs }) => verbs.includes(direction.id)).action
}
