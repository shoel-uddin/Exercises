factor = int(input("Pick a number to be factored: \n"))

def print_factors(x):
   print("The factors of",x,"are:")
   for i in range(1, x + 1):
       if x % i == 0:
           print(i)

num = 32

print_factors(num)