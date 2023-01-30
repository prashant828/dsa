def checkPalindromeNumber(num):
    reverse = 0
    temp = num
    while num > 0:
        reverse = reverse*10 + num % 10
        num = int(num / 10)
    if reverse == temp:
        return True
    else: 
        return False


print(checkPalindromeNumber(78987))

# time complexity O(n)