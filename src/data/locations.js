//  https://gitlab.com/esr/open-adventure/-/blob/master/adventure.yaml
// locations: They have attributes as follows...
//      long:         Long description, always shown on first encounter.
//      short:        Short description. If none, use long description.
//      conditions:   A dictionary of attributes
//        - lit       Light
//        - oily      If fluid flag is on: true for oil, false for water
//        - fluid     Liquid asset
//        - noarrr    Pirate doesn't go here unless following player
//        - noback    Cannot use "back" to move away
//        - hcave     Trying to get into cave
//        - hbird     Trying to catch bird
//        - hsnake    Trying to deal with snake
//        - hmaze     Lost in maze
//        - hdark     Pondering dark room
//        - hwitt     At Witt's End
//        - hcliff    Cliff with urn
//        - hwoods    Lost in forest
//        - hogre     Trying to deal with ogre
//        - hjade     Found all treasures except jade
//      hints:        A list of yaml references to hints that may be available at
//                    this location. (This is why locations has to follow hints.)
//      sound:        Label for a location sound.
//      loud:         If true, object sounds are drowned out at this location.
//      travels:      A list of movement rules.  They're applied in the order
//                    they appear.  For a rule to fire,
//                      (1) the movement command must be a synonym for one of its verbs, and
//                      (2) the condition, if present, must evaluate to true.
//                    In that case the action fires.
//                    The action may be
//                      a goto (move to a named location)
//                      a speak (utter a named message), or
//                      a special (branch to special case in movement code).
//                    The conditional may be one of the following:
//                      [pct, N]       Roll a die, n% chance of success
//                      [carry, obj]   Must be carrying idd object
//                      [with, obj]    Must be carrying or in room with
//                      [not, obj N]   Property of idd obj must not be N.
//                                     N may be numeric or a state label.
//                      [nodwarves]    Dwarves must skip this rule.

export const locations = [
    {
        id: "locNowhere",
        conditions: {},
        description: {
            long: null,
            short: null,
        },
        actions: [],
    },
    {
        id: "locAlcove",
        conditions: { deep: true },
        description: {
            long: "You are in an alcove. A small nw path seems to widen after a short distance. An extremely tight tunnel leads east. It looks like a very tight squeeze. An eerie light can be seen at the other end.",
            short: "You're in alcove.",
        },
        hints: ["dark"],
        actions: [
            { type: "goTo", ref: "locMisty", verbs: ["nw", "caver"] },
            { type: "special", ref: 1, verbs: ["east", "passa"] },
            { type: "goTo", ref: "locPlover", verbs: ["east"] },
        ],
    },
    {
        id: "locAlike1",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisty little passages, all alike.",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locMistwest", verbs: ["upwar"] },
            { type: "goTo", ref: "locAlike1", verbs: ["north"] },
            { type: "goTo", ref: "locAlike2", verbs: ["east"] },
            { type: "goTo", ref: "locAlike4", verbs: ["south"] },
            { type: "goTo", ref: "locAlike11", verbs: ["west"] },
        ],
    },
    {
        id: "locAlike2",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisty little passages, all alike.",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike1", verbs: ["west"] },
            { type: "goTo", ref: "locAlike3", verbs: ["south"] },
            { type: "goTo", ref: "locAlike4", verbs: ["east"] },
        ],
    },
    {
        id: "locAlike3",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisty little passages, all alike.",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike2", verbs: ["east"] },
            { type: "goTo", ref: "locDeadend3", verbs: ["down"] },
            { type: "goTo", ref: "locAlike6", verbs: ["south"] },
            { type: "goTo", ref: "locDeadend9", verbs: ["north"] },
        ],
    },
    {
        id: "locAlike4",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisty little passages, all alike.",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike1", verbs: ["west"] },
            { type: "goTo", ref: "locAlike2", verbs: ["north"] },
            { type: "goTo", ref: "locDeadend1", verbs: ["east"] },
            { type: "goTo", ref: "locDeadend2", verbs: ["south"] },
            { type: "goTo", ref: "locAlike14", verbs: ["upwar", "down"] },
        ],
    },
    {
        id: "locAlike5",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisty little passages, all alike.",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike6", verbs: ["east"] },
            { type: "goTo", ref: "locAlike7", verbs: ["west"] },
        ],
    },
    {
        id: "locAlike6",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisty little passages, all alike.",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike3", verbs: ["east"] },
            { type: "goTo", ref: "locAlike5", verbs: ["west"] },
            { type: "goTo", ref: "locAlike7", verbs: ["down"] },
            { type: "goTo", ref: "locAlike8", verbs: ["south"] },
        ],
    },
    {
        id: "locAlike7",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisty little passages, all alike.",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike5", verbs: ["west"] },
            { type: "goTo", ref: "locAlike6", verbs: ["upwar"] },
            { type: "goTo", ref: "locAlike8", verbs: ["east"] },
            { type: "goTo", ref: "locAlike9", verbs: ["south"] },
        ],
    },
    {
        id: "locAlike8",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisty little passages, all alike.",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike6", verbs: ["west"] },
            { type: "goTo", ref: "locAlike7", verbs: ["east"] },
            { type: "goTo", ref: "locAlike8", verbs: ["south"] },
            { type: "goTo", ref: "locAlike9", verbs: ["upwar"] },
            { type: "goTo", ref: "locAlike10", verbs: ["north"] },
            { type: "goTo", ref: "locDeadend11", verbs: ["down"] },
        ],
    },
    {
        id: "locAlike9",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisty little passages, all alike.",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike7", verbs: ["west"] },
            { type: "goTo", ref: "locAlike8", verbs: ["north"] },
            { type: "goTo", ref: "locDeadend4", verbs: ["south"] },
        ],
    },
    {
        id: "locAlike10",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisty little passages, all alike.",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike8", verbs: ["west"] },
            { type: "goTo", ref: "locAlike10", verbs: ["north"] },
            { type: "goTo", ref: "locDeadend5", verbs: ["down"] },
            { type: "goTo", ref: "locPitbrink", verbs: ["east"] },
        ],
    },
    {
        id: "locAlike11",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisty little passages, all alike.",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike1", verbs: ["north"] },
            { type: "goTo", ref: "locAlike11", verbs: ["west"] },
            { type: "goTo", ref: "locAlike11", verbs: ["south"] },
            { type: "goTo", ref: "locDeadend8", verbs: ["east"] },
        ],
    },
    {
        id: "locAlike12",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisty little passages, all alike.",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike1", verbs: ["north"] },
            { type: "goTo", ref: "locAlike11", verbs: ["west"] },
            { type: "goTo", ref: "locAlike11", verbs: ["south"] },
            { type: "goTo", ref: "locDeadend8", verbs: ["east"] },
        ],
    },
    {
        id: "locAlike13",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisty little passages, all alike.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locPitbrink", verbs: ["north"] },
            { type: "goTo", ref: "locAlike12", verbs: ["west"] },
            { type: "goTo", ref: "locDeadend12", verbs: ["nw"] },
        ],
    },
    {
        id: "locAlike14",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisty little passages, all alike.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locPitbrink", verbs: ["north"] },
            { type: "goTo", ref: "locAlike12", verbs: ["west"] },
            { type: "goTo", ref: "locDeadend12", verbs: ["nw"] },
        ],
    },
    {
        id: "locAnteroom",
        conditions: { deep: true },
        description: {
            long: 'You are in an anteroom leading to a large passage to the east. Small passages go west and up. The remnants of recent digging are evident. A sign in midair here says "Cave under construction beyond this point. Proceed at own risk. [Witt Construction Company]"',
            short: "You're in anteroom.",
        },
        actions: [
            { type: "goTo", ref: "locComplex", verbs: ["upwar"] },
            { type: "goTo", ref: "locBedquilt", verbs: ["west"] },
            { type: "goTo", ref: "locWittsend", verbs: ["east"] },
        ],
    },
    {
        id: "locArched",
        conditions: { deep: true },
        description: {
            long: "You are in an arched hall. A coral passage once continued up and east from here, but is now blocked by debris. The air smells of sea water.",
            short: "You're in arched hall.",
        },
        actions: [
            {
                type: "goTo",
                ref: "locShellroom",
                verbs: ["down", "shell", "out"],
            },
        ],
    },
    {
        id: "locAwkward",
        conditions: {},
        description: {
            long: "You are in an awkward sloping east/west canyon.",
            short: null,
        },
        actions: [
            {
                verbs: ["depre"],
                type: "goTo",
                ref: "locGrate",
                condition: {
                    type: "object",
                    object: "grate",
                    state: "grateOpen",
                },
                conditionFailed: { type: "speak", ref: "grateNoway" },
            },
            { type: "goTo", ref: "locBelowgrate", verbs: ["entra"] },
            {
                type: "goTo",
                ref: "locDebris",
                verbs: ["down", "east", "debri"],
            },
            { type: "goTo", ref: "locBird", verbs: ["insid", "upwar", "west"] },
            { type: "goTo", ref: "locPittop", verbs: ["pit"] },
        ],
    },
    {
        id: "locBaddirection",
        conditions: { deep: true },
        description: {
            long: "There is no way to go that direction.",
            short: null,
        },
        actions: [{ type: "goTo", ref: "locDeadend13", verbs: ["pit"] }],
    },
    {
        id: "locBarrenfront",
        conditions: { noarr: true, deep: true },
        description: {
            long: 'You are standing at the entrance to a large, barren room. A notice above the entrance reads: "Caution! Bear in room!"',
            short: "You're in front of Barren Room.",
        },
        actions: [
            { type: "goTo", ref: "locLimestone", verbs: ["west", "upwar"] },
            { type: "goTo", ref: "locFork", verbs: ["fork"] },
            {
                type: "goTo",
                ref: "locBarrenroom",
                verbs: ["east", "insid", "barre", "enter"],
            },
            { type: "goTo", ref: "locBreathtaking", verbs: ["view"] },
        ],
    },
    {
        id: "locBarrenroom",
        conditions: { noarr: true, deep: true },
        description: {
            long: "You are inside a barren room. The center of the room is completely empty except for some dust. Marks in the dust lead away toward the far end of the room. The only exit is the way you came in.",
            short: "You're in Barren Room.",
        },
        actions: [
            { type: "goTo", ref: "locBarrenfront", verbs: ["west", "out"] },
            { type: "goTo", ref: "locFork", verbs: ["fork"] },
            { type: "goTo", ref: "locBreathtaking", verbs: ["view"] },
        ],
    },
    {
        id: "locBedquilt",
        conditions: { deep: true },
        description: {
            long: "You are in Bedquilt, a long east/west passage with holes everywhere. To explore at random select north, south, up, or down.",
            short: "You're in Bedquilt.",
        },
        actions: [
            { type: "goTo", ref: "locComplex", verbs: ["east"] },
            { type: "goTo", ref: "locSwisscheese", verbs: ["west"] },
            {
                type: "speak",
                ref: "futileCrawl",
                // condition: [pct, 65],
                verbs: ["south"],
            },
            { type: "goTo", ref: "locSlab", verbs: ["slab"] },
            // { verbs: ['upwar], cond: [pct, 60],
            // action: { type: 'speak', description: ''futileCrawl'' } },
            // { verbs: ['upwar], cond: [pct, 70], action: { type: 'goTo', description: 'locSecret2' } },
            { type: "goTo", ref: "locDusty", verbs: ["upwar"] },
            // { verbs: ['north], cond: [pct, 50],
            // action: { type: 'speak', description: ''futileCrawl'' } },
            // { verbs: ['north], cond: [pct, 75], action: { type: 'goTo', description: 'locLowroom' } },
            { type: "goTo", ref: "locThreejunction", verbs: ["north"] },
            {
                type: "speak",
                ref: "futileCrawl",
                // condition: [pct, 65],
                conditionFailed: { type: "goTo", ref: "locAnteroom" },
                verbs: ["down"],
            },
        ],
    },
    {
        id: "locBelowgrate",
        conditions: { lit: true },
        description: {
            long: "You are in a small chamber beneath a 3x3 steel grate to the surface. A low crawl over cobbles leads inward to the west.",
            short: "You're below the grate.",
        },
        actions: [
            {
                type: "goTo",
                ref: "locGrate",
                condition: {
                    type: "object",
                    object: "grate",
                    state: "grateOpen",
                },
                conditionFailed: { type: "speak", ref: "grateNoway" },
                verbs: ["out"],
            },
            {
                type: "goTo",
                ref: "locCobble",
                verbs: ["crawl", "cobbl", "insid", "west"],
            },
            { type: "goTo", ref: "locPittop", verbs: ["pit"] },
            { type: "goTo", ref: "locDebris", verbs: ["debri"] },
        ],
    },
    {
        id: "locBird",
        conditions: {},
        description: {
            long: "You are in a splendid chamber thirty feet high. The walls are frozen rivers of orange stone. An awkward canyon and a good passage exit from east and west sides of the chamber.",
            short: "You're in bird chamber.",
        },
        hints: ["bird"],
        actions: [
            {
                type: "goTo",
                ref: "locGrate",
                condition: {
                    type: "object",
                    object: "grate",
                    state: "grateOpen",
                },
                conditionFailed: { type: "speak", ref: "grateNoway" },
                verbs: ["depre"],
            },
            { type: "goTo", ref: "locBelowgrate", verbs: ["entra"] },
            { type: "goTo", ref: "locDebris", verbs: ["debri"] },
            { type: "goTo", ref: "locAwkward", verbs: ["canyo", "east"] },
            { type: "goTo", ref: "locPittop", verbs: ["passa", "pit", "west"] },
        ],
    },
    {
        id: "locBoulders1",
        conditions: { deep: true },
        description: {
            long: "The canyon runs into a mass of boulders -- dead end.",
            short: null,
        },
        actions: [{ type: "goTo", ref: "locTall", verbs: ["south"] }],
    },
    {
        id: "locBoulders2",
        conditions: { noarr: true, deep: true },
        description: {
            long: "You are in a small chamber filled with large boulders. The walls are very warm, causing the air in the room to be almost stifling from the heat. The only exit is a crawl heading west, through which is coming a low rumbling.",
            short: "You're in Chamber of Boulders.",
        },
        sound: "dullRumbling",
        actions: [
            {
                type: "goTo",
                ref: "locWarmwalls",
                verbs: ["west", "out", "crawl"],
            },
            { type: "goTo", ref: "locFork", verbs: ["fork"] },
            { type: "goTo", ref: "locBreathtaking", verbs: ["view"] },
        ],
    },
    {
        id: "locBreathtaking",
        conditions: { noarr: true, lit: true, deep: true },
        description: {
            long: "You are on the edge of a breath-taking view. Far below you is an active volcano, from which great gouts of molten lava come surging out, cascading back down into the depths. The glowing rock fills the farthest reaches of the cavern with a blood-red glare, giving everything an eerie, macabre appearance. The air is filled with flickering sparks of ash and a heavy smell of brimstone. The walls are hot to the touch, and the thundering of the volcano drowns out all other sounds. Embedded in the jagged roof far overhead are myriad twisted formations composed of pure white alabaster, which scatter the murky light into sinister apparitions upon the walls. To one side is a deep gorge, filled with a bizarre chaos of tortured rock which seems to have been crafted by the devil himself. An immense river of fire crashes out from the depths of the volcano, burns its way through the gorge, and plummets into a bottomless pit far off to your left. To the right, an immense geyser of blistering steam erupts continuously from a barren island in the center of a sulfurous lake, which bubbles ominously. The far right wall is aflame with an incandescence of its own, which lends an additional infernal splendor to the already hellish scene. A dark, foreboding passage exits to the south.",
            short: "You're at breath-taking view.",
        },
        hints: ["jade"],
        sound: "totalRoar",
        loud: true,
        actions: [
            {
                type: "goTo",
                ref: "locWarmwalls",
                verbs: ["south", "passa", "out"],
            },
            { type: "goTo", ref: "locFork", verbs: ["fork"] },
            { type: "speak", ref: "ridiculousAttempt", verbs: ["down"] },
            { type: "goTo", ref: "locGruesome", verbs: ["jump"] },
        ],
    },
    {
        id: "locBroken",
        conditions: { deep: true },
        description: {
            long: "You are in a dirty broken passage. To the east is a crawl. To the west is a large passage. Above you is a hole to another passage.",
            short: "You're in dirty passage.",
        },
        actions: [
            { type: "goTo", ref: "locSmallpitbrink", verbs: ["east", "crawl"] },
            { type: "goTo", ref: "locFloorhole", verbs: ["upwar", "hole"] },
            { type: "goTo", ref: "locDusty", verbs: ["west"] },
            { type: "goTo", ref: "locBedquilt", verbs: ["bedqu"] },
        ],
    },
    {
        id: "locBuilding",
        conditions: { fluid: true, above: true, lit: true },
        description: {
            long: "You are inside a building, a well house for a large spring.",
            short: "You're inside building.",
        },
        sound: "streamGurgles",
        actions: [
            { type: "goTo", ref: "locStart", verbs: ["out", "outdo", "west"] },
            { type: "goTo", ref: "locFoof1", verbs: ["xyzzy"] },
            { type: "goTo", ref: "locFoof3", verbs: ["plugh"] },
            { type: "goTo", ref: "locSewer", verbs: ["downs", "strea"] },
        ],
    },
    {
        id: "locBuilding1",
        conditions: { deep: true },
        description: {
            long: "",
            short: null,
        },
        actions: [
            {
                type: "goTo",
                ref: "locNoclimb",
                condition: {
                    type: "object",
                    object: "plant",
                    // state: 'plantThirsty',
                    // state: 'plantGrown',
                },
                conditionFailed: { type: "goTo", ref: "locPlanttop" },
                verbs: [],
            },
        ],
    },
    {
        id: "locCavein",
        conditions: { deep: true },
        description: {
            long: "The passage here is blocked by a recent cave-in.",
            short: null,
        },
        actions: [
            {
                type: "goTo",
                ref: "locGiantroom",
                verbs: ["south", "giant", "out"],
            },
        ],
    },
    {
        id: "locCliff",
        conditions: { above: true, noback: true, lit: true },
        description: {
            long: "The forest thins out here to reveal a steep cliff. There is no way down, but a small ledge can be seen to the west across the chasm.",
            short: "You're at cliff.",
        },
        hints: ["urn"],
        actions: [
            { type: "goTo", ref: "locForest17", verbs: ["south", "fores"] },
            { type: "goTo", ref: "locForest19", verbs: ["east"] },
            { type: "goTo", ref: "locNomake", verbs: ["jump"] },
        ],
    },
    {
        id: "locClifface",
        conditions: { deep: true },
        description: {
            long: "You are climbing along a nearly vertical cliff.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locCliffbase", verbs: ["down"] },
            {
                type: "goTo",
                ref: "locClifftop",
                condition: {
                    type: "carry",
                    object: "obj46",
                },
                conditionFailed: { type: "goTo", ref: "locFootslip" },
                verbs: ["upwar"],
            },
        ],
    },
    {
        id: "locCliffbase",
        conditions: { deep: true },
        description: {
            long: "You are at the base of a nearly vertical cliff. There are some slim footholds which would enable you to climb up, but it looks extremely dangerous. Here at the base of the cliff lie the remains of several earlier adventurers who apparently failed to make it.",
            short: "You're at base of cliff.",
        },
        actions: [
            { type: "goTo", ref: "locSteep", verbs: ["down", "se"] },
            { type: "goTo", ref: "locClifface", verbs: ["upwar", "climb"] },
        ],
    },
    {
        id: "locCliffledge",
        conditions: { deep: true },
        description: {
            long: "You are on a small ledge at the top of a nearly vertical cliff. There is a low crawl leading off to the northeast.",
            short: "You're at top of cliff.",
        },
        actions: [
            { type: "goTo", ref: "locClifface", verbs: ["climb", "down"] },
            { type: "goTo", ref: "locReachdead", verbs: ["ne", "crawl"] },
        ],
    },
    {
        id: "locClifftop",
        conditions: { deep: true },
        description: {
            long: "Just as you reach the top, your foot slips on a loose rock and you make one last desperate grab. Your luck holds, as does your grip. With an enormous heave, you lift yourself to the ledge above.",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locCliffledge" }],
    },
    {
        id: "locClimbstalk",
        conditions: { deep: true },
        description: {
            long: "You clamber up the plant and scurry through the hole at the top.",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locNarrow" }],
    },
    {
        id: "locCobble",
        conditions: { lit: true },
        description: {
            long: "You are crawling over cobbles in a low passage. There is a dim light at the east end of the passage.",
            short: "You're in cobble crawl.",
        },
        actions: [
            {
                type: "goTo",
                ref: "locBelowgrate",
                verbs: ["out", "surfa", "east"],
            },
            {
                type: "goTo",
                ref: "locDebris",
                verbs: ["insid", "dark", "west", "debri"],
            },
            { type: "goTo", ref: "locPittop", verbs: ["pit"] },
        ],
    },
    {
        id: "locComplex",
        conditions: { deep: true },
        description: {
            long: "You are at a complex junction. A low hands and knees passage from the north joins a higher crawl from the east to make a walking passage going west. There is also a large room above. The air is damp here.",
            short: "You're at complex junction.",
        },
        hints: ["jade"],
        sound: "windWhistles",
        actions: [
            {
                type: "goTo",
                ref: "locDusty",
                verbs: ["upwar", "climb", "room"],
            },
            { type: "goTo", ref: "locBedquilt", verbs: ["west", "bedqu"] },
            { type: "goTo", ref: "locShellroom", verbs: ["north", "shell"] },
            { type: "goTo", ref: "locAnteroom", verbs: ["east"] },
        ],
    },
    {
        id: "locCorridor",
        conditions: { noarr: true, deep: true },
        description: {
            long: "You're in a long east/west corridor. A faint rumbling noise can be heard in the distance.",
            short: "You're in corridor.",
        },
        sound: "dullRumbling",
        actions: [
            { type: "goTo", ref: "locNechasm", verbs: ["west"] },
            { type: "goTo", ref: "locFork", verbs: ["east"] },
            { type: "goTo", ref: "locBreathtaking", verbs: ["view"] },
            { type: "goTo", ref: "locBarrenfront", verbs: ["barre"] },
        ],
    },
    {
        id: "locCrack",
        conditions: { deep: true },
        description: {
            long: "The crack is far too small for you to follow. At its widest it is barely wide enough to admit your foot.",
            short: null,
        },
        actions: [{ type: "goTo", ref: "locPittop", verbs: [] }],
    },
    {
        id: "locCrossover",
        conditions: { deep: true },
        description: {
            long: "You are at a crossover of a high n/s passage and a low e/w one.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locLongeast", verbs: ["west"] },
            { type: "goTo", ref: "locDeadend7", verbs: ["north"] },
            { type: "goTo", ref: "locWestside", verbs: ["east"] },
            { type: "goTo", ref: "locLongwest", verbs: ["south"] },
        ],
    },
    {
        id: "locDarkroom",
        conditions: { deep: true },
        description: {
            long: "You're in the dark-room. A corridor leading south is the only exit.",
            short: "You're in dark-room.",
        },
        hints: ["dark"],
        actions: [
            {
                type: "goTo",
                ref: "locPlover",
                verbs: ["south", "plove", "out"],
            },
        ],
    },
    {
        id: "locCuldesac",
        conditions: { deep: true },
        description: {
            long: "You are in a cul-de-sac about eight feet across.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locSloping1", verbs: ["upwar", "out"] },
            { type: "goTo", ref: "locShellroom", verbs: ["shell"] },
        ],
    },
    {
        id: "locDeadcrawl",
        conditions: { deep: true },
        description: {
            long: "Dead end crawl.",
            short: null,
        },
        actions: [
            {
                type: "goTo",
                ref: "locLowroom",
                verbs: ["south", "crawl", "out"],
            },
        ],
    },
    {
        id: "locDeadend1",
        conditions: { deep: true, noarrr: true },
        description: {
            long: "Dead end",
            short: null,
        },
        hints: ["maze"],
        actions: [{ type: "goTo", ref: "locAlike4", verbs: ["west", "out"] }],
    },
    {
        id: "locDeadend2",
        conditions: { deep: true, noarrr: true },
        description: {
            long: "Dead end",
            short: null,
        },
        hints: ["maze"],
        actions: [{ type: "goTo", ref: "locAlike4", verbs: ["east", "out"] }],
    },
    {
        id: "locDeadend3",
        conditions: { deep: true, noarrr: true },
        description: {
            long: "Dead end",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike3", verbs: ["upwar", "out"] },
        ],
    },
    {
        id: "locDeadend4",
        conditions: { deep: true, noarrr: true },
        description: {
            long: "Dead end",
            short: null,
        },
        hints: ["maze"],
        actions: [{ type: "goTo", ref: "locAlike9", verbs: ["west", "out"] }],
    },
    {
        id: "locDeadend5",
        conditions: { deep: true, noarrr: true },
        description: {
            long: "Dead end",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike10", verbs: ["upwar", "out"] },
        ],
    },
    {
        id: "locDeadend6",
        conditions: { deep: true, noarrr: true },
        description: {
            long: "Dead end",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locPitbrink", verbs: ["east", "out"] },
        ],
    },
    {
        id: "locDeadend7",
        conditions: { deep: true },
        description: {
            long: "Dead end",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locCrossover", verbs: ["south", "out"] },
        ],
    },
    {
        id: "locDeadend8",
        conditions: { deep: true },
        description: {
            long: "Dead end",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike11", verbs: ["west", "out"] },
        ],
    },
    {
        id: "locDeadend9",
        conditions: { deep: true, noarrr: true },
        description: {
            long: "Dead end",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike3", verbs: ["south", "out"] },
        ],
    },
    {
        id: "locDeadend10",
        conditions: { deep: true, noarrr: true },
        description: {
            long: "Dead end",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locAlike12", verbs: ["east", "out"] },
        ],
    },
    {
        id: "locDeadend11",
        conditions: { deep: true, noarrr: true },
        description: {
            long: "Dead end",
            short: null,
        },
        hints: ["maze"],
        actions: [
            { type: "goTo", ref: "locAlike8", verbs: ["upwar", "out"] },
        ],
    },
    {
        id: "locDeadend12",
        conditions: { deep: true },
        description: {
            long: "Dead end",
            short: null,
        },
        actions: [{ type: "goTo", ref: "locAlike13", verbs: ["se"] }],
    },
    {
        id: "locDeadend13",
        conditions: { deep: true },
        description: {
            long: "Dead end",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locDifferent2", verbs: ["north", "out"] },
            {
                type: "goTo",
                ref: "locRoughhewn",
                condition: {
                    type: "object",
                    object: "vend",
                    state: "vendUnblocks",
                },
                conditionFailed: {
                    type: "goTo",
                    ref: "locBaddirection",
                },
                verbs: ["south"],
            },
        ],
    },
    {
        id: "locDebris",
        conditions: {},
        description: {
            long: 'You are in a debris room filled with stuff washed in from the surface. A low wide passage with cobbles becomes plugged with mud and debris here, but an awkward canyon leads upward and west. In the mud someone has scrawled, "magic word xyzzy".',
            short: "You're in debris room.",
        },
        actions: [
            {
                type: "goTo",
                ref: "locGrate",
                condition: {
                    type: "object",
                    object: "grate",
                    state: "grateOpen",
                },
                conditionFailed: { type: "speak", ref: "grateNoway" },
                verbs: ["depre"],
            },
            { type: "goTo", ref: "locBelowgrate", verbs: ["entra"] },
            {
                type: "goTo",
                ref: "locCobble",
                verbs: ["crawl", "cobbl", "passa", "low", "east"],
            },
            {
                type: "goTo",
                ref: "locAwkward",
                verbs: ["canyo", "insid", "upwar", "west"],
            },
            { type: "goTo", ref: "locFoof2", verbs: ["xyzzy"] },
            { type: "goTo", ref: "locPittop", verbs: ["pit"] },
        ],
    },
    {
        id: "locDifferent1",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisty little passages, all different.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locDifferent3", verbs: ["south"] },
            { type: "goTo", ref: "locDifferent4", verbs: ["sw"] },
            { type: "goTo", ref: "locDifferent5", verbs: ["ne"] },
            { type: "goTo", ref: "locDifferent6", verbs: ["se"] },
            { type: "goTo", ref: "locDifferent7", verbs: ["upwar"] },
            { type: "goTo", ref: "locDifferent8", verbs: ["nw"] },
            { type: "goTo", ref: "locDifferent9", verbs: ["east"] },
            { type: "goTo", ref: "locDifferent10", verbs: ["west"] },
            { type: "goTo", ref: "locDifferent11", verbs: ["north"] },
            { type: "goTo", ref: "locLongwest", verbs: ["down"] },
        ],
    },
    {
        id: "locDifferent2",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a little maze of twisting passages, all different.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locDifferent3", verbs: ["sw"] },
            { type: "goTo", ref: "locDifferent4", verbs: ["north"] },
            { type: "goTo", ref: "locDifferent5", verbs: ["east"] },
            { type: "goTo", ref: "locDifferent6", verbs: ["nw"] },
            { type: "goTo", ref: "locDifferent7", verbs: ["se"] },
            { type: "goTo", ref: "locDifferent8", verbs: ["ne"] },
            { type: "goTo", ref: "locDifferent9", verbs: ["west"] },
            { type: "goTo", ref: "locDifferent10", verbs: ["down"] },
            { type: "goTo", ref: "locDifferent11", verbs: ["upwar"] },
            { type: "goTo", ref: "locDeadend13", verbs: ["south"] },
        ],
    },
    {
        id: "locDifferent3",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of twisting little passages, all different.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locDifferent1", verbs: ["west"] },
            { type: "goTo", ref: "locDifferent4", verbs: ["se"] },
            { type: "goTo", ref: "locDifferent5", verbs: ["nw"] },
            { type: "goTo", ref: "locDifferent6", verbs: ["sw"] },
            { type: "goTo", ref: "locDifferent7", verbs: ["ne"] },
            { type: "goTo", ref: "locDifferent8", verbs: ["upwar"] },
            { type: "goTo", ref: "locDifferent9", verbs: ["down"] },
            { type: "goTo", ref: "locDifferent10", verbs: ["north"] },
            { type: "goTo", ref: "locDifferent11", verbs: ["south"] },
            { type: "goTo", ref: "locDifferent2", verbs: ["east"] },
        ],
    },
    {
        id: "locDifferent4",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a little maze of twisty passages, all different.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locDifferent1", verbs: ["nw"] },
            { type: "goTo", ref: "locDifferent3", verbs: ["upwar"] },
            { type: "goTo", ref: "locDifferent5", verbs: ["north"] },
            { type: "goTo", ref: "locDifferent6", verbs: ["south"] },
            { type: "goTo", ref: "locDifferent7", verbs: ["west"] },
            { type: "goTo", ref: "locDifferent8", verbs: ["sw"] },
            { type: "goTo", ref: "locDifferent9", verbs: ["ne"] },
            { type: "goTo", ref: "locDifferent10", verbs: ["east"] },
            { type: "goTo", ref: "locDifferent11", verbs: ["down"] },
            { type: "goTo", ref: "locDifferent2", verbs: ["se"] },
        ],
    },
    {
        id: "locDifferent5",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a twisting maze of little passages, all different.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locDifferent1", verbs: ["upwar"] },
            { type: "goTo", ref: "locDifferent3", verbs: ["down"] },
            { type: "goTo", ref: "locDifferent4", verbs: ["west"] },
            { type: "goTo", ref: "locDifferent6", verbs: ["ne"] },
            { type: "goTo", ref: "locDifferent7", verbs: ["sw"] },
            { type: "goTo", ref: "locDifferent8", verbs: ["east"] },
            { type: "goTo", ref: "locDifferent9", verbs: ["north"] },
            { type: "goTo", ref: "locDifferent10", verbs: ["nw"] },
            { type: "goTo", ref: "locDifferent11", verbs: ["se"] },
            { type: "goTo", ref: "locDifferent2", verbs: ["south"] },
        ],
    },
    {
        id: "locDifferent6",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a twisting little maze of passages, all different.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locDifferent1", verbs: ["ne"] },
            { type: "goTo", ref: "locDifferent3", verbs: ["north"] },
            { type: "goTo", ref: "locDifferent4", verbs: ["nw"] },
            { type: "goTo", ref: "locDifferent5", verbs: ["se"] },
            { type: "goTo", ref: "locDifferent7", verbs: ["east"] },
            { type: "goTo", ref: "locDifferent8", verbs: ["down"] },
            { type: "goTo", ref: "locDifferent9", verbs: ["south"] },
            { type: "goTo", ref: "locDifferent10", verbs: ["upwar"] },
            { type: "goTo", ref: "locDifferent11", verbs: ["west"] },
            { type: "goTo", ref: "locDifferent2", verbs: ["sw"] },
        ],
    },
    {
        id: "locDifferent7",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a twisty little maze of passages, all different.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locDifferent1", verbs: ["north"] },
            { type: "goTo", ref: "locDifferent3", verbs: ["se"] },
            { type: "goTo", ref: "locDifferent4", verbs: ["down"] },
            { type: "goTo", ref: "locDifferent5", verbs: ["south"] },
            { type: "goTo", ref: "locDifferent6", verbs: ["east"] },
            { type: "goTo", ref: "locDifferent8", verbs: ["west"] },
            { type: "goTo", ref: "locDifferent9", verbs: ["sw"] },
            { type: "goTo", ref: "locDifferent10", verbs: ["ne"] },
            { type: "goTo", ref: "locDifferent11", verbs: ["nw"] },
            { type: "goTo", ref: "locDifferent2", verbs: ["upwar"] },
        ],
    },
    {
        id: "locDifferent8",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a twisty maze of little passages, all different.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locDifferent1", verbs: ["east"] },
            { type: "goTo", ref: "locDifferent3", verbs: ["west"] },
            { type: "goTo", ref: "locDifferent4", verbs: ["upwar"] },
            { type: "goTo", ref: "locDifferent5", verbs: ["sw"] },
            { type: "goTo", ref: "locDifferent6", verbs: ["down"] },
            { type: "goTo", ref: "locDifferent7", verbs: ["south"] },
            { type: "goTo", ref: "locDifferent9", verbs: ["nw"] },
            { type: "goTo", ref: "locDifferent10", verbs: ["se"] },
            { type: "goTo", ref: "locDifferent11", verbs: ["ne"] },
            { type: "goTo", ref: "locDifferent2", verbs: ["north"] },
        ],
    },
    {
        id: "locDifferent9",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a little twisty maze of passages, all different.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locDifferent1", verbs: ["se"] },
            { type: "goTo", ref: "locDifferent3", verbs: ["ne"] },
            { type: "goTo", ref: "locDifferent4", verbs: ["south"] },
            { type: "goTo", ref: "locDifferent5", verbs: ["down"] },
            { type: "goTo", ref: "locDifferent6", verbs: ["upwar"] },
            { type: "goTo", ref: "locDifferent7", verbs: ["nw"] },
            { type: "goTo", ref: "locDifferent8", verbs: ["north"] },
            { type: "goTo", ref: "locDifferent10", verbs: ["sw"] },
            { type: "goTo", ref: "locDifferent11", verbs: ["east"] },
            { type: "goTo", ref: "locDifferent2", verbs: ["west"] },
        ],
    },
    {
        id: "locDifferent10",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of little twisting passages, all different.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locDifferent1", verbs: ["down"] },
            { type: "goTo", ref: "locDifferent3", verbs: ["east"] },
            { type: "goTo", ref: "locDifferent4", verbs: ["ne"] },
            { type: "goTo", ref: "locDifferent5", verbs: ["upwar"] },
            { type: "goTo", ref: "locDifferent6", verbs: ["west"] },
            { type: "goTo", ref: "locDifferent7", verbs: ["north"] },
            { type: "goTo", ref: "locDifferent8", verbs: ["south"] },
            { type: "goTo", ref: "locDifferent9", verbs: ["se"] },
            { type: "goTo", ref: "locDifferent11", verbs: ["sw"] },
            { type: "goTo", ref: "locDifferent2", verbs: ["nw"] },
        ],
    },
    {
        id: "locDifferent11",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are in a maze of little twisty passages, all different.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locDifferent1", verbs: ["sw"] },
            { type: "goTo", ref: "locDifferent3", verbs: ["nw"] },
            { type: "goTo", ref: "locDifferent4", verbs: ["east"] },
            { type: "goTo", ref: "locDifferent5", verbs: ["west"] },
            { type: "goTo", ref: "locDifferent6", verbs: ["north"] },
            { type: "goTo", ref: "locDifferent7", verbs: ["down"] },
            { type: "goTo", ref: "locDifferent8", verbs: ["se"] },
            { type: "goTo", ref: "locDifferent9", verbs: ["upwar"] },
            { type: "goTo", ref: "locDifferent10", verbs: ["south"] },
            { type: "goTo", ref: "locDifferent2", verbs: ["ne"] },
        ],
    },
    {
        id: "locDome",
        conditions: { deep: true },
        description: {
            long: "The dome is unclimbable.",
            short: null,
        },
        actions: [{ type: "goTo", ref: "locMisthall", verbs: [] }],
    },
    {
        id: "locDusty",
        conditions: { deep: true },
        description: {
            long: "You are in a large room full of dusty rocks. There is a big hole in the floor. There are cracks everywhere, and a passage leading east.",
            short: "You're in dusty rock room.",
        },
        actions: [
            { type: "goTo", ref: "locBroken", verbs: ["east", "passa"] },
            {
                type: "goTo",
                ref: "locComplex",
                verbs: ["down", "hole", "floor"],
            },
            { type: "goTo", ref: "locBedquilt", verbs: ["bedqu"] },
        ],
    },
    {
        id: "locEastbank",
        conditions: { deep: true },
        description: {
            long: "You are on the east bank of a fissure slicing clear across the hall. The mist is quite thick here, and the fissure is too wide to jump.",
            short: "You're on east bank of fissure.",
        },
        actions: [
            { type: "goTo", ref: "locMisthall", verbs: ["hall", "east"] },
            { type: "speak", ref: "crossBridge", verbs: ["jump"] },
            {
                type: "goTo",
                ref: "locWestbank",
                condition: {
                    type: "object",
                    object: "fissure",
                    state: "bridged",
                },
                conditionFailed: { type: "goTo", ref: "locNomake" },
                verbs: ["forwa"],
            },
            {
                type: "goTo",
                ref: "locWestbank",
                condition: {
                    type: "object",
                    object: "fissure",
                    state: "bridged",
                },
                conditionFailed: { type: "speak", ref: "noCross" },
                verbs: ["over", "acros", "west", "cross"],
            },
        ],
    },
    {
        id: "locEastend",
        conditions: { deep: true },
        description: {
            long: "You are at the east end of the Twopit Room. The floor here is littered with thin rock slabs, which make it easy to descend the pits. There is a path here bypassing the pits to connect passages from east and west. There are holes all over, but the only big one is on the wall directly over the west pit where you can't get to it.",
            short: "You're at east end of Twopit Room.",
        },
        actions: [
            { type: "goTo", ref: "locSwisscheese", verbs: ["east"] },
            { type: "goTo", ref: "locWestend", verbs: ["west", "acros"] },
            { type: "goTo", ref: "locEastpit", verbs: ["down", "pit"] },
        ],
    },
    {
        id: "locEastpit",
        conditions: { fluid: true, deep: true, oily: true },
        description: {
            long: "You are at the bottom of the eastern pit in the Twopit Room. There is a small pool of oil in one corner of the pit.",
            short: "You're in east pit.",
        },
        actions: [
            { type: "goTo", ref: "locEastend", verbs: ["upwar", "out"] },
        ],
    },
    {
        id: "locFloorhole",
        conditions: { deep: true },
        description: {
            long: "You are in a low n/s passage at a hole in the floor. The hole goes down to an e/w passage.",
            short: "You're in n/s passage above e/w passage.",
        },
        actions: [
            {
                type: "goTo",
                ref: "locKinghall",
                verbs: ["hall", "out", "south"],
            },
            { type: "goTo", ref: "locY2", verbs: ["north", "y2"] },
            { type: "goTo", ref: "locBroken", verbs: ["down", "hole"] },
        ],
    },
    {
        id: "locFoof1",
        conditions: {},
        description: {
            long: ">>Foof!<<",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locDebris" }],
    },
    {
        id: "locFoof2",
        conditions: { above: true },
        description: {
            long: ">>Foof!<<",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locBuilding" }],
    },
    {
        id: "locFoof3",
        conditions: { deep: true },
        description: {
            long: ">>Foof!<<",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locY2" }],
    },
    {
        id: "locFoof4",
        conditions: { above: true },
        description: {
            long: ">>Foof!<<",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locBuilding" }],
    },
    {
        id: "locFoof5",
        conditions: { deep: true },
        description: {
            long: ">>Foof!<<",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locPlover" }],
    },
    {
        id: "locFoof6",
        conditions: { deep: true },
        description: {
            long: ">>Foof!<<",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locY2" }],
    },
    {
        id: "locFootslip",
        conditions: { deep: true },
        description: {
            long: "Just as you reach the top, your foot slips on a loose rock and you tumble several hundred feet to join the other unlucky adventurers.",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locNowhere" }],
    },
    {
        id: "locForest1",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locStart", verbs: ["east"] },
            { type: "goTo", ref: "locForest13", verbs: ["west"] },
            { type: "goTo", ref: "locForest2", verbs: ["north"] },
            { type: "goTo", ref: "locForest3", verbs: ["south"] },
        ],
    },
    {
        id: "locForest2",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest1", verbs: ["east"] },
            { type: "goTo", ref: "locForest19", verbs: ["west"] },
            { type: "goTo", ref: "locForest3", verbs: ["north"] },
            { type: "goTo", ref: "locForest18", verbs: ["south"] },
        ],
    },
    {
        id: "locForest3",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest4", verbs: ["east", "west"] },
            { type: "goTo", ref: "locForest2", verbs: ["north"] },
            { type: "goTo", ref: "locForest1", verbs: ["south"] },
        ],
    },
    {
        id: "locForest4",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest3", verbs: ["east", "north"] },
            { type: "goTo", ref: "locForest5", verbs: ["west", "south"] },
        ],
    },
    {
        id: "locForest5",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest4", verbs: ["east", "north"] },
            { type: "goTo", ref: "locForest7", verbs: ["west"] },
            { type: "goTo", ref: "locForest6", verbs: ["south"] },
        ],
    },
    {
        id: "locForest6",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest5", verbs: ["east"] },
            { type: "goTo", ref: "locForest7", verbs: ["west"] },
            { type: "goTo", ref: "locValley", verbs: ["north"] },
            { type: "goTo", ref: "locSlit", verbs: ["south"] },
        ],
    },
    {
        id: "locForest7",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest5", verbs: ["east"] },
            { type: "goTo", ref: "locForest6", verbs: ["west"] },
            { type: "goTo", ref: "locGrate", verbs: ["north"] },
            { type: "goTo", ref: "locForest8", verbs: ["south"] },
        ],
    },
    {
        id: "locForest8",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest9", verbs: ["east"] },
            { type: "goTo", ref: "locForest11", verbs: ["west"] },
            { type: "goTo", ref: "locForest22", verbs: ["north"] },
            { type: "goTo", ref: "locForest7", verbs: ["south"] },
        ],
    },
    {
        id: "locForest9",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest11", verbs: ["east"] },
            { type: "goTo", ref: "locForest8", verbs: ["west"] },
            { type: "goTo", ref: "locForest10", verbs: ["north"] },
            { type: "goTo", ref: "locGrate", verbs: ["south"] },
        ],
    },
    {
        id: "locForest10",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { verbs: ["east"], type: "goTo", ref: "locSlit" },
            { type: "goTo", ref: "locForest11", verbs: ["west"] },
            { type: "goTo", ref: "locForest9", verbs: ["north"] },
            { type: "goTo", ref: "locGrate", verbs: ["south"] },
        ],
    },
    {
        id: "locForest11",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest10", verbs: ["east"] },
            { type: "goTo", ref: "locForest8", verbs: ["west"] },
            { type: "goTo", ref: "locForest22", verbs: ["north"] },
            { type: "goTo", ref: "locForest9", verbs: ["south"] },
        ],
    },
    {
        id: "locForest12",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest13", verbs: ["east"] },
            { type: "goTo", ref: "locForest14", verbs: ["west"] },
            { type: "goTo", ref: "locForest22", verbs: ["north"] },
            { type: "goTo", ref: "locValley", verbs: ["south"] },
        ],
    },
    {
        id: "locForest13",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest1", verbs: ["east"] },
            { type: "goTo", ref: "locForest12", verbs: ["west"] },
            { type: "goTo", ref: "locForest20", verbs: ["north"] },
            { type: "goTo", ref: "locHill", verbs: ["south"] },
        ],
    },
    {
        id: "locForest14",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locRoadend", verbs: ["east"] },
            { type: "goTo", ref: "locForest16", verbs: ["west"] },
            { type: "goTo", ref: "locForest15", verbs: ["north"] },
            { type: "goTo", ref: "locForest12", verbs: ["south"] },
        ],
    },
    {
        id: "locForest15",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest16", verbs: ["east"] },
            { type: "goTo", ref: "locForest22", verbs: ["west"] },
            { type: "goTo", ref: "locRoadend", verbs: ["north"] },
            { type: "goTo", ref: "locForest14", verbs: ["south"] },
        ],
    },
    {
        id: "locForest16",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest17", verbs: ["east", "north"] },
            { type: "goTo", ref: "locForest14", verbs: ["west"] },
            { type: "goTo", ref: "locForest15", verbs: ["south"] },
        ],
    },
    {
        id: "locForest17",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest18", verbs: ["east"] },
            { type: "goTo", ref: "locForest16", verbs: ["west", "south"] },
            { type: "goTo", ref: "locCliff", verbs: ["north"] },
        ],
    },
    {
        id: "locForest18",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest19", verbs: ["east"] },
            { type: "goTo", ref: "locForest17", verbs: ["west"] },
            { type: "goTo", ref: "locForest2", verbs: ["north"] },
            { type: "goTo", ref: "locForest21", verbs: ["south"] },
        ],
    },
    {
        id: "locForest19",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest2", verbs: ["east"] },
            { type: "goTo", ref: "locForest18", verbs: ["west"] },
            { type: "goTo", ref: "locCliff", verbs: ["north"] },
            { type: "goTo", ref: "locForest20", verbs: ["south"] },
        ],
    },
    {
        id: "locForest20",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { verbs: ["east"], type: "goTo", ref: "locHill" },
            { type: "goTo", ref: "locForest21", verbs: ["west"] },
            { type: "goTo", ref: "locForest19", verbs: ["north"] },
            { type: "goTo", ref: "locForest13", verbs: ["south"] },
        ],
    },
    {
        id: "locForest21",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest20", verbs: ["east"] },
            { type: "goTo", ref: "locRoadend", verbs: ["west"] },
            { type: "goTo", ref: "locForest18", verbs: ["north"] },
            { type: "goTo", ref: "locForest21", verbs: ["south"] },
        ],
    },
    {
        id: "locForest22",
        conditions: { forest: true, noback: true, lit: true },
        description: {
            long: "You are wandering aimlessly through the forest.",
            short: null,
        },
        hints: ["forest"],
        actions: [
            { type: "goTo", ref: "locForest8", verbs: ["east"] },
            { type: "goTo", ref: "locForest11", verbs: ["west"] },
            { type: "goTo", ref: "locForest15", verbs: ["north"] },
            { type: "goTo", ref: "locForest12", verbs: ["south"] },
        ],
    },
    {
        id: "locFork",
        conditions: { noarr: true, deep: true },
        description: {
            long: "The path forks here. The left fork leads northeast. A dull rumbling seems to get louder in that direction. The right fork leads southeast down a gentle slope. The main corridor enters from the west.",
            short: "You're at fork in path.",
        },
        sound: "dullRumbling",
        actions: [
            { type: "goTo", ref: "locCorridor", verbs: ["west"] },
            { type: "goTo", ref: "locWarmwalls", verbs: ["ne", "left"] },
            {
                type: "goTo",
                ref: "locLimestone",
                verbs: ["se", "right", "down"],
            },
            { type: "goTo", ref: "locBreathtaking", verbs: ["view"] },
            { type: "goTo", ref: "locBarrenfront", verbs: ["barre"] },
        ],
    },
    {
        id: "locGiantroom",
        conditions: { deep: true },
        description: {
            long: 'You are in the Giant Room. The ceiling here is too high up for your lamp to show it. Cavernous passages lead east, north, and south. On the west wall is scrawled the inscription, "fee fie foe foo" [sic].',
            short: "You're in Giant Room.",
        },
        actions: [
            { type: "goTo", ref: "locNarrow", verbs: ["south"] },
            { type: "goTo", ref: "locCavein", verbs: ["east"] },
            { type: "goTo", ref: "locImmense", verbs: ["north"] },
        ],
    },
    {
        id: "locGrate",
        conditions: { above: true, lit: true },
        description: {
            long: "You are in a 20-foot depression floored with bare dirt. Set into the dirt is a strong steel grate mounted in concrete. A dry streambed leads into the depression.",
            short: "You're outside grate.",
        },
        hints: ["grate", "jade"],
        actions: [
            { type: "goTo", ref: "locForest7", verbs: ["east", "fores"] },
            { type: "goTo", ref: "locForest10", verbs: ["south"] },
            { type: "goTo", ref: "locForest9", verbs: ["west"] },
            { type: "goTo", ref: "locStart", verbs: ["build"] },
            { type: "goTo", ref: "locSlit", verbs: ["upstr", "gully", "north"] },
            {
                type: "goTo",
                ref: "locBelowgrate",
                condition: { type: "object", object: "grate", state: "grateOpen" },
                conditionFailed: { type: "speak", ref: "grateNoway" },
                verbs: ["enter", "insid", "down"],
            },
        ],
    },
    {
        id: "locGruesome",
        conditions: { deep: true },
        description: {
            long: "There is now one more gruesome aspect to the spectacular vista.",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locNowhere" }],
    },
    {
        id: "locHill",
        conditions: { above: true, lit: true },
        description: {
            long: "You have walked up a hill, still in the forest. The road slopes back down the other side of the hill. There is a building in the distance.",
            short: "You're at hill in road.",
        },
        actions: [
            { type: "goTo", ref: "locStart", verbs: ["build", "east"] },
            { type: "goTo", ref: "locRoadend", verbs: ["west"] },
            { type: "goTo", ref: "locForest20", verbs: ["north"] },
            { type: "goTo", ref: "locForest13", verbs: ["south"] },
            { type: "speak", ref: "whichWay", verbs: ["down"] },
        ],
    },
    {
        id: "locImmense",
        conditions: { deep: true },
        description: {
            long: "You are at one end of an immense north/south passage.",
            short: null,
        },
        sound: "windWhistles",
        actions: [
            { id: "goTO", ref: "locGiantroom", verbs: ["south", "giant", "passa"] },
            {
                type: "goTo",
                ref: "locWaterfall",
                condition: { type: "object", object: "door", state: "doorUnrusted" },
                conditionFailed: { type: "speak", ref: "rustyDoor" },
                verbs: ["north", "enter", "caver"],
            },
        ],
    },
    {
        id: "locIncline",
        conditions: { deep: true },
        description: {
            long: "You are at the top of a steep incline above a large room. You could climb down here, but you would not be able to climb up. There is a passage leading back to the north.",
            short: "You're at steep incline above large room.",
        },
        actions: [
            { type: "goTo", ref: "locWaterfall", verbs: ["north", "caver", "passa"] },
            { type: "goTo", ref: "locLowroom", verbs: ["down", "climb"] },
        ],
    },
    {
        id: "locJumble",
        conditions: { deep: true },
        description: {
            long: "You are in a jumble of rock, with cracks everywhere.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locY2", verbs: ["down", "y2"] },
            { type: "goTo", ref: "locMisthall", verbs: ["upwar"] },
        ],
    },
    {
        id: "locKinghall",
        conditions: { deep: true },
        description: {
            long: "You are in the Hall of the Mountain King, with passages off in all directions.",
            short: "You're in Hall of Mt King.",
        },
        hints: ["snake"],
        actions: [
            { type: "goTo", ref: "locMisthall", verbs: ["stair", "upwar", "east"] },
            {
                verbs: ["north", "right"],
                type: "goTo",
                ref: "locFloorhole",
                condition: { type: "object", object: "snake", state: "snakeChased" },
                conditionFailed: { type: "goTo", ref: "locSnakeblock" },
            },
            {
                verbs: ["south", "left"],
                type: "goTo",
                ref: "locSouthside",
                condition: { type: "object", object: "snake", state: "snakeChased" },
                conditionFailed: { type: "goTo", ref: "locSnakeblock" },
            },
            {
                verbs: ["west", "forwa"],
                type: "goTo",
                ref: "locWestside",
                condition: { type: "object", object: "snake", state: "snakeChased" },
                conditionFailed: { type: "goTo", ref: "locSnakeblock" },
            },
            {
                verbs: ["sw"],
                type: "goTo",
                ref: "locSecret3",
                // condition: [pct, 35],
                conditionFailed: { type: "goTo", ref: "locSnakeblock" },
            },
            {
                verbs: ["sw"],
                type: "goTo",
                ref: "locSnakeblock",
                // condition: ["with", snake],
                conditionFailed: { type: "goTo", ref: "locSnakeblock" },
            },
            { type: "goTo", ref: "locSecret3", verbs: ["secre"] },
        ],
    },
    {
        id: "locLarge",
        conditions: { deep: true },
        description: {
            long: "You are in a large chamber with passages to the west and north.",
            short: null,
        },
        hints: ["ogre"],
        actions: [
            { type: "goTo", ref: "locSecret3", verbs: ["west"] },
            {
                verbs: ["north"],
                type: "goTo",
                ref: "locStoreroom",
                // condition: [with, ogre],
                conditionFailed: { type: "speak", ref: "ogreSnarl" },
            },
        ],
    },
    {
        id: "locLedge",
        conditions: { above: true, lit: true },
        description: {
            long: "You are on a small ledge on one face of a sheer cliff. There are no paths away from the ledge. Across the chasm is a small clearing surrounded by forest.",
            short: "You're on ledge.",
        },
        actions: [{ type: "goTo", ref: "locNomake", verbs: ["jump"] }],
    },
    {
        id: "locLimestone",
        conditions: { noarr: true, deep: true },
        description: {
            long: "You are walking along a gently sloping north/south passage lined with oddly shaped limestone formations.",
            short: "You're in limestone passage.",
        },
        actions: [
            { type: "goTo", ref: "locFork", verbs: ["north", "upwar", "fork"] },
            { type: "goTo", ref: "locBarrenfront", verbs: ["south", "down", "barre"] },
            { type: "goTo", ref: "locBreathtaking", verbs: ["view"] },
        ],
    },
    {
        id: "locLongeast",
        conditions: { deep: true },
        description: {
            long: "You are at the east end of a very long hall apparently without side chambers. To the east a low wide crawl slants up. To the north a round two foot hole slants down.",
            short: "You're at east end of long hall.",
        },
        actions: [
            { type: "goTo", ref: "locMistwest", verbs: ["east", "upwar", "crawl"] },
            { type: "goTo", ref: "locLongwest", verbs: ["west"] },
            { type: "goTo", ref: "locCrossover", verbs: ["north", "down", "hole"] },
        ],
    },
    {
        id: "locLongwest",
        conditions: { deep: true },
        description: {
            long: "You are at the west end of a very long featureless hall. The hall joins up with a narrow north/south passage.",
            short: "You're at west end of long hall.",
        },
        actions: [
            { type: "goTo", ref: "locLongeast", verbs: ["east"] },
            { type: "goTo", ref: "locCrossover", verbs: ["north"] },
            {
                verbs: ["south"],
                type: "goTo",
                ref: "locDifferent1",
                // condition: [nodwarves],
            },
        ],
    },
    {
        id: "locLowroom",
        conditions: { deep: true },
        description: {
            long: "You are in a large low room. Crawls lead north, se, and sw.",
            short: "You're in large low room.",
        },
        actions: [
            { type: "goTo", ref: "locBedquilt", verbs: ["bedqu"] },
            { type: "goTo", ref: "locWinding", verbs: ["sw"] },
            { type: "goTo", ref: "locDeadcrawl", verbs: ["north"] },
            { type: "goTo", ref: "locOriental", verbs: ["se", "oriental"] },
        ],
    },
    {
        id: "locMirrorcanyon",
        conditions: { deep: true },
        description: {
            long: "You are in a north/south canyon about 25 feet across. The floor is covered by white mist seeping in from the north. The walls extend upward for well over 100 feet. Suspended from some unseen point far above you, an enormous two-sided mirror is hanging parallel to and midway between the canyon walls. (The mirror is obviously provided for the use of the dwarves who, as you know, are extremely vain.) A small window can be seen in either wall, some fifty feet up.",
            short: "You're in Mirror Canyon.",
        },
        hints: ["jade"],
        sound: "windWhistles",
        actions: [
            { type: "goTo", ref: "locSecret1", verbs: ["south"] },
            { type: "goTo", ref: "locReservoir", verbs: ["north", "reser"] },
        ],
    },
    {
        id: "locMisthall",
        conditions: { deep: true },
        description: {
            long: "You are at one end of a vast hall stretching forward out of sight to the west. There are openings to either side. Nearby, a wide stone staircase leads downward. The hall is filled with wisps of white mist swaying to and fro almost as if alive. A cold wind blows up the staircase. There is a passage at the top of a dome behind you.",
            short: "You're in Hall of Mists.",
        },
        hints: ["jade"],
        sound: "windWhistles",
        actions: [
            { type: "goTo", ref: "locNugget", verbs: ["left", "south"] },
            { type: "goTo", ref: "locEastbank", verbs: ["forwa", "hall", "west"] },
            { type: "goTo", ref: "locKinghall", verbs: ["stair", "down", "north"] },
            {
                verbs: ["upwar", "pit", "steps", "dome", "passa", "east"],
                type: "goTo",
                ref: "locDome",
                condition: { type: "carry", object: "nugget" },
                conditionFailed: { type: "goTo", ref: "locPittop" },
            },
            { verbs: ["y2"], type: "goTo", ref: "locJumble" },
        ],
    },
    {
        id: "locMistwest",
        conditions: { deep: true },
        description: {
            long: "You are at the west end of the Hall of Mists. A low wide crawl continues west and another goes north. To the south is a little passage 6 feet off the floor.",
            short: "You're at west end of Hall of Mists.",
        },
        actions: [
            {
                type: "goTo",
                ref: "locAlike1",
                verbs: ["south", "upwar", "passa", "climb"],
            },
            { type: "goTo", ref: "locWestbank", verbs: ["east"] },
            { type: "goTo", ref: "locParallel2", verbs: ["north"] },
            { type: "goTo", ref: "locLongeast", verbs: ["west", "crawl"] },
        ],
    },
    {
        id: "locMisty",
        conditions: { deep: true },
        description: {
            long: "You are following a wide path around the outer edge of a large cavern. Far below, through a heavy white mist, strange splashing noises can be heard. The mist rises up through a fissure in the ceiling. The path exits to the south and west.",
            short: "You're in misty cavern.",
        },
        sound: "noMeaning",
        actions: [
            { type: "goTo", ref: "locOriental", verbs: ["south", "oriental"] },
            { type: "goTo", ref: "locAlcove", verbs: ["west"] },
        ],
    },
    {
        id: "locNarrow",
        conditions: { deep: true },
        description: {
            long: "You are in a long, narrow corridor stretching out of sight to the west. At the eastern end is a hole through which you can see a profusion of leaves.",
            short: "You're in narrow corridor.",
        },
        actions: [
            {
                type: "goTo",
                ref: "locWestpit",
                verbs: ["down", "climb", "east"],
            },
            { type: "goTo", ref: "locNeckbroke", verbs: ["jump"] },
            { type: "goTo", ref: "locGiantroom", verbs: ["west", "giant"] },
        ],
    },
    {
        id: "locNe",
        conditions: { deep: true, lit: true },
        description: {
            long: 'You are at the northeast end of an immense room, even larger than the Giant Room. It appears to be a repository for the "Adventure" program. Massive torches far overhead bathe the room with smoky yellow light. Scattered about you can be seen a pile of bottles (all of them empty), a nursery of young beanstalks murmuring quietly, a bed of oysters, a bundle of black rods with rusty stars on their ends, and a collection of brass lanterns. Off to one side a great many dwarves are sleeping on the floor, snoring loudly. A notice nearby reads: "Do not disturb the dwarves!" An immense mirror is hanging against one wall, and stretches to the other end of the room, where various other sundry objects can be glimpsed dimly in the distance.',
            short: "You're at ne end.",
        },
        sound: "murmuringSnoring",
        actions: [{ verbs: ["sw"], type: "goTo", ref: "locSw" }],
    },
    {
        id: "locNeckbroke",
        conditions: { deep: true },
        description: {
            long: "You are at the bottom of the pit with a broken neck.",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locNowhere" }],
    },
    {
        id: "locNechasm",
        conditions: { noarr: true, deep: true },
        description: {
            long: "You are on the far side of the chasm. A ne path leads away from the chasm on this side.",
            short: "You're on ne side of chasm.",
        },
        actions: [
            { type: "goTo", ref: "locCorridor", verbs: ["NE"] },
            {
                verbs: ["over", "acros", "cross", "sw"],
                type: "speak",
                ref: "trollBlocks",
                // condition: [with, troll],
                conditionFailed: { type: "special", description: 3 },
            },
            { type: "speak", ref: "crossBridge", verbs: ["jump"] },
            { type: "goTo", ref: "locFork", verbs: ["fork"] },
            { type: "goTo", ref: "locBreathtaking", verbs: ["view"] },
            { type: "goTo", ref: "locBarrenfront", verbs: ["barre"] },
        ],
    },
    {
        id: "locNoclimb",
        conditions: { deep: true },
        description: {
            long: 'There is nothing here to climb. Use "up" or "out" to leave the pit.',
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locWestpit" }],
    },
    {
        id: "locNomake",
        conditions: { deep: true },
        description: {
            long: "You didn't make it.",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locNowhere" }],
    },
    {
        id: "locNugget",
        conditions: { deep: true },
        description: {
            long: 'This is a low room with a crude note on the wall. The note says, "You won\'t get it up the steps".',
            short: "You're in nugget-of-gold room.",
        },
        actions: [
            {
                type: "goTo",
                ref: "locMisthall",
                verbs: ["hall", "out", "north"],
            },
        ],
    },
    {
        id: "locOriental",
        conditions: { deep: true },
        description: {
            long: "This is the Oriental Room. Ancient oriental cave drawings cover the walls. A gently sloping passage leads upward to the north, another passage leads se, and a hands and knees crawl leads west.",
            short: "You're in Oriental Room.",
        },
        actions: [
            { type: "goTo", ref: "locSwisscheese", verbs: ["se"] },
            { type: "goTo", ref: "locLowroom", verbs: ["west", "crawl"] },
            {
                type: "goTo",
                ref: "locMisty",
                verbs: ["upwar", "north", "caver"],
            },
        ],
    },
    {
        id: "locParallel1",
        conditions: { deep: true },
        description: {
            long: "You have crawled through a very low wide passage parallel to and north of the Hall of Mists.",
            short: null,
        },
        actions: [{ type: "goTo", ref: "locMistwest", verbs: ["se"] }],
    },
    {
        id: "locParallel2",
        conditions: { deep: true },
        description: {
            long: "You have crawled through a very low wide passage parallel to and north of the Hall of Mists.",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locWestbank" }],
    },
    {
        id: "locPitbrink",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are on the brink of a thirty foot pit with a massive orange column down one wall. You could climb down here but you could not get back up. The maze continues at this level.",
            short: "You're at brink of pit.",
        },
        actions: [
            { type: "goTo", ref: "locBird", verbs: ["down", "climb"] },
            { type: "goTo", ref: "locAlike10", verbs: ["west"] },
            { type: "goTo", ref: "locDeadend6", verbs: ["south"] },
            { type: "goTo", ref: "locAlike12", verbs: ["north"] },
            { type: "goTo", ref: "locAlike13", verbs: ["east"] },
        ],
    },
    {
        id: "locPittop",
        conditions: {},
        description: {
            long: "At your feet is a small pit breathing traces of white mist. An east passage ends here except for a small crack leading on.",
            short: "You're at top of small pit.",
        },
        actions: [
            {
                verbs: ["depre"],
                type: "goTo",
                ref: "locGrate",
                condition: { type: "object", object: "grate", state: "grateOpen" },
                conditionFailed: { type: "speak", ref: "grateNoway" },
            },
            { type: "goTo", ref: "locBelowgrate", verbs: ["entra"] },
            { type: "goTo", ref: "locDebris", verbs: ["debri"] },
            { type: "goTo", ref: "locBird", verbs: ["passa", "east"] },
            {
                verbs: ["down", "pit", "steps"],
                type: "goTo",
                ref: "locNeckbroke",
                condition: { type: "carry", object: "nugget" },
                conditionFailed: { type: "goTo", ref: "locMisthall" },
            },
            { type: "goTo", ref: "locCrack", verbs: ["crack", "west"] },
        ],
    },
    {
        id: "locPlanttop",
        conditions: { deep: true },
        description: {
            long: "You have climbed up the plant and out of the pit.",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locWestend" }],
    },
    {
        id: "locPlover",
        conditions: { deep: true, lit: true },
        description: {
            long: "You're in a small chamber lit by an eerie green light. An extremely narrow tunnel exits to the west. A dark corridor leads ne.",
            short: "You're in Plover Room.",
        },
        hints: ["dark"],
        actions: [
            { type: "special", description: 1, verbs: ["west", "passa", "out"] },
            { type: "goTo", ref: "locAlcove", verbs: ["west"] },
            {
                verbs: ["plove"],
                type: "special",
                description: 2,
                condition: { type: "carry", object: "emerald" },
                conditionFailed: { type: "speak", ref: "locFoof6" },
            },
            { type: "goTo", ref: "locDarkroom", verbs: ["ne", "dark"] },
        ],
    },
    {
        id: "locReachdead",
        conditions: { deep: true },
        description: {
            long: "You have reached a dead end.",
            short: null,
        },
        actions: [
            {
                type: "goTo",
                ref: "locCliffledge",
                verbs: ["sw", "out", "crawl"],
            },
        ],
    },
    {
        id: "locResbottom",
        conditions: { fluid: true, deep: true },
        description: {
            long: "You are walking across the bottom of the reservoir. Walls of water rear up on either side. The roar of the water cascading past is nearly deafening, and the mist is so thick you can barely see.",
            short: "You're at bottom of reservoir.",
        },
        sound: "totalRoar",
        loud: true,
        actions: [
            { type: "goTo", ref: "locResnorth", verbs: ["north"] },
            { type: "goTo", ref: "locReservoir", verbs: ["south"] },
        ],
    },
    {
        id: "locResnorth",
        conditions: { fluid: true, deep: true },
        description: {
            long: "You are at the northern edge of the reservoir. A northwest passage leads sharply up from here.",
            short: "You're north of reservoir.",
        },
        sound: "watersCrashing",
        actions: [
            {
                verbs: ["south", "acros", "cross"],
                type: "speak",
                ref: "badDirection",
                condition: { type: "object", object: "reser", state: "watersUnparted" },
                conditionFailed: { type: "speak", ref: "locResbottom" },
            },
            {
                type: "goTo",
                ref: "locTreacherous",
                verbs: ["nw", "upwar", "out"],
            },
        ],
    },
    {
        id: "locReservoir",
        conditions: { fluid: true, deep: true },
        description: {
            long: "You are at the edge of a large underground reservoir. An opaque cloud of white mist fills the room and rises rapidly upward. The lake is fed by a stream, which tumbles out of a hole in the wall about 10 feet overhead and splashes noisily into the water somewhere within the mist. There is a passage going back toward the south.",
            short: "You're at reservoir.",
        },
        sound: "streamSplashes",
        actions: [
            { type: "goTo", ref: "locMirrorcanyon", verbs: ["south", "out"] },
            {
                verbs: ["north", "acros", "cross"],
                type: "speak",
                ref: "badDirection",
                condition: { type: "object", object: "reser", state: "watersUnparted" },
                conditionFailed: { type: "speak", ref: "locResbottom" },
            },
        ],
    },
    {
        id: "locRoadend",
        conditions: { above: true, lit: true },
        description: {
            long: "The road, which approaches from the east, ends here amid the trees.",
            short: "You're at end of road.",
        },
        actions: [
            { type: "goTo", ref: "locHill", verbs: ["road", "east", "upwar"] },
            { type: "goTo", ref: "locStart", verbs: ["build"] },
            { type: "goTo", ref: "locForest14", verbs: ["south", "fores"] },
            { type: "goTo", ref: "locForest15", verbs: ["west"] },
            { type: "goTo", ref: "locForest21", verbs: ["north"] },
        ],
    },
    {
        id: "locRoughhewn",
        conditions: { deep: true },
        description: {
            long: "You are in a long, rough-hewn, north/south corridor.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locDeadend13", verbs: ["north"] },
            { type: "goTo", ref: "locLarge", verbs: ["south"] },
        ],
    },
    {
        id: "locSecret1",
        conditions: { deep: true },
        description: {
            long: "You are in a secret n/s canyon above a large room.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locSlab", verbs: ["down", "slab"] },
            {
                verbs: ["south"],
                type: "goTo",
                ref: "locSecret5",
                // condition: {
                //   type: 'object',
                //   object: 'dragon',
                //   state: 'dragonDead',
                //   state: 'dragonBloodless',
                // },
                // condition: [not, dragon, dragonBars],
                conditionFailed: { type: "goTo", ref: "locSecret4" },
            },
            { type: "goTo", ref: "locMirrorcanyon", verbs: ["north"] },
            { type: "goTo", ref: "locReservoir", verbs: ["reser"] },
        ],
    },
    {
        id: "locSecret2",
        conditions: { deep: true },
        description: {
            long: "You are in a secret n/s canyon above a sizable passage.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locThreejunction", verbs: ["north"] },
            { type: "goTo", ref: "locBedquilt", verbs: ["down", "passa"] },
            { type: "goTo", ref: "locTopstalactite", verbs: ["south"] },
        ],
    },
    {
        id: "locSecret3",
        conditions: { deep: true },
        description: {
            long: "You are in a secret canyon which here runs e/w. It crosses over a very tight canyon 15 feet below. If you go down you may not be able to get back up.",
            short: "You're in secret e/w canyon above tight canyon.",
        },
        actions: [
            { type: "goTo", ref: "locKinghall", verbs: ["east"] },
            { type: "goTo", ref: "locSecret5", verbs: ["west"] },
            { type: "goTo", ref: "locSecret6", verbs: ["west"] },
            { type: "goTo", ref: "locWideplace", verbs: ["down"] },
        ],
    },
    // Following three rooms are where the dragon lives. The code has a
    // wired-in assumption that the dragon corpse goes to locSecret5,
    {
        id: "locSecret4",
        conditions: { deep: true },
        description: {
            long: "You are in a secret canyon which exits to the north and east.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locSecret1", verbs: ["north", "out"] },
            { type: "speak", ref: "nastyDragon", verbs: ["east", "forwa"] },
        ],
    },
    {
        id: "locSecret5",
        conditions: { deep: true },
        description: {
            long: "You are in a secret canyon which exits to the north and east.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locSecret1", verbs: ["north"] },
            { type: "goTo", ref: "locSecret3", verbs: ["east"] },
        ],
    },
    {
        id: "locSecret6",
        conditions: { deep: true },
        description: {
            long: "You are in a secret canyon which exits to the north and east.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locSecret3", verbs: ["north", "out"] },
            { type: "speak", ref: "nastyDragon", verbs: ["east", "forwa"] },
        ],
    },
    {
        id: "locSewer",
        conditions: { deep: true },
        description: {
            long: "The stream flows out through a pair of 1 foot diameter sewer pipes. It would be advisable to use the exit.",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locBuilding" }],
    },
    {
        id: "locShellroom",
        conditions: { deep: true },
        description: {
            long: "You're in a large room carved out of sedimentary rock. The floor and walls are littered with bits of shells embedded in the stone. A shallow passage proceeds downward, and a somewhat steeper one leads up. A low hands and knees passage enters from the south.",
            short: "You're in Shell Room.",
        },
        actions: [
            { type: "goTo", ref: "locArched", verbs: ["upwar", "hall"] },
            { type: "goTo", ref: "locSloping1", verbs: ["down"] },
            {
                verbs: ["south"],
                condition: { type: "carry", object: "clam" },
                type: "speak",
                ref: "clamBlocker",
            },
            // { verbs: ['south'], condition: [carry, oyster],
            // action: { type: 'speak', description: 'oysterBlocker' } },
            { type: "goTo", ref: "locComplex", verbs: ["south"] },
        ],
    },
    {
        id: "locSlab",
        conditions: { deep: true },
        description: {
            long: "You are in a large low circular chamber whose floor is an immense slab fallen from the ceiling (Slab Room). East and west there once were large passages, but they are now filled with boulders. Low small passages go north and south, and the south one quickly bends west around the boulders.",
            short: "You're in Slab Room.",
        },
        actions: [
            { type: "goTo", ref: "locWestend", verbs: ["south"] },
            { type: "goTo", ref: "locSecret1", verbs: ["upwar", "climb"] },
            { type: "goTo", ref: "locBedquilt", verbs: ["north"] },
        ],
    },
    {
        id: "locSlit",
        conditions: { fluid: true, above: true, lit: true },
        description: {
            long: "At your feet all the water of the stream splashes into a 2-inch slit in the rock. Downstream the streambed is bare rock.",
            short: "You're at slit in streambed.",
        },
        sound: "streamGurgles",
        actions: [
            { type: "goTo", ref: "locStart", verbs: ["build"] },
            { type: "goTo", ref: "locValley", verbs: ["upstr", "north"] },
            { type: "goTo", ref: "locForest6", verbs: ["east", "fores", "upwar"] },
            { type: "goTo", ref: "locForest10", verbs: ["west"] },
            { type: "goTo", ref: "locGrate", verbs: ["downs", "bed", "south", "depre"] },
            { type: "speak", ref: "dontFit", verbs: ["slit", "strea", "down", "insid", "enter"] },
        ],
    },
    {
        id: "locSloping1",
        conditions: { deep: true },
        description: {
            long: "You are in a long sloping corridor with ragged sharp walls.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locShellroom", verbs: ["upwar", "shell"] },
            { type: "goTo", ref: "locCuldesac", verbs: ["down"] },
        ],
    },
    {
        id: "locSmallpit",
        conditions: { fluid: true, deep: true },
        description: {
            long: "You are in the bottom of a small pit with a little stream, which enters and exits through tiny slits.",
            short: "You're at bottom of pit with stream.",
        },
        sound: "streamGurgles",
        actions: [
            {
                type: "goTo",
                ref: "locSmallpitbrink",
                verbs: ["climb", "upwar", "out"],
            },
            {
                type: "speak",
                ref: "dontFit",
                verbs: ["slit", "strea", "down", "insid", "enter", "upstr", "downs"],
            },
        ],
    },
    {
        id: "locSmallpitbrink",
        conditions: { deep: true },
        description: {
            long: "You are on the brink of a small clean climbable pit. A crawl leads west.",
            short: "You're at brink of small pit.",
        },
        actions: [
            { type: "goTo", ref: "locBroken", verbs: ["west", "crawl"] },
            {
                type: "goTo",
                ref: "locSmallpit",
                verbs: ["down", "pit", "climb"],
            },
        ],
    },
    {
        id: "locSnakeblock",
        conditions: { deep: true },
        description: {
            long: "You can't get by the snake.",
            short: null,
        },
        actions: [{ verbs: [], type: "goTo", ref: "locKinghall" }],
    },
    {
        id: "locSoftroom",
        conditions: { deep: true },
        description: {
            long: "You are in the Soft Room. The walls are covered with heavy curtains, the floor with a thick pile carpet. Moss covers the ceiling.",
            short: "You're in Soft Room.",
        },
        actions: [
            { type: "goTo", ref: "locSwisscheese", verbs: ["west", "out"] },
        ],
    },
    {
        id: "locSouthside",
        conditions: { deep: true },
        description: {
            long: "You are in the south side chamber.",
            short: null,
        },
        actions: [
            {
                type: "goTo",
                ref: "locKinghall",
                verbs: ["hall", "out", "north"],
            },
        ],
    },
    {
        id: "locStart",
        conditions: { fluid: true, above: true, lit: true },
        description: {
            long: "You are standing at the end of a road before a small brick building. Around you is a forest. A small stream flows out of the building and down a gully.",
            short: "You're in front of building.",
        },
        sound: "streamGurgles",
        actions: [
            { type: "goTo", ref: "locHill", verbs: ["road", "west", "upwar"] },
            { type: "goTo", ref: "locBuilding", verbs: ["enter", "build", "insid", "east"] },
            { type: "goTo", ref: "locValley", verbs: ["downs", "gully", "strea", "south", "down"] },
            { type: "goTo", ref: "locForest1", verbs: ["fores", "north"] },
            { type: "goTo", ref: "locGrate", verbs: ["depre"] },
        ],
    },
    {
        id: "locSteep",
        conditions: { deep: true },
        description: {
            long: "You are on a very steep incline, which widens at it goes upward.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locTreacherous", verbs: ["down", "se"] },
            { type: "goTo", ref: "locCliffbase", verbs: ["upwar", "nw"] },
        ],
    },
    {
        id: "locStoreroom",
        conditions: { deep: true },
        description: {
            long: "You are in the ogre's storeroom. The only exit is to the south.",
            short: null,
        },
        actions: [{ type: "goTo", ref: "locLarge", verbs: ["south", "out"] }],
    },
    {
        id: "locSw",
        conditions: { deep: true, lit: true },
        description: {
            long: 'You are at the southwest end of the repository. To one side is a pit full of fierce green snakes. On the other side is a row of small wicker cages, each of which contains a little sulking bird. In one corner is a bundle of black rods with rusty marks on their ends. A large number of velvet pillows are scattered about on the floor. A vast mirror stretches off to the northeast. At your feet is a large steel grate, next to which is a sign that reads, "Treasure Vault. Keys in main office."',
            short: "You're at sw end.",
        },
        sound: "snakesHissing",
        actions: [
            { type: "goTo", ref: "locNe", verbs: ["ne"] },
            { type: "speak", ref: "grateNoway", verbs: ["down"] },
        ],
    },
    {
        id: "locSwchasm",
        conditions: { deep: true },
        description: {
            long: "You are on one side of a large, deep chasm. A heavy white mist rising up from below obscures all view of the far side. A sw path leads away from the chasm into a winding corridor.",
            short: "You're on sw side of chasm.",
        },
        actions: [
            { type: "goTo", ref: "locWinding", verbs: ["sw"] },
            // { verbs: ['over, 'acros', 'cross, 'ne'],
            // condition: [with, troll], action: { type: 'speak', description: 'trollBlocks' } },
            {
                type: "speak",
                ref: "bridgeGone",
                verbs: ["over"],
                condition: { type: "object", object: "chasm", state: "bridgeWrecked" },
                conditionFailed: { type: "special", description: 3 },
            },
            {
                verbs: ["jump"],
                type: "goTo",
                ref: "locNomake",
                condition: { type: "object", object: "chasm", state: "bridgeWrecked" },
                conditionFailed: { type: "speak", ref: "crossBridge" },
            },
        ],
    },
    {
        id: "locSwisscheese",
        conditions: { deep: true },
        description: {
            long: "You are in a room whose walls resemble Swiss cheese. Obvious passages go west, east, ne, and nw. Part of the room is occupied by a large bedrock block.",
            short: "You're in Swiss Cheese Room.",
        },
        actions: [
            { type: "goTo", ref: "locBedquilt", verbs: ["ne"] },
            { type: "goTo", ref: "locEastend", verbs: ["west"] },
            {
                verbs: ["south"],
                type: "speak",
                ref: "futileCrawl",
                // condition: [pct, 80],
            },
            { type: "goTo", ref: "locTall", verbs: ["canyo"] },
            { type: "goTo", ref: "locSoftroom", verbs: ["east"] },
            {
                verbs: ["nw"],
                type: "speak",
                ref: "futileCrawl",
                // condition: [pct, 50],
            },
            { type: "goTo", ref: "locOriental", verbs: ["oriental"] },
        ],
    },
    {
        id: "locTall",
        conditions: { deep: true },
        description: {
            long: "You are in a tall e/w canyon. A low tight crawl goes 3 feet north and seems to open up.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locWideplace", verbs: ["east"] },
            { type: "goTo", ref: "locBoulders1", verbs: ["west"] },
            { type: "goTo", ref: "locSwisscheese", verbs: ["north", "crawl"] },
        ],
    },
    {
        id: "locThreejunction",
        conditions: { deep: true },
        description: {
            long: "You are in a secret canyon at a junction of three canyons, bearing north, south, and se. The north one is as tall as the other two combined.",
            short: "You're at junction of three secret canyons.",
        },
        actions: [
            { type: "goTo", ref: "locBedquilt", verbs: ["se"] },
            { type: "goTo", ref: "locSecret2", verbs: ["south"] },
            { type: "goTo", ref: "locWindow2", verbs: ["north"] },
        ],
    },
    {
        id: "locTightplace",
        conditions: { deep: true },
        description: {
            long: "The canyon here becomes too tight to go further south.",
            short: null,
        },
        actions: [{ type: "goTo", ref: "locWideplace", verbs: ["north"] }],
    },
    {
        id: "locTopstalactite",
        conditions: { deep: true },
        description: {
            long: "A large stalactite extends from the roof and almost reaches the floor below. You could climb down it, and jump from it to the floor, but having done so you would be unable to reach it to climb back up.",
            short: "You're at top of stalactite.",
        },
        actions: [
            { type: "goTo", ref: "locSecret2", verbs: ["north"] },
            // { verbs: ['down', 'jump', 'climb'],
            // condition: [pct, 40], action: { type: 'goTo', description: 'locAlike6' } },
            // { verbs: ['down'], condition: [pct, 50],
            // action: { type: 'goTo', description: 'locAlike9' } },
            { type: "goTo", ref: "locAlike4", verbs: ["down"] },
        ],
    },
    {
        id: "locTreacherous",
        conditions: { deep: true },
        description: {
            long: "You are scrambling along a treacherously steep, rocky passage.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locSteep", verbs: ["upwar", "nw"] },
            { type: "goTo", ref: "locResnorth", verbs: ["down", "se"] },
        ],
    },
    {
        id: "locValley",
        conditions: { fluid: true, above: true, lit: true },
        description: {
            long: "You are in a valley in the forest beside a stream tumbling along a rocky bed.",
            short: "You're in valley.",
        },
        sound: "streamGurgles",
        actions: [
            { type: "goTo", ref: "locStart", verbs: ["upstr", "build", "north"] },
            { type: "goTo", ref: "locForest6", verbs: ["east", "fores"] },
            { type: "goTo", ref: "locForest12", verbs: ["west"] },
            { type: "goTo", ref: "locSlit", verbs: ["downs", "south", "down"] },
            { type: "goTo", ref: "locGrate", verbs: ["depre"] },
            { type: "speak", ref: "upstreamDownstream", verbs: ["strea"] },
        ],
    },
    {
        id: "locWarmwalls",
        conditions: { noarr: true, deep: true },
        description: {
            long: "The walls are quite warm here. From the north can be heard a steady roar, so loud that the entire cave seems to be trembling. Another passage leads south, and a low crawl goes east.",
            short: "You're at junction with warm walls.",
        },
        sound: "loudRoar",
        actions: [
            { type: "goTo", ref: "locFork", verbs: ["south", "fork"] },
            { type: "goTo", ref: "locBreathtaking", verbs: ["north", "view"] },
            { type: "goTo", ref: "locBoulders2", verbs: ["east", "crawl"] },
        ],
    },
    {
        id: "locWaterfall",
        conditions: { fluid: true, deep: true },
        description: {
            long: "You are in a magnificent cavern with a rushing stream, which cascades over a sparkling waterfall into a roaring whirlpool which disappears through a hole in the floor. Passages exit to the south and west.",
            short: "You're in cavern with waterfall.",
        },
        sound: "streamSplashes",
        actions: [
            { type: "goTo", ref: "locImmense", verbs: ["south", "out"] },
            { type: "goTo", ref: "locGiantroom", verbs: ["giant"] },
            { type: "goTo", ref: "locIncline", verbs: ["west"] },
        ],
    },
    {
        id: "locWestbank",
        conditions: { deep: true },
        description: {
            long: "You are on the west side of the fissure in the Hall of Mists.",
            short: "You're on west bank of fissure.",
        },
        actions: [
            { type: "goTo", ref: "locMisthall", verbs: ["stair", "upwar"] },
            { type: "goTo", ref: "locParallel1", verbs: ["north"] },
            { type: "speak", ref: "crossBridge", verbs: ["jump"] },
            { type: "speak", ref: "noCross", verbs: ["acros", "cross"] },
            {
                verbs: ["forwa"],
                type: "goTo",
                ref: "locMistwest",
                condition: { type: "object", object: "fissure", state: "bridged" },
                conditionFailed: { type: "goTo", ref: "locNomake" },
            },
            {
                verbs: ["over", "east"],
                type: "goTo",
                ref: "locEastbank",
                condition: { type: "object", object: "fissure", state: "bridged" },
                conditionFailed: { type: "speak", ref: "noCross" },
            },
            {
                verbs: ["west"],
                type: "goTo",
                ref: "locMistwest",
                condition: { type: "object", object: "fissure", state: "bridged" },
                conditionFailed: { type: "speak", ref: "noCross" },
            },
        ],
    },
    {
        id: "locWestend",
        conditions: { deep: true },
        description: {
            long: "You are at the west end of the Twopit Room. There is a large hole in the wall above the pit at this end of the room.",
            short: "You're at west end of Twopit Room.",
        },
        actions: [
            { type: "goTo", ref: "locEastend", verbs: ["east", "acros"] },
            { type: "goTo", ref: "locSlab", verbs: ["west", "slab"] },
            { type: "goTo", ref: "locWestpit", verbs: ["down", "pit"] },
            { verbs: ["hole"], type: "speak", ref: "tooFar" },
        ],
    },
    {
        id: "locWestpit",
        conditions: { deep: true },
        description: {
            long: "You are at the bottom of the western pit in the Twopit Room. There is a large hole in the wall about 25 feet above you.",
            short: "You're in west pit.",
        },
        actions: [
            { type: "goTo", ref: "locWestend", verbs: ["upwar", "out"] },
            {
                verbs: ["climb"],
                type: "goTo",
                ref: "locBuilding1",
                condition: {
                    type: "object",
                    object: "plant",
                    // state: 'plantThirsty',
                    // state: 'plantGrown',
                },
                conditionFailed: {
                    type: "goTo",
                    ref: "locClimbstalk",
                },
            },
        ],
    },
    {
        id: "locWestside",
        conditions: { deep: true },
        description: {
            long: "You are in the west side chamber of the Hall of the Mountain King. \nA passage continues west and up here.",
            short: "You're in the west side chamber.",
        },
        actions: [
            {
                type: "goTo",
                ref: "locKinghall",
                verbs: ["hall", "out", "east"],
            },
            { type: "goTo", ref: "locCrossover", verbs: ["west", "upwar"] },
        ],
    },
    {
        id: "locWideplace",
        conditions: { deep: true },
        description: {
            long: "You are at a wide place in a very tight n/s canyon.",
            short: null,
        },
        actions: [
            { type: "goTo", ref: "locTightplace", verbs: ["south"] },
            { type: "goTo", ref: "locTall", verbs: ["north"] },
        ],
    },
    {
        id: "locWinding",
        conditions: { deep: true },
        description: {
            long: "You are in a long winding corridor sloping out of sight in both directions.",
            short: "You're in sloping corridor.",
        },
        actions: [
            { type: "goTo", ref: "locLowroom", verbs: ["down"] },
            { type: "goTo", ref: "locSwchasm", verbs: ["upwar"] },
        ],
    },
    {
        id: "locWindow1",
        conditions: { deep: true },
        description: {
            long: "You're at a low window overlooking a huge pit, which extends up out of sight. A floor is indistinctly visible over 50 feet below. Traces of white mist cover the floor of the pit, becoming thicker to the right. \nMarks in the dust around the window would seem to indicate that someone has been here recently. Directly across the pit from you and 25 feet away there is a similar window looking into a lighted room. A shadowy figure can be seen there peering back at you.",
            short: "You're at window on pit.",
        },
        actions: [
            { type: "goTo", ref: "locY2", verbs: ["east", "y2"] },
            { type: "goTo", ref: "locNeckbroke", verbs: ["jump"] },
        ],
    },
    {
        id: "locWindow2",
        conditions: { deep: true },
        description: {
            long: "You're at a low window overlooking a huge pit, which extends up out of sight. A floor is indistinctly visible over 50 feet below. Traces of white mist cover the floor of the pit, becoming thicker to the left. \nMarks in the dust around the window would seem to indicate that someone has been here recently. Directly across the pit from you and 25 feet away there is a similar window looking into a lighted room. A shadowy figure can be seen there peering back at you.",
            short: "You're at window on pit.",
        },
        actions: [
            { type: "goTo", ref: "locThreejunction", verbs: ["west"] },
            { type: "goTo", ref: "locNeckbroke", verbs: ["jump"] },
        ],
    },
    {
        id: "locWittsend",
        conditions: { deep: true, noback: true },
        description: {
            long: "You are at Witt's End. Passages lead off in *all* directions.",
            short: "You're at Witt's End.",
        },
        hints: ["witt"],
        actions: [
            {
                type: "speak",
                ref: "futileCrawl",
                // conditions: [pct, 95],
                verbs: [
                    "east",
                    "north",
                    "south",
                    "ne",
                    "se",
                    "sw",
                    "nw",
                    "upwar",
                    "down",
                ],
            },
            { type: "goTo", ref: "locAnteroom", verbs: ["east"] },
            { type: "speak", ref: "wayBlocked", verbs: ["west"] },
        ],
    },
    {
        id: "locY2",
        conditions: { deep: true },
        description: {
            long: 'You are in a large room, with a passage to the south, a passage to the west, and a wall of broken rock to the east. There is a large "y2" on a rock in the room\'s center.',
            short: 'You\'re at "y2".',
        },
        actions: [
            { type: "goTo", ref: "locFoof4", verbs: ["plugh"] },
            { type: "goTo", ref: "locFloorhole", verbs: ["south"] },
            { type: "goTo", ref: "locJumble", verbs: ["east", "wall", "broke"] },
            { type: "goTo", ref: "locWindow1", verbs: ["west"] },
            {
                verbs: ["plove"],
                type: "special",
                description: 2,
                condition: { type: "carry", object: "emerald" },
                conditionFailed: { type: "goTo", ref: "locFoof5" },
            },
        ],
    },
]
