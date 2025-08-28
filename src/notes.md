# Game Documentation

## Main Loop (ProcessGameTurn)

### Welcome Screen
- Display title
- Ask for instructions
    - "no" → `settings.novice = false` // TODO: IMPACT
    - "yes" → display instructions (`caveNearby`)
    - other → error (`pleaseAnswer`)
- Display starting description

### Location Description Display
- **Default**: long description
- **Objects** if there are any
    - add the description of the object's current state
- **No display** if action doesn't change location (`listen`, `look`, `inventory`)
- **Unauthorized direction**:
    - Error message based on direction
    - `settings.noDescription = true`

### Movement Conditions
- Some movements require conditions
- If not met → display `conditionsFailed` actions

### Movement History
When changing location:
- `previousLocation = currentLocation`
- `currentLocation = newLocation`

---

### Managing user input with two words

Conditions:

- If a single word:
    - search in directions
    - search in actions
    - search in objects
    - return all three, whether OK or not

- If two words:
  for the first:
    - search in directions
        - if ok, ignore the second
    - search in actions
        - if ok, handle the second
        - if move, second must be a direction, else CantApply error
    - search in objects
        - if ok, handle the second
          if none OK, error
          for the second:
    - if first is a move action or direction, search in directions
    - if first is not an action, search in actions, else keep only first
    - if first is a move action or direction, search in objects

## Actions

### Drink
1. No object → assume water and look for it here
2. Water in bottle → drink that
3. Otherwise → drink stream (location with `fluid`)
    - If `oily` → not allowed
4. `settings.noDescription = true`

### Inventory
- Empty → `noCarry`
- Otherwise → `nowHolding` + list with states
- `settings.noDescription = true`

### Listen
- **Location with `sound`** → display it
- **Objects with `sound`** in inventory → display them
- **Exception**: if location sound = `loud` → hide object sounds
- **Specific sound** without objects → fetch from predefined list
- **No sound** → default "silent" message
- `settings.noDescription = true`

### Look
- **Location with `look`** → display it
- **Objects with `look`** in inventory → display them
- **No objects** → display location's `look`
- **No `look`** → default message

---

## Directions

### Back
- Go back to previous location
- Update positions
- **Errors**:
    - Previous location = current location → `forgotPath` + `noDescription`
    - `noback` enabled → `twistTurn` + short description

### Type Speak
- Display associated message
- No movement
- `settings.noDescription = true`
