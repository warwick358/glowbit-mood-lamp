# glowbit_mood_lamp
This tutorial makes the the LED lights change to a random color when button A is pressed.

## Step 1 
We need to set up the glowbit to work using the neopixal library.

Go to the "neopixal" tab and get the "set to" block and place it in the "on start" block.
Change the pin to be the one that you have the glowbit data conected to (default id "0")
Set the number of LED's you have (glowbitis 13)
Change the dropdown to "RGB"

```Block
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
basic.forever(function () {
	
})
```

## Step 2 
Turn on the LED's and show a colour.

Go to the "neopixal" tab and get the "show Colour" block and place it under the "set to" block in the "on start" block.
Next go to the "neopixal" tab and the "more" tab and get the "set Brightness" block and place it under the "show Colour" block. Set the value to 50.

```block
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
strip.setBrightness(50)
basic.forever(function () {
	
})
```
## Step 3 
Set the button press to work and let the LED's be random colours.

First open the "input" tab and then place the "on button press" block in the workspace.
Chose a button (default A) to use.
Next go to the "neopixal" tab and get the "strip show colour" block and place it in the "on button press" block.
Then go back to the "neopixal" then "more" tab and get the "red 255 Green 255 blue 255" tab and place it in the colour dropdown box of the "strip show colour" block.
We need to replace each of the "255" numbers in the "red green blue" block with the "pick random 0 to 10" block from the "math" tab.
Change the numbers in the "pick random 0 to 10" block from "0 to 10" to "0 to 255"

```block
input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
strip.setBrightness(50)
basic.forever(function () {
	
})
```

