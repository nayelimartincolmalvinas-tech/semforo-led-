// Tira NeoPixel de 360 LEDs en el pin P0
// Extensión necesaria en MakeCode: "neopixel"
let strip = neopixel.create(DigitalPin.P0, 360, NeoPixelMode.RGB)
strip.setBrightness(40)

// Al encender: arcoíris en toda la tira
strip.showRainbow(1, 360)
strip.show()

// A+B: tira VERDE y carita feliz
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.show()
})

// A: tira ROJA y carita triste
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
})

// B: tira AMARILLA y carita neutra :I
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
})