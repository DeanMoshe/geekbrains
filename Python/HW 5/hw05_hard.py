
# Task #1:
# Modify the implementation of the program from the example,
# adding an implementation of the following commands (passed as arguments):
# cp <file_name> - creates the specified file
# rm <file_name> - deletes the specified file (request confirmation of the operation)
# cd <full_path orlative_path> - changes the current directory to the specified
# ls - display the full path of the current directory
# path to be considered absolute (full_path) - on Linux starts with /, on Windows with the drive name
# consider all other ways relative

# Important! All operations must be performed in the directory in which you are located. The source directory is the one
# in which the script was run.

# P.S. If possible, do a cross-platform implementation.
# This script can be run with the parameters:
# python with_args.py param1 param2 param3

import os
import sys
import shutil
print('sys.argv = ', sys.argv)

@property
def print_help():
    print("help - for help")
    print("cp <file_name> - creates a copy of the specified file")
    print("rm <file_name> - deletes the specified file")
    print("cd <full_path or relative_path> - changes the current directory to the specified")
    print("ls - display the full path of the current directory")
    print("mkdir <dir_name> - creates folder")
    print("ping - test key")

def cp():
    file_name=input("Please, enter the name of the file to copy.")
    new_file_name=input("Please, enter the name of the new copy file")
    shutil.copy(file_name, new_file_name)

def rm():
    if not file_name:
        print("You should specify the file name as the second parameter")
        return
    prot=input("Are you sure you want to delete this file?", file_name, "Press: 'y'")
    if prot=='y':
        file_path = os.path.join(os.getcwd(), file_name)
        try:
            os.remove(file_path)
            print('File successfully deleted')
        except FileNotFoundError:
            print('Unable to delete file: can\'t find the file')

def cd():
    if not dir_name:
        print("You should specify the folder name as the second parameter")
        return
    try:
        os.chdir(dir_name)
        print('Successfully moved')
    except FileNotFoundError:
        print('Unable to move')

def ls():
    print("Full path of the current directory:", os.getcwd())

def make_dir():
    if not dir_name:
        print("You should specify the folder name as the second parameter")
        return
    dir_path = os.path.join(os.getcwd(), dir_name)
    try:
        os.mkdir(dir_path)
        print('folder {} created'.format(dir_name))
    except FileExistsError:
        print('folder {} already exists'.format(dir_name))


def ping():
    print("pong")

do = {
    "help": print_help,
    "mkdir": make_dir,
    "ping": ping
}

try:
    dir_name = sys.argv[2]
except IndexError:
    dir_name = None

try:
    key = sys.argv[1]
except IndexError:
    key = None


if key:
    if do.get(key):
        do[key]()
    else:
        print("Invalid key specified")
        print("Enter the 'help' key for help")