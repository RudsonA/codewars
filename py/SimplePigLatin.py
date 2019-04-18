# Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
# https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/python
# pig_it('Hello world !')     # elloHay orldway !

def pig_it(text):

    text = text.split()
    arr =[]
    for txt in text:
    	if txt == "!" or txt == "?": 
    		arr.append(txt)
    	else:
	    	txt = ''.join(txt[1:] + txt[0] + 'ay')
	    	arr.append(txt)
    text = ' '.join(arr)
    return text
