input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showLeds(`
        . # . # .
        # # # # #
        # . . . #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showString("Hola")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
