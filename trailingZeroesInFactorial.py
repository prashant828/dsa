# count trailing zeroes
# input: 5, ==> 1x2x3x4x5 = 120 output: 1

# naive solution

def naive(num):
    factorial = 1
    count = 0
    while num > 1:
        factorial *= num
        num -= 1
    while factorial % 10 == 0:
        count += 1
        factorial = factorial//10
    return count


print(naive(100))


#efficient method

def efficient(num):
    iterator = 5
    count = 0
    while iterator < num:
        count = count + int(num/iterator)
        iterator = 5 * iterator
    return count


print(efficient(100))
