# Functions for Normal Level Task

import os

def print_help():
    print('help - for help')
    print('changedir(dir_name) - go to the folder')
    print('dirlist() - view the contents of the current folder')
    print('deldir(dir_name) - delete folder')
    print('makedir(dir_name) - create a folder')

# 1. Go to the folder function
def changedir():
    dir_name=input('Please, enter folder name')
    try:
        os.chdir(dir_name)
        print('Successfully moved')
    except FileNotFoundError:
        print('Unable to move')

# 2. View the contents of the current folder function
def dirlist():
    for filename in os.listdir():
        print(filename)

# 3. Delete folder function
def deldir():
    dir_name=input('Please, enter folder name')
    dir_path = os.path.join(os.getcwd(), dir_name)
    try:
        os.rmdir(dir_path)
        print('Successfully deleted')
    except FileNotFoundError:
        print('Unable to delete: can\'t find this folder')
    except OSError:
        print('Unable to delete: this folder containes files')

# 4. Create folder
def makedir():
    dir_name=input('Please, enter folder name')
    dir_path = os.path.join(os.getcwd(), dir_name)
    try:
        os.mkdir(dir_name)
        print('Successfully created')
    except FileExistsError:
        print('Unable to create')