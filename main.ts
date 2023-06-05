let strip: neopixel.Strip = null
function intensiter_en_fonction_du_joystick () {
    if (BitMaker.read_Ain(AnalogPort.P0) > 240 && BitMaker.read_Ain(AnalogPort.P0) <= 320) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(100)
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    } else if (BitMaker.read_Ain(AnalogPort.P0) > 320 && BitMaker.read_Ain(AnalogPort.P0) <= 400) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(60)
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    } else if (BitMaker.read_Ain(AnalogPort.P0) > 400 && BitMaker.read_Ain(AnalogPort.P0) <= 490) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(30)
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    } else {
        strip.setBrightness(0)
    }
}
function intensiter_2_en_fonction_du_joystick2 () {
    if (BitMaker.read_Ain(AnalogPort.P0) > 515 && BitMaker.read_Ain(AnalogPort.P0) <= 600) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(30)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    } else if (BitMaker.read_Ain(AnalogPort.P0) > 600 && BitMaker.read_Ain(AnalogPort.P0) <= 690) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(60)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    } else if (BitMaker.read_Ain(AnalogPort.P0) > 690 && BitMaker.read_Ain(AnalogPort.P0) <= 780) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(100)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    } else {
        strip.setBrightness(0)
    }
}
basic.forever(function () {
    if (BitMaker.read_Ain(AnalogPort.P0) > 240 && BitMaker.read_Ain(AnalogPort.P0) < 490) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        intensiter_en_fonction_du_joystick()
        strip.show()
    } else {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(0)
        strip.show()
    }
    if (BitMaker.read_Ain(AnalogPort.P0) > 515 && BitMaker.read_Ain(AnalogPort.P0) < 780) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        intensiter_2_en_fonction_du_joystick2()
        strip.show()
    } else {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(0)
        strip.show()
    }
})
