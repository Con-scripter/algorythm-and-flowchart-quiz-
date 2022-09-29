for (let i = 0; i < 8; i++) {
basic.showLeds(`
. . . . .
. . . . #
. . . # .
# . # . .
. # . . .
`)
basic.pause(200)
basic.showLeds(`
# . . . #
. # . # .
. . # . .
. # . # .
# . . . #
`)
basic.pause(200)
} //First part of quiz

input.onButtonPressed(Button.A, function() {
basic.showString("Good Job!")
}) //Second part of quiz