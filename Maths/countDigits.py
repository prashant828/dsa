def countDigits(num):
    count = 0
    while num > 0:
        num = int(num/10)
        count += 1
    return count


print(countDigits(5555))

# time complexity O(n)