# naive solution
def naive(a, b):
    factor = min(a, b)
    while factor > 0:
        if a % factor == 0 and b % factor == 0:
            return factor
        factor -= 1


print(naive(12, 15))


# euclidean solution
def euclidean(a, b):
    if a == b:
        return a
    elif a > b:
        return euclidean(a-b, b)
    elif b > a:
        return euclidean(a, b-a)


print(euclidean(12, 15))


# efficient euclidean
def gcd(a, b):
    if b == 0:
        return a
    else:
        return gcd(b, b % a)


print(gcd(12, 15))
