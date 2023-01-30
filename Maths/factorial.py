#Iterative
def factorial(num):
    fact = num
    while num > 1:
        fact *= num-1
        num = num-1
    return fact


print(factorial(3))


#Recursive
