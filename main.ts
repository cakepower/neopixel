let strip = neopixel.create(DigitalPin.P11, 24, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
strip.show()
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)
basic.forever(function () {
    let index: number;
let index1: number;
huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        strip.showRainbow(1, 360)
        strip.show()
        basic.pause(100)
        index = 0
        while (index < 24) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Black))
            strip.rotate(1)
            strip.show()
            basic.pause(100)
            index += 1
        }
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        strip.showRainbow(1, 360)
        strip.show()
        basic.pause(100)
        index1 = 0
        while (index1 < 24) {
            strip.setPixelColor(24 - index1, neopixel.colors(NeoPixelColors.Black))
            strip.rotate(-1)
            strip.show()
            basic.pause(100)
            index1 += 1
        }
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
