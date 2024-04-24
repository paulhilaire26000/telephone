bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("" + input.acceleration(Dimension.X) + ":" + "28")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    donnees = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
})
let donnees = ""
bluetooth.startUartService()
basic.forever(function () {
    if (donnees == "f") {
        basic.showIcon(IconNames.Happy)
    }
})
