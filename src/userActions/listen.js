import { messages, sounds } from "../data/index.js"
import { getObjectsSound } from "../objects.js"

/**
 * Listens to the current location and generates a list of sounds.
 *
 * The function processes the `currentLocation` object to determine the sound-related
 * attributes. If the location is not categorized as loud and has associated object sounds,
 * those sounds are added to the list. Additionally, if the location has a specific sound,
 * it is included in the resulting sound list. The function returns the compiled list of
 * sounds or a default message if no sounds are present.
 *
 * @param {Object} currentLocation - The current location object.
 * @param {boolean} currentLocation.loud - Indicates if the location is loud.
 * @param {string} currentLocation.sound - Represents a specific sound of the location.
 * @param {string} currentLocation.id - Unique identifier for the current location.
 * @returns {string} A formatted list of sounds for the location or a default silent message.
 */
export const listen = (currentLocation) => {
    const { loud, sound } = currentLocation
    const objectsSounds = getObjectsSound(currentLocation.id)

    const soundList = []

    if (sound) {
        if (!loud && objectsSounds) soundList.push(objectsSounds)
        soundList.push(sounds[sound])

        return soundList.join("\n\n")
    }

    return messages.allSilent
}
