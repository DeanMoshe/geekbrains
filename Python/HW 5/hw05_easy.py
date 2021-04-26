# Task #1:
# Write a script that creates the directory dir_1 - dir_9 in the folder from which this script is run.
# And a second script to delete these folders.

import os, shutil

try:
    for i in range(1,10):
        os.mkdir('dir_'+str(i))
except FileExistsError:
    print('Folders already exist')
key = input('Press "d" to delete folders')
for i in range(1,10):
    if key == 'd':
        os.rmdir('dir_'+str(i))
    else:
        break


# Task #2:
# Write a script displaying the folders of the current directory

for filename in os.listdir():
    print(filename)


# Task #3:
# Write a script that creates a copy of the file from which this script is run

shutil.copy(r'hw05_easy.py', r'new.py')