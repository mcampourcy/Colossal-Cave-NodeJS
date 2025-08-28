import { actions, directions, objects, settings } from "../data/index.js"

const MAX_INPUT_LENGTH = 5
const MAX_WORDS = 2

export function getLocationDescription(currentLocation) {
    if (settings.noDescription) return null

    const baseDescription = getBaseLocationDescription(currentLocation)
    const objectDescriptions = buildObjectDescriptions(currentLocation)

    return baseDescription + objectDescriptions
}

function getBaseLocationDescription(currentLocation) {
    const useShortDescription = settings.repeat && currentLocation.description.short
    return useShortDescription
        ? currentLocation.description.short
        : currentLocation.description.long
}

function buildObjectDescriptions(currentLocation) {
    const objectsAtLocation = objects.filter(object =>
        object.locations.includes(currentLocation.id),
    )

    return objectsAtLocation
        .map(object => {
            const objectState = object.states.find(({ state }) =>
                state.id === object.currentState,
            )
            return `\n${objectState.description}`
        })
        .join("")
}

export function parseUserInput(input) {
    return input
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .slice(0, MAX_WORDS)
        .map(word => word.slice(0, MAX_INPUT_LENGTH))
        .filter(word => word.length > 0)
}

export function findMatches(parsedWords) {
    if (parsedWords.length === 0) return {}

    return parsedWords.length === 1
        ? findSingleWordMatches(parsedWords[0])
        : findTwoWordsMatches(parsedWords[0], parsedWords[1])
}

function findSingleWordMatches(word) {
    return {
        direction: findInWordList(directions, word),
        action: findInWordList(actions, word),
        object: findInWordList(objects, word, 'words'),
    }
}

function findTwoWordsMatches(firstWord, secondWord) {
    const firstDirection = findInWordList(directions, firstWord)
    if (firstDirection) return { direction: firstDirection }

    const firstAction = findInWordList(actions, firstWord)
    if (firstAction) return handleActionWithSecondWord(firstAction, secondWord)

    const firstObject = findInWordList(objects, firstWord, 'words')
    if (firstObject) return handleObjectWithSecondWord(firstObject, secondWord, firstWord)

    return {}
}

function findInWordList(collection, word, wordProperty = 'wordList') {
    return collection.find(item => {
        const wordList = item[wordProperty]
        return wordList && wordList.includes(word)
    })
}

function handleActionWithSecondWord(action, secondWord) {
    if (action.id === "go") {
        const direction = findInWordList(directions, secondWord)
        return direction ? { direction } : { action }
    }

    const object = findInWordList(objects, secondWord, 'words')
    return { action, object }
}

function handleObjectWithSecondWord(firstObject, secondWord, firstWord) {
    const action = findInWordList(actions, secondWord)

    return action
        ? { action, object: firstObject, targetWord: firstWord }
        : { object: firstObject }
}
