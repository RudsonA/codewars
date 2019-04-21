# A pangram is a sentence that contains every single letter of the alphabet at
# least once. For example, the sentence "The quick brown fox jumps over the
# lazy dog" is a pangram, because it uses the letters A-Z at least once (case
# is irrelevant).

# Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

import string

def is_pangram(s):

	s_lower = s.lower() # Gets rid of capital letters if they exist. 

	alphabet = [] 

	# ord() function is returning the aschii number of lowercase 97 - 122. number
	# of 'a' is 97 and number 'z' is 122. But for loop does include the last
	# number, so + 1 to include 'z'
	# for letter in range(97,123)
	for letter in range(ord('a'),(ord('z') + 1)):
		alphabet.append(chr(letter)) # The chr() function returns the character that represents the specified unicode

	for x in s_lower:
		if x == ' ' or x == '!' or x == '?' or x == '.' or x == ',':
			continue

		for letter in alphabet:
			if letter == x:
				alphabet.remove(letter)

	if len(alphabet) > 0:
		return False
	else:
		return True

# -----------------------------
# import string

# def is_pangram(s):
#     s = s.lower()
#     for char in 'abcdefghijklmnopqrstuvwxyz':
#         if char not in s:
#             return False
#     return True