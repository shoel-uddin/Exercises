# width = int(input("Give width for a box: \n"))
# height = int(input("Give height for a box:\n"))

# i=0
# while i < "width":
#     print ("*" * "width")
#     i += 1



#https://www.youtube.com/watch?v=tAD7_VhQmk4

n=int(input("ennte a number for box:\n"))
for i in range(n): #row
    for j in range(n): #column
        if i == 0 or i == n - 1 or j == 0 or j == n-1:
            print ("*", end = " ")
        else:
            print (" ",end=" ")
    print (" ")