num1 = 1

while num1 <= 10:
    i = 1
    while i <= num1:
        product = num1 * i
        print (num1, "*", i, "=", product, "\n")
        i= i + 1
    print("\n")
    num1 = num1 + 1
    
#https://www.youtube.com/watch?v=h_4AQzP3FsI
# n = int(input("Enter number: \n"))
# for i in range (1, 11):
#     print (n, "*", i, "=", n*i) 

# for i in range (1, 11):
#     for j in range (1 ,11):
#         print (i, "x", j, "=", i * j )
#     print ("- - - - - -")