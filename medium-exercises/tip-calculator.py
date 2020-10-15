total = float(input("What is the total bill?\n"))
service = input ("Level of service (Good, fair, bad)?")

if service == "good": 
    tip = total * .20
# fair = total * .15
# bad = total * .10
 
ta = total + tip

print("Tip amount: %.2f" % tip)
print("Total amount: %.2f" % ta)