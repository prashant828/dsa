# naive
def isPrime(num):
    for item in range(2,num):
        if num%item ==0:
            return False
    return True


# efficient
def isPrime2(num):
    i = 2
    while i*i <= num:
        if num % i == 0:
            return False
        i = i+1
    return True

# more efficient
def isPrime3(num):
    if (num==1 | num % 2 == 0 | num % 3 == 0):
        return False
    i = 5
    while i*i <= num:
        if num % i == 0:
            return False
        i = i+6
    return True


