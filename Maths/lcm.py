from hcf import gcd

#naive
def naive(a,b):
  lcm = max(a,b)
  while True:
    if lcm%a == 0 and lcm%b == 0:
      return lcm
    lcm += max(a,b)
    
# print(naive(12,15))

#efficient

def lcm(a, b):
  return (a*b)/gcd(a,b)

# print(lcm(12, 15))