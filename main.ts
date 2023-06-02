let strip: neopixel.Strip = null
let strip2: neopixel.Strip = null
function intensiter_en_fonction_du_joystick () {
    if (BitMaker.read_Ain(AnalogPort.P0) > 225 && BitMaker.read_Ain(AnalogPort.P0) > 250) {
        strip.setBrightness(100)
    } else if (BitMaker.read_Ain(AnalogPort.P0) > 250 && BitMaker.read_Ain(AnalogPort.P0) > 320) {
        strip.setBrightness(75)
    } else if (BitMaker.read_Ain(AnalogPort.P0) > 320 && BitMaker.read_Ain(AnalogPort.P0) > 450) {
        strip.setBrightness(50)
    } else {
        strip.setBrightness(0)
    }
}
basic.forever(function () {
    if (BitMaker.read_Ain(AnalogPort.P0) > 225 && BitMaker.read_Ain(AnalogPort.P0) < 430) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        intensiter_en_fonction_du_joystick()
        strip.show()
    } else {
        strip2 = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip2.setBrightness(0)
        strip2.show()
    }
})
