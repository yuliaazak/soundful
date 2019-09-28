input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showAnimation(light.sparkleAnimation, 500)
    light.showRing(
    `black black black black black black black black black black`
    )
    control.waitMicros(10)
    control.reset()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    light.showRing(
    `yellow white yellow white yellow white yellow white yellow white`
    )
    if (input.soundLevel() > 110) {
        light.showRing(
        `yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow`
        )
        A4 = light.createStrip(pins.A4, 3)
        A5 = light.createStrip(pins.A5, 3)
        A6 = light.createStrip(pins.A6, 3)
        light.setAll(light.hsv(150, 150, 150))
        A4.setPixelColor(1, 0xffff00)
        A5.setPixelColor(1, 0xffff00)
        A6.setPixelColor(1, 0xffff00)
    }
    if (input.soundLevel() > 150) {
        light.showRing(
        `yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow`
        )
        A4 = light.createStrip(pins.A4, 3)
        A5 = light.createStrip(pins.A5, 3)
        A6 = light.createStrip(pins.A6, 3)
        light.setAll(light.hsv(255, 255, 255))
        A4.setPixelColor(1, 0xffff00)
        A5.setPixelColor(1, 0xffff00)
        A6.setPixelColor(1, 0xffff00)
    }
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    light.showRing(
    `orange white orange white orange white orange white orange white`
    )
    if (input.soundLevel() > 110) {
        light.showRing(
        `orange orange orange orange orange orange orange orange orange orange`
        )
        A4 = light.createStrip(pins.A4, 3)
        A5 = light.createStrip(pins.A5, 3)
        A6 = light.createStrip(pins.A6, 3)
        light.setAll(light.hsv(150, 150, 150))
        A4.setPixelColor(2, 0xff8000)
        A5.setPixelColor(2, 0xff8000)
        A6.setPixelColor(2, 0xff8000)
    }
    if (input.soundLevel() > 150) {
        light.showRing(
        `orange orange orange orange orange orange orange orange orange orange`
        )
        A4 = light.createStrip(pins.A4, 3)
        A5 = light.createStrip(pins.A5, 3)
        A6 = light.createStrip(pins.A6, 3)
        light.setAll(light.hsv(255, 255, 255))
        A4.setPixelColor(2, 0xff8000)
        A5.setPixelColor(2, 0xff8000)
        A6.setPixelColor(2, 0xff8000)
    }
})
input.buttonA.onEvent(ButtonEvent.LongClick, function () {
    light.showAnimationFrame(light.rainbowAnimation)
    A4 = light.createStrip(pins.A4, 3)
    A5 = light.createStrip(pins.A5, 3)
    A6 = light.createStrip(pins.A6, 3)
    control.waitMicros(4)
    A4.setPixelColor(0, 0x00ff00)
    A5.setPixelColor(0, 0x00ff00)
    A6.setPixelColor(0, 0x00ff00)
    control.waitMicros(5)
    A4.setPixelColor(1, 0xffff00)
    A5.setPixelColor(1, 0xffff00)
    A6.setPixelColor(1, 0xffff00)
    control.waitMicros(6)
    A4.setPixelColor(2, 0xff8000)
    A5.setPixelColor(2, 0xff8000)
    A6.setPixelColor(2, 0xff8000)
})
let input2 = ""
let A6: light.NeoPixelStrip = null
let A5: light.NeoPixelStrip = null
let A4: light.NeoPixelStrip = null
light.showRing(
`white white white white white white white white white white`
)
A4 = light.createStrip(pins.A4, 3)
A5 = light.createStrip(pins.A5, 3)
A6 = light.createStrip(pins.A6, 3)
A4.setAll(0xffffff)
A5.setAll(0xffffff)
A6.setAll(0xffffff)
if (input.acceleration(Dimension.X) > 5000) {
    light.showAnimation(light.runningLightsAnimation, 2000)
}
forever(function () {
    input2 = serial.readString()
    if (!(input2.isEmpty())) {
        light.showRing(
        `white green white green white green white green white green`
        )
        if (input.soundLevel() > 110) {
            light.showRing(
            `green green green green green green green green green green`
            )
            A4 = light.createStrip(pins.A4, 3)
            A5 = light.createStrip(pins.A4, 3)
            A6 = light.createStrip(pins.A6, 3)
            light.setAll(light.hsv(150, 150, 150))
            A4.setPixelColor(0, 0x00ff00)
            A5.setPixelColor(0, 0x00ff00)
            A6.setPixelColor(0, 0x00ff00)
        }
        if (input.soundLevel() > 150) {
            light.showRing(
            `green green green green green green green green green green`
            )
            A6 = light.createStrip(pins.A6, 3)
            A5 = light.createStrip(pins.A4, 3)
            A4 = light.createStrip(pins.A4, 3)
            light.setAll(light.hsv(255, 255, 255))
            A4.setPixelColor(0, 0x00ff00)
            A5.setPixelColor(0, 0x00ff00)
            A6.setPixelColor(0, 0x00ff00)
        }
    }
    control.waitMicros(1000)
    light.showRing(
    `black black black black black red black black black black`
    )
})
