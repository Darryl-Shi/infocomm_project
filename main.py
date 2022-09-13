def on_button_pressed_a():
    if hungry == True:
        happy = True
        hungry = False
        sleepy = False
        unhappy_timer = 100
        basic.show_leds("""
            . . . . .
                        . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
        """)
    else:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if sleepy2 == True:
        happy2 = True
        hungry2 = False
        sleepy2 = False
        unhappy_timer2 = 100
        basic.show_leds("""
            . . . . .
                        . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
        """)
    else:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)

dead = False
sleepy3 = False
hungry3 = False
mood_chance = 0
eye_movement_state = 0
eye_movement_chance = 0
happy3 = True
unhappy_timer3 = 100

def on_forever():
    global eye_movement_chance, eye_movement_state, mood_chance, happy3, hungry3, sleepy3, dead
    eye_movement_chance = randint(0, 100)
    if eye_movement_chance <= 10:
        eye_movement_state = 2
    elif eye_movement_chance > 10 and eye_movement_chance <= 20:
        eye_movement_state = 1
    else:
        eye_movement_state = 0
    if happy3 == True:
        mood_chance = randint(0, 5000)
    if mood_chance <= 1:
        happy3 = False
        hungry3 = True
        sleepy3 = False
    elif mood_chance > 1 and mood_chance <= 3:
        happy3 = False
        hungry3 = False
        sleepy3 = True
    else:
        happy3 = True
        hungry3 = False
        sleepy3 = False
    if (hungry3 == True or sleepy3 == True) and unhappy_timer22 == 0:
        dead = True
    if hungry3 == True or sleepy3 == True:
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        . # # # .
                        # . . . #
        """)
        unhappy_timer22 = unhappy_timer22 - 1
    if dead == True:
        basic.show_leds("""
            . . . . .
                        # # . # #
                        . . . . .
                        . . . . .
                        # # # # #
        """)
        pause(8000)
    if happy3 == True:
        if eye_movement_state == 0:
            basic.show_leds("""
                . . . . .
                                . # . # .
                                . . . . .
                                # . . . #
                                . # # # .
            """)
        elif eye_movement_state == 1:
            basic.show_leds("""
                . . . . .
                                # . # . .
                                . . . . .
                                # . . . #
                                . # # # .
            """)
        else:
            basic.show_leds("""
                . . . . .
                                . . # . #
                                . . . . .
                                # . . . #
                                . # # # .
            """)
    pause(2000)
basic.forever(on_forever)
