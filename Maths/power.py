# recursive
def power(x, y):
    print(0, x, y)
    if (y == 0):
        return 1
    temp = power(x, int(y/2))
    print(temp, y)
    temp = temp*temp
    if (y % 2 == 0):
        return temp
    else:
        return temp*x


def power2(x, y):
    res = 1
    while (y > 0):
        if y % 2 != 0:
           res = res * x
        x = x*x
        y = int(y/2)
    return res


print(power2(2, 7))
