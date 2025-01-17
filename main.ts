/** 
1.  Build a test system
2.  Add Comment Block 
3.  Add Wukong extention 
4.  Save code with GitHub
5.  Create loop to check button pressed 
6.  Run Motor on button pressed
7.  Save code with GitHub
8.  Open saved code from repository

 */
// 1. simple machine with microbit, wukong, red-motor and wheel
// 1. save this file to GitHub - create repository
// 2.  Create content header with (''') block comment
// 2.  Inline comments with (#)
// 3.  Add Wukon extention 
// 4.  Save GitHub
// 5.  loop checking for button presses
// 6.  Run motor on Button A, Stop Button B
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        // run motor
        // wuKong.set_motor_speed(wuKong.MotorList.M1, 75)
        
    } else if (input.buttonIsPressed(Button.B)) {
        // stop Motor
        // wuKong.set_motor_speed(wuKong.MotorList.M1, 0)
        
    } else if (input.buttonIsPressed(Button.AB)) {
        // speed motor up
        
    } else {
        
    }
    
    basic.pause(250)
}
