#find all prime numbers till n
import numpy

def sieve(num):
    isPrime = numpy.full(num+1, True)
    for item in range(2, int(num**0.5)+1):
       if isPrime[item]:
           for j in range(item*item, num+1, item):
               isPrime[j] = False
    for item in range(len(isPrime)):
        if isPrime[item] == True:
            print(item)

sieve(25)