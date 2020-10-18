import random

#print(s_num)
play_again = "yes"
while play_again == "yes":

    #SAME THING
    # s_num = random.randint(1,10)
    # guess = None
    # guess_count = 0
    guess,guess_count,s_num = None, 0, random.randint(1,10)

    while guess != s_num and guess_count < 5:
        
        while guess_count < 5:
            guess_count += 1
            try:
                guess = int(input("Please guess a number?\n"))
                break
            except ValueError:
                print("You did not enter an number.")
                guess = 0

        if guess == s_num:
            print("Yes you win.")
        elif guess < s_num:
            print("Your number is too low, try again.")
        else:
            print("Your number is too high, try again.")      
        
    if guess_count >= 5:
        print("You guess too many times. Too bad.")
    
    play_again = input("Do you want ot play again?")



# import random
# s_num = random.randint(1,10)

# guess = 0
# guess_count= 0
# play_again= "yes"
# while play_again == "yes":
#     guess, guess_count, s_num = None, 0, random.randint(1,10)

#     while guess != s_num and guess_count < 5:
#         try:
#             guess = int(input ("Guess a number?\n" ))
#         except ValueError:
#             print("Not a number")
#         if guess == s_num:
#             print( "You are correct")
#         elif guess < s_num:
#             print( " Number too low, Try again")
#         else:
#             print("Number too high, Try again!")
#         guess_count += 1

#     if guess_count >= 5:
#         print( " You tryied too many times")

#     play_again = input ("Do you wanna try again?")



# s_num = 5

# guess = 0

# while guess != s_num:
#     guess = int(input ("Guess a number?\n" ))
#     if guess == s_num:
#         print( "You are correct")
#     elif guess < s_num:
#         print( " Number too low, Try again")
#     else:
        # print("Number too high, Try again!")