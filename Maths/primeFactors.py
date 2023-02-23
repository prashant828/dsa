from isPrime import isPrime3

# naive
def primeFactors(num):
    for item in range(2, num+1):
        while num % item == 0:
            num = num/item
            print(item)

#efficient
def primeFactors2(num):
    for item in range(2, int(num**0.5)+1):
        while num % item == 0:
            num = num/item
            print(item)

#more efficient
def primeFactors3(num):
    while num%2 ==0:
        num = num/2
        print(2)
    while num%3 ==0:
        num = num/3
        print(3)
    for item in range(5, int(num**0.5)+1, 6):
        print(item)
        while num % item == 0:
            num = num/item
            print(item)
    if(num > 1):
        print(int(num))


