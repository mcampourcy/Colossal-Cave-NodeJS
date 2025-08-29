/**
 * The current loc is saved in "previousLocation" in case the player wants to retreat.
 * The current previousLocation is saved in previousPreviousLocation, in case the player dies.
 * (if he/she does, previousLocation will be what killed him/her,
 * so we need previousPreviousLocation, which is the last safe place)
 */

export const settings = {
    currentLocation: "locStart",
    inventory: [],
    inventoryLimit: 7,
    noDescription: false,
    novice: true,
    previousLocation: "locNowhere",
    previousPreviousLocation: "locNowhere",
    repeat: false,
}
