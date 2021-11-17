let strip = neopixel.create(DigitalPin.P13, 24, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    serial.writeNumber(input.lightLevel())
    serial.writeLine("")
    if (input.lightLevel() > 220) {
        strip.rotate(1)
        basic.pause(500)
        strip.show()
    } else if (input.lightLevel() > 210) {
        strip.showRainbow(1, 360)
        strip.show()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    }
})
