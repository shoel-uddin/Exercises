my_list= ['apple', 'cat', 'grape', 'cat', 'apple']

new_list=[]

for item in my_list:
    if not item in new_list:
        new_list.append(item)
print(new_list)


