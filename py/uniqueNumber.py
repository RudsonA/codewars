# https://www.codewars.com/kata/find-the-unique-number-1/train/python
# There is an arr1ay with some numbers. All numbers are equal except for one. Try to find it!

# find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
# find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55

def find_uniq(arr):
    # your code here

    arr1 = set(arr)

    arr1 = list(arr1)

    n = 0

    if arr.count(arr1[0]) == 1:
    	n = arr1[0]
    else:
    	n = arr1[1]
    return n   # n: unique integer in the arr1ay