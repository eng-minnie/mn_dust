// Show Dust Value
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(Dust))
})
let Dust = 0
let DustVal = 0
Dust = 0
// Measure Dust Value
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(280)
    DustVal = pins.analogReadPin(AnalogPin.P0)
    control.waitMicros(40)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(9680)
    Dust = Math.map(DustVal, 0, 1023, 0, 300)
    if (Dust <= 75) {
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
    } else if (Dust <= 150) {
        basic.showIcon(IconNames.Sad)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else {
        basic.showIcon(IconNames.Angry)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
    }
})
