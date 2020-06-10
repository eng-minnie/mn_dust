# MN Dust Kit Package
This MN Dust Measurement Kit package was developed by Minnie with assistance from Devicemart.

MN Dust Measurement Kit is a small measure of fine dust. It measures the dust in the surrounding air. And mark the status with facial expressions and traffic lights.
If you Press A button, to see the dust value.

When the air is clean, a smile and a green light. When the air is normal, a blank expression and a yellow light. When the air is bad, the devil's face and the red light. It So Cute!!

<img src="https://blogfiles.pstatic.net/MjAyMDAzMjBfMjY5/MDAxNTg0NjgyNDg4MzA2.Fvmdz0sHoCWtDddgq0521DqDbU9fDJahBM1UYJ6GE8kg.yPhVd_ialyJNzNJ8qXEByThayRESPwPmZqLsvVOOc7kg.PNG.no1_devicemart/icon.png?type=w1" width="400px" style="align:center"></img>

    
(Product Page : http://www.devicemart.co.kr/goods/view?no=12391833)

(Blog Post : https://blog.naver.com/no1_devicemart/221789742690)


## Basic usage

```JavaScript
let DustVal = 0
let Dust = 0 

// set dust sensor
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(280)
    DustVal = pins.analogReadPin(AnalogPin.P0)
    control.waitMicros(40)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(9680)
    
// Dust value
    Dust = Math.map(DustVal, 0, 1023, 0, 300)
    
// show dust sensor value
    basic.showNumber(Dust)
```

The ``DustVal`` variable is the value read from the dust sensor. Because the dust sensor is an analog sensor, the output value ranges from 0 to 1023.

The ``Dust`` variable is the value of the ``DustVal`` variable in the range of 0 to 300. Because the density of dust is expressed as 0-300 and the unit uses ug/m3, the range of the DustVal value was replaced with 0-300 using the ``map`` function.

The ``ShowNumber`` function is a function that outputs a number with LEDs built into Micro:bit.


## Supported targets

* for PXT/microbit

## License

MIT


