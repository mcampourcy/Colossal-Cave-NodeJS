import { messages, objects, settings } from "../data/index.js"

function getObjectByWord(word) {
    return objects.find(({ words }) => words.includes(word))
}

export function inventory() {
    const { inventory: currentInventory } = settings

    if (!currentInventory.length) return messages.noCarry

    let description = messages.nowHolding

    if (currentInventory.length) {
        currentInventory.forEach((objectId) => {
            const { inventoryName } = getObjectByWord(objectId)
            description += `\n${inventoryName}`
        })
    }

    return description
}

// if (currentInventory.length) {
//     const hasBird = currentInventory.find((id) => id === "bird")
//     const hasCage = currentInventory.find((id) => id === "cage")
//     const invent =
//         hasBird && hasCage
//             ? currentInventory.filter((id) => id !== "cage")
//             : currentInventory
//
//     invent.forEach((objId) => {
//         const { id, currentState, inventoryName } = getObjectByWord(objId)
//         description += `\n${inventoryName}`
//
//         if (id === "bottle" && currentState !== "emptyBottle") {
//             const type = currentState.substring(0, currentState.indexOf("Bottle"))
//             const liquid = getObjectById(type).inventoryName
//
//             description += `\n${liquid}`
//         }
//     })
// }
