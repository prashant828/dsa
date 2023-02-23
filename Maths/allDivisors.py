# efficient
def allDivisors(num):
    for item in range(1, int(num**0.5)+1):
        if num % item == 0:
            print(item)
    for item in range(int(num**0.5)+1, 0, -1):
        if num % item == 0:
            print(int(num/item))


allDivisors(24)
