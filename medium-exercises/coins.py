coins = 0
response = ""

while response != "no":
    print (f"You have {coins} coins")
    response = (input("Would you like a coin?"))
    if response == "yes":
        coins = coins + 1
print (f"Good bye, You now have {coins} coins")

