# Task #1:
# Write a function rounding random decimal number, up to the number of characters 
# (the number of characters is passed as the second argument)
# Rounding should occur according to mathematical rules (0.6 -> 1, 0.4 -> 0).
# To solve the problem, do not use the built-in functions and functions from the math module

def my_round(number, ndigits):
    ndigits+=1
    b = list(map(str, str(number)))
    a = b.index('.')+ndigits
    if int(b[a+1])>4:
        c=int(b[a])
        c+=1
        b.insert(a, c)
        return (b[:a])
    else:
        return (b[:a])


num = float(input('Please, enter random decimal number '))
ndig = int(input ('How many decimal places to leave? '))
print(my_round(num, ndig))


# Task #2:
# A six digit ticket number is given, determine if the ticket is happy
# The solution should be implemented as a function
# A ticket is considered to be lucky if the sum of its first and last digits is equal
# P.S .: the function should not print anything

def lucky_ticket(ticket_number):
    b = list(map(int, str(ticket_number)))
    if len(b) == 6:
        return("Happy" if b[0] + b[1] + b[2] == b[3] + b[4] + b[5] else "Unhappy")

number = int(input('Please, enter random six digit integer '))
print(lucky_ticket(number))