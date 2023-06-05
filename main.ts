function intensiter_en_fonction_du_joystick () {
    if (BitMaker.read_Ain(AnalogPort.P0) > 225 && BitMaker.read_Ain(AnalogPort.P0) <= 300) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(100)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    } else if (BitMaker.read_Ain(AnalogPort.P0) > 300 && BitMaker.read_Ain(AnalogPort.P0) <= 360) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(60)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    } else if (BitMaker.read_Ain(AnalogPort.P0) > 360 && BitMaker.read_Ain(AnalogPort.P0) <= 450) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(30)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    } else {
        strip.setBrightness(0)
    }
}
function intensiter_2_en_fonction_du_joystick2 () {
    if (BitMaker.read_Ain(AnalogPort.P0) > 510 && BitMaker.read_Ain(AnalogPort.P0) <= 550) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(100)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
    } else if (BitMaker.read_Ain(AnalogPort.P0) > 550 && BitMaker.read_Ain(AnalogPort.P0) <= 620) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(60)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
    } else if (BitMaker.read_Ain(AnalogPort.P0) > 620 && BitMaker.read_Ain(AnalogPort.P0) <= 700) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(30)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
    } else {
        strip.setBrightness(0)
    }
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
strip.show()
basic.forever(function () {
    if (BitMaker.read_Ain(AnalogPort.P0) > 225 && BitMaker.read_Ain(AnalogPort.P0) < 450) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
        intensiter_en_fonction_du_joystick()
        strip.show()
    } else {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(0)
        strip.show()
    }
    if (BitMaker.read_Ain(AnalogPort.P0) > 460 && BitMaker.read_Ain(AnalogPort.P0) < 700) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        intensiter_2_en_fonction_du_joystick2()
        strip.show()
    } else {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(0)
        strip.show()
    }
})
