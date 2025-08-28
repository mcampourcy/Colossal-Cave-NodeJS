import { messages } from "./messages.js"

export const actions = [
    {
        id: "actUnknown",
        message: messages.huhMan,
        wordList: [],
    },
    {
        id: "actVersion",
        message:
      'There is a puff of orange smoke; within it, fiery runes spell out: "Open Adventure %V http://www.catb.org/esr/open-adventure/"',
        noaction: true,
        wordList: ["versi", "versio"],
    },
    {
        id: "attack",
        message: messages.ridiculousAttempt,
        wordList: ["attac", "kill", "fight", "hit", "strik", "slay"],
    },
    {
        id: "blast",
        message: messages.requiresDynamite,
        wordList: ["blast", "deton", "ignit", "blowu"],
    },
    {
        id: "break",
        message: messages.beyondPower,
        wordList: ["break", "shatt", "smash"],
    },
    {
        id: "brief",
        message: "On what?",
        wordList: ["brief"],
    },
    {
        id: "carry",
        message: messages.alreadyCarrying,
        wordList: [
            "g",
            "carry",
            "take",
            "keep",
            "catch",
            "steal",
            "captu",
            "get",
            "tote",
            "snarf",
            "cage",
        ],
    },
    {
        id: "dig",
        message:
      "Digging without a shovel is quite impractical. Even with a shovel progress is unlikely.",
        noaction: true,
        wordList: ["dig", "excav"],
    },
    {
        id: "drink",
        message:
      "You have taken a drink from the stream. The water tastes strongly of minerals, but is not unpleasant. It is extremely cold.",
        wordList: ["drink"],
    },
    {
    // id: 'drop',
        id: "discard",
        message: messages.arentCarrying,
        wordList: ["drop", "relea", "free", "disca", "dump"],
    },
    {
        id: "eat",
        message: messages.ridiculousAttempt,
        wordList: ["eat", "devou"],
    },
    {
        id: "extinguish",
        message: messages.dontUnderstand,
        wordList: ["extin", "off"],
    },
    {
        id: "fbomb",
        message: "Watch it!",
        noaction: true,
        wordList: ["fuck"],
    },
    {
        id: "fee",
        message: messages.notKnowhow,
        wordList: ["fee"],
    },
    {
        id: "feed",
        message: "There is nothing here to eat.",
        wordList: ["feed"],
    },
    {
        id: "fie",
        message: messages.notKnowhow,
        wordList: ["fie"],
    },
    {
        id: "fill",
        message: "You can't fill that.",
        wordList: ["fill"],
    },
    {
        id: "find",
        message: messages.nearby,
        wordList: ["find", "where"],
    },
    {
        id: "fly",
        message: messages.amGame,
        wordList: ["fly"],
    },
    {
        id: "foe",
        message: messages.notKnowhow,
        wordList: ["foe"],
    },
    {
        id: "foo",
        message: messages.notKnowhow,
        wordList: ["foo"],
    },
    {
        id: "fum",
        message: messages.notKnowhow,
        wordList: ["fum"],
    },
    {
        id: "go",
        message: messages.whereQuery,
        wordList: [
            "walk",
            "run",
            "trave",
            "go",
            "proce",
            "conti",
            "explo",
            "follo",
            "turn",
        ],
    },
    {
        id: "help",
        message:
      'I know of places, actions, and things. Most of my vocabulary describes places and is used to move you there. To move, try words like forest, building, downstream, enter, east, west, north, south, up, or down. I know about a few special objects, like a black rod hidden in the cave. These objects can be manipulated using some of the action wordList that I know. Usually you will need to give both the object and action wordList (in either order), but sometimes I can infer the object from the verb alone. Some objects also imply wordList; in particular, "inventory" implies "take inventory", which causes me to give you a list of what you\'re carrying. Some objects have unexpected effects; the effects are not always desirable! Usually people having trouble moving just need to try a few more wordList. Usually people trying unsuccessfully to manipulate an object are attempting something beyond their (or my!) capabilities and should try a completely different tack. One point often confusing to beginners is that, when there are several ways to go in a certain direction (e.g., if there are several holes in a wall), choosing that direction in effect chooses one of the ways at random; often, though, by specifying the place you want to reach you can guarantee choosing the right path. Also, to speed the game you can sometimes move long distances with a single word. For example, "building" usually gets you to the building from anywhere above ground except when lost in the forest. Also, note that cave passages and forest paths turn a lot, so leaving one place heading north doesn\'t guarantee entering the next from the south. However (another important point), except when you\'ve used a "long distance" word such as "building", there is always a way to go back where you just came from unless I warn you to the contrary, even though the direction that takes you back might not be the reverse of what got you here. Good luck, and have fun!',
        noaction: true,
        wordList: ["help", "?"],
    },
    {
        id: "info",
        message:
      'For a summary of the most recent changes to the game, say "news". If you want to end your adventure early, say "quit". To suspend your adventure such that you can continue later, say "suspend" (or "pause" or "save"). To see how well you\'re doing, say "score". To get full credit for a treasure, you must have left it safely in the building, though you get partial credit just for locating it. You lose points for getting killed, or for quitting, though the former costs you more. There are also points based on how much (if any) of the cave you\'ve managed to explore; in particular, there is a large bonus just for getting in (to distinguish the beginners from the rest of the pack), and there are other ways to determine whether you\'ve been through some of the more harrowing sections. If you think you\'ve found all the treasures, just keep exploring for a while. If nothing interesting happens, you haven\'t found them all yet. If something interesting *DOES* happen (incidentally, there *ARE* ways to hasten things along), it means you\'re getting a bonus and have an opportunity to garner many more points in the Master\'s section. I may occasionally offer hints if you seem to be having trouble. If I do, I\'ll warn you in advance how much it will affect your score to accept the hints. Finally, to save time, you may specify "brief", which tells me never to repeat the full description of a place unless you explicitly ask me to.',
        noaction: true,
        wordList: ["info", "infor"],
    },
    {
        id: "invalidmagic",
        message: "Good try, but that is an old worn-out magic word.",
        noaction: true,
        wordList: ["sesam", "opens", "abra", "abrac", "shaza", "hocus", "pocus"],
    },
    {
        id: "inventory",
        message: messages.nearby,
        wordList: ["i", "inven", "inventory"],
        oldstyle: false,
    },
    {
        id: "light",
        message: messages.dontUnderstand,
        wordList: ["light", "on"],
    },
    {
        id: "listen",
        message: messages.dontUnderstand,
        wordList: ["liste"],
    },
    {
        id: "lock",
        message: messages.notLockable,
        wordList: ["lock", "close"],
    },
    {
        id: "look",
        wordList: ["l", "x", "look", "exami", "touch", "descr"],
    },
    {
        id: "lost",
        message: "I'm as confused as you are.",
        noaction: true,
        wordList: ["lost"],
    },
    {
        id: "mist",
        message:
      "Mist is a white vapor, usually water, seen from time to time in caverns. It can be found anywhere but is frequently a sign of a deep pit leading down to water.",
        noaction: true,
        wordList: ["mist"],
    },
    {
        id: "news",
        message:
      "Open Adventure is an author-approved open-source release of Version 2.5 with, as yet, no gameplay changes. Version 2.5 was essentially the same as Version II; the cave and the hazards therein are unchanged, and top score is still 430 points. There are a few more hints, especially for some of the more obscure puzzles. There are a few minor bugfixes and cosmetic changes. You can now save a game and resume it at once (formerly you had to wait a while first), but it now costs you a few points each time you save the game. Saved games are now stored in much smaller files than before.",
        noaction: true,
        wordList: ["news"],
    },
    {
        id: "no",
        message: messages.okMan,
        noaction: true,
        wordList: ["no"],
    },
    {
        id: "nothing",
        wordList: ["z", "nothi"],
        oldstyle: false,
    },
    {
        id: "part",
        message: messages.nothingHappens,
        wordList: ["z'zzz"],
    },
    {
        id: "pour",
        message: messages.arentCarrying,
        wordList: ["pour"],
    },
    {
        id: "quit",
        message: messages.huhMan,
        wordList: ["quit"],
    },
    {
        id: "read",
        message: messages.dontUnderstand,
        wordList: ["read", "perus"],
    },
    {
        id: "resume",
        message: messages.huhMan,
        wordList: ["resum", "resta"],
    },
    {
        id: "rub",
        message:
      "Rubbing the electric lamp is not particularly rewarding. Anyway, nothing exciting happens.",
        wordList: ["rub"],
    },
    {
        id: "save",
        message: messages.huhMan,
        wordList: ["suspe", "pause", "save"],
    },
    {
        id: "say",
        wordList: ["say", "chant", "sing", "utter", "mumbl"],
    },
    {
        id: "score",
        message: messages.huhMan,
        wordList: ["score"],
    },
    {
        id: "seed",
        message: "Seed set to %d",
        wordList: ["seed"],
    },
    {
        id: "stop",
        message:
      'I don\'t know the word "stop". Use "quit" if you want to give up.',
        noaction: true,
        wordList: ["stop"],
    },
    {
        id: "swim",
        message: messages.notKnowhow,
        noaction: true,
        wordList: ["swim"],
    },
    {
        id: "tame",
        message: messages.amGame,
        wordList: ["calm", "placa", "tame"],
    },
    {
        id: "thankyou",
        message: "You're quite welcome.",
        noaction: true,
        wordList: ["thank"],
    },
    {
        id: "throw",
        message: messages.arentCarrying,
        wordList: ["throw", "toss"],
    },
    {
        id: "tree",
        message:
      "The trees of the forest are large hardwood oak and maple, with an occasional grove of pine or spruce. There is quite a bit of under-wth, largely birch and ash saplings plus nondescript bushes ofious sorts. This time of year visibility is quite restricted by the leaves, but travels is quite easy if you detour around theuce and berry bushes.",
        noaction: true,
        wordList: ["tree", "trees"],
    },
    {
        id: "unlock",
        message: messages.notLockable,
        wordList: ["unloc", "open"],
    },
    {
        id: "wake",
        message: messages.ridiculousAttempt,
        wordList: ["wake", "distu"],
    },
    {
        id: "waste",
        message: "Game limit is now %d",
        wordList: ["waste"],
    },
    {
        id: "wave",
        message: messages.nothingHappens,
        wordList: ["wave", "shake", "swing"],
    },
    {
        id: "wizard",
        message: "Wizards are not to be disturbed by such as you.",
        noaction: true,
        wordList: ["wizar"],
    },
    {
        id: "yes",
        message: "Guess again.",
        noaction: true,
        wordList: ["yes"],
    },
]
