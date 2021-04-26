# Task #1:
# Write a small console utility that allows you to work with folders in the current directory.
# The utility should have an action selection menu, in which there will be items:
# 1. Go to the folder
# 2. View the contents of the current folder
# 3. Delete folder
# 4. Create a folder
# When choosing items: 1, 2, 3, 4 the program asks for the name of the folder
# and displays the result of the action: "Successfully created / deleted / moved", "Unable to create / delete / to go to the folder"

# To solve this problem, use the algorithms from the easy task,
# designed as appropriate functions, and imported into this file from easy.py
import functions
import sys
import os

while True:
    print('1 - Go to the folder', '2 - View the contents of the current folder', '3 - Delete folder', '4 - Create a folder')
    a = int(input('Choose action'))
    if a == 1:
        functions.changedir()
    elif a == 2:
        functions.dirlist()
    elif a == 3:
        functions.deldir()
    elif a == 4:
        functions.makedir()
    else:
        print('There is no such function')
    key = input("Press 'q' to")
    if key == 'q':
        sys.exit()
