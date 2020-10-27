string= "I am leet programer"

letters= ["A", "E", "G", "I", "O", "S", "T"]
numbers= [4, 3, 6, 1, 0, 5, 7]
new_list= []

for letters in string:
    l =letters
    i=0
    for let in letters:
        if let == l.lower():
            l= str(numbers[i])
        i+=1
    new_list.append(l)
print ("".join(new_list))
