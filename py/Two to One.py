# sorted string, the longest possible, containing distinct letters,

# each taken only once - coming from s1 or s2.
# Examples:
# a = "xyaabbbccccdefww"
# b = "xxxxyyyyabklmopq"
# longest(a, b) -> "abcdefklmopqwxy"

def longest(s1, s2):
    # your code
    s1 = s1.split()
    s2 = s2.split()

    list1 = []
    list2 = []

    for x in s1:
    	list1.append(x)

    for y in s2:
    	list2.append(y)

    s1 = list(dict.fromkeys(list1))
    s2 = list(dict.fromkeys(list2))

    s1 = ''.join(s1)
    s2 = ''.join(s2)

    newString = s1 + s2
    return newString