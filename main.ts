input.onButtonPressed(Button.A, function () {
    direction += 1
    if (direction > 3) {
        direction = 0
    }
})
input.onButtonPressed(Button.B, function () {
    direction += -1
    if (direction < 0) {
        direction = 3
    }
})
let direction = 0
let ytete = 20
let xtete = 20
LCD1IN8.LCD_Init()
LCD1IN8.LCD_ClearBuf()
LCD1IN8.LCD_SetBL(536)
direction = 1
basic.forever(function () {
    if (direction == 0) {
        ytete += 1
    } else if (direction == 1) {
        xtete += 1
    } else if (direction == 2) {
        ytete += -1
    } else if (direction == 0) {
        xtete += -1
    }
    LCD1IN8.DrawPoint(
    xtete,
    ytete,
    0,
    DOT_PIXEL.DOT_PIXEL_2
    )
    LCD1IN8.LCD_Display()
})
