from isPrime import isPrime3

# naive


def primeFactors(num):
    for item in range(2, num+1):
        while num % item == 0:
            num = num/item
            print(item)


primeFactors(84)
