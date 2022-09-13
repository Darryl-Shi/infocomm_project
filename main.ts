input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let happy: boolean;
    let hungry: boolean;
    let sleepy: boolean;
    let unhappy_timer: number;
    if (hungry == true) {
        happy = true
        hungry = false
        sleepy = false
        unhappy_timer = 100
        basic.showLeds(`
            . . . . .
                        . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
        `)
    } else {
        basic.showLeds(`
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        `)
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    let happy2: boolean;
    let hungry2: boolean;
    let sleepy2: boolean;
    let unhappy_timer2: number;
    if (sleepy2 == true) {
        happy2 = true
        hungry2 = false
        sleepy2 = false
        unhappy_timer2 = 100
        basic.showLeds(`
            . . . . .
                        . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
        `)
    } else {
        basic.showLeds(`
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        `)
    }
    
})
let dead = false
let sleepy3 = false
let hungry3 = false
let mood_chance = 0
let eye_movement_state = 0
let eye_movement_chance = 0
let happy3 = true
let unhappy_timer3 = 100
basic.forever(function on_forever() {
    let unhappy_timer22: number;
    
    eye_movement_chance = randint(0, 100)
    if (eye_movement_chance <= 10) {
        eye_movement_state = 2
    } else if (eye_movement_chance > 10 && eye_movement_chance <= 20) {
        eye_movement_state = 1
    } else {
        eye_movement_state = 0
    }
    
    if (happy3 == true) {
        mood_chance = randint(0, 5000)
    }
    
    if (mood_chance <= 1) {
        happy3 = false
        hungry3 = true
        sleepy3 = false
    } else if (mood_chance > 1 && mood_chance <= 3) {
        happy3 = false
        hungry3 = false
        sleepy3 = true
    } else {
        happy3 = true
        hungry3 = false
        sleepy3 = false
    }
    
    if ((hungry3 == true || sleepy3 == true) && unhappy_timer22 == 0) {
        dead = true
    }
    
    if (hungry3 == true || sleepy3 == true) {
        basic.showLeds(`
            . . . . .
                        . # . # .
                        . . . . .
                        . # # # .
                        # . . . #
        `)
        unhappy_timer22 = unhappy_timer22 - 1
    }
    
    if (dead == true) {
        basic.showLeds(`
            . . . . .
                        # # . # #
                        . . . . .
                        . . . . .
                        # # # # #
        `)
        pause(8000)
    }
    
    if (happy3 == true) {
        if (eye_movement_state == 0) {
            basic.showLeds(`
                . . . . .
                                . # . # .
                                . . . . .
                                # . . . #
                                . # # # .
            `)
        } else if (eye_movement_state == 1) {
            basic.showLeds(`
                . . . . .
                                # . # . .
                                . . . . .
                                # . . . #
                                . # # # .
            `)
        } else {
            basic.showLeds(`
                . . . . .
                                . . # . #
                                . . . . .
                                # . . . #
                                . # # # .
            `)
        }
        
    }
    
    pause(2000)
})
