'''
1.  Build a test system
2.  Add Comment Block 
3.  Add Wukong extention 
4.  Save code with GitHub
5.  Create loop to check button pressed 
6.  Run Motor on button pressed
7.  Save code with GitHub
8.  Open saved code from repository
'''

#1. simple machine with microbit, wukong, red-motor and wheel
#1. save this file to GitHub - create repository
#2.  Create content header with (''') block comment
#2.  Inline comments with (#)
#3.  Add Wukon extention 
#4.  Save GitHub
#5.  loop checking for button presses
#6.  Run motor on Button A, Stop Button B
while True:
    if input.button_is_pressed(Button.A):
        #run motor
        pass
    elif input.button_is_pressed(Button.B):
        #stop Motor
        pass
    elif input.button_is_pressed(Button.AB):
        #speed motor up
                pass
    else:
        pass
    
    basic.pause(250)

    #7  Save to GitHub and close
    #8. Reopen project from repository