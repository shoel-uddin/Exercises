matrix_1= [[2,3], [3,4], [1,2]]
matrix_2= [[1,4],[3,2], [2,5]]

i =0
new_matrix = []
while i< len(matrix_1):
    j=0
    m=[]
    while j< len(matrix_1[i]):
        m.append(matrix_1[i][j]+matrix_2[i][j])
        j+=1
    new_matrix.append(m)
    i+=1
print (new_matrix)