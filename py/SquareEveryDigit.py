# Welcome. In this kata, you are asked to square every digit of a number.

# For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

# Note: The function accepts an integer and returns an integer

def square_digits(num):
    num = str(num) # strings are easier t handle in arrays and joins
    num = list(num) 
    listSq = []

    for x in num: 
    	squared = 1 
    	squared = squared * int(x) * int(x)
    	squared = str(squared) # couldn't join numbers 
    	listSq.append(squared)

    num = ''.join(listSq)
    num = int(num)

    return num 