# Task 1: A random integer is given, print the digits of the original number one by one.
number = int(input('Please, enter random integer:'))
while number!=0:
	i=number%10
	print(i)
	number=int(number/10)
print('end #1')


# Task 2: Ask the user for the reference values of the two variables. Swap the values. Display the new values on the screen.
a = int(input('Please, enter variable a'))
b = int(input('Please, enter variable b'))

# Method #1 - Temporary variable
temp = a
a = b
b = temp
print('Variable а:',a)
print('Variable b:',b)

# Method #2 - Mathemastics
a = a+b
b = a-b
a = a-b
print('Variable а:',a)
print('Variable b:',b)

# Method #3 - Inplace swap
a,b = b,a
print('Variable а:',a)
print('Variable b:',b)
print('end #2')


