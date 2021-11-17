serial.write_number(0)

def on_forever():
    serial.write_number(input.light_level())
    serial.write_line("")
    basic.pause(100)
basic.forever(on_forever)
