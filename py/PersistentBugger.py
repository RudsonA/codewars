# Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

# For example:

# persistence(39) => 3  # Because 3*9 = 27, 2*7 = 14, 1*4=4
                       # and 4 has only one digit.


def persistence(n):
	if n < 10:
	     return 0 # Only one digit. Can't iterate over it
	num_str = str(n)
	total = 1
	for i in num_str:
	    total = total * int(i)
	return 1 + persistence(total) # We do 1 + because we just did an iteration
# https://stackoverflow.com/questions/47147136/how-can-i-complete-my-python-code-for-the-persistence-bugger