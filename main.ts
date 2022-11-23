let strip = neopixel.create(DigitalPin.P13, 24, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
strip.show()
basic.forever(function () {
    serial.writeNumber(input.lightLevel())
    serial.writeLine("")
    if (input.lightLevel() > 220) {
        strip.rotate(1)
        basic.pause(100)
        strip.show()
    } else if (input.lightLevel() > 210) {
        strip.showRainbow(1, 360)
        strip.show()
        basic.pause(100)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    }
})
