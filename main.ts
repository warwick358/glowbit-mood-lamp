input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
strip.setBrightness(50)
basic.forever(function () {
	
})
