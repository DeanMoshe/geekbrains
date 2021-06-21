# Task 1: A random integer is given, print the digits of the original number one by one.
number = int(input('Please, enter random integer: '))
while number!=0:
    i=number%10
    print(i)
    number=int(number/10)
print('end #1')


# Task 2: Ask the user for the reference values of the two variables. Swap the values. Display the new values on the screen.
a = int(input('Please, enter variable a '))
b = int(input('Please, enter variable b '))

# Method #1 - Temporary variable
temp = a
a = b
b = temp
print('Variable а: ',a)
print('Variable b: ',b)

# Method #2 - Mathemastics
a = a+b
b = a-b
a = a-b
print('Variable а: ',a)
print('Variable b: ',b)

# Method #3 - Inplace swap
a,b = b,a
print('Variable а: ',a)
print('Variable b: ',b)
print('end #2')


# Task #3: Write a program that computes the roots of a quadratic equation ax2 + bx + c = 0.
# Use the sqrt () function of math to calculate the square root
# import math
# math.sqrt (4) - compute the root of number 4
import math
print('Please, set numbers to solve the quadratic equation ax2 + bx + c = 0')
a = int(input('Variable a '))
b = int(input('Variable b '))
c = int(input('Variable c '))
d = b**2 - 4*a*c
if d>0:
    x1 = (-b+math.sqrt(d))/2*a
    x2 = (-b-math.sqrt(d))/2*a
    print('Discriminant = ', d, 'the quadratic equation has 2 roots: x1 = ', x1, ', x2 = ', x2)
elif d==0:
    x1 = (-b+math.sqrt(d))/2*a
    print('Discriminant = ', d, 'the quadratic equation has one root = ', x1)
else:
    print('Discriminant = ', d, 'the quadratic equation has no roots')
print('end #3')