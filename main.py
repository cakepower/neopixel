strip = neopixel.create(DigitalPin.P11, 24, NeoPixelMode.RGB)
strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.YELLOW))
strip.show()
huskylens.init_i2c()
huskylens.init_mode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)

def on_forever():
    huskylens.request()
    if huskylens.is_appear(1, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        strip.show_rainbow(1, 360)
        strip.show()
        basic.pause(100)
        index = 0
        while index < 24:
            strip.set_pixel_color(index, neopixel.colors(NeoPixelColors.BLACK))
            strip.rotate(1)
            strip.show()
            basic.pause(100)
            index += 1
    elif huskylens.is_appear(2, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        strip.show_rainbow(1, 360)
        strip.show()
        basic.pause(100)
        index1 = 0
        while index1 < 24:
            strip.set_pixel_color(24-index1, neopixel.colors(NeoPixelColors.BLACK))
            strip.rotate(1)
            strip.show()
            basic.pause(100)
            index1 += 1
    else:
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
basic.forever(on_forever)
