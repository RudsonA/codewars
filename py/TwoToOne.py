# sorted string, the longest possible, containing distinct letters,

# each taken only once - coming from s1 or s2.
# Examples:
# a = "xyaabbbccccdefww"
# b = "xxxxyyyyabklmopq"
# longest(a, b) -> "abcdefklmopqwxy"

def longest(s1, s2):

    list1 = list(s1)
    list2 = list(s2)


    # for y in s2:
    #   list2.append(y)

    list1 = list(dict.fromkeys(list1))
    list2 = list(dict.fromkeys(list2))

    s1 = ''.join(list1)
    s2 = ''.join(list2)

    s3 = s1 + s2

    list3 = list(s3)
    list3 = list(dict.fromkeys(list3))
    list3 = sorted(list3)
    s3 = ''.join(list3)

    return s3


# def longest(s1, s2):    
#     s3 = s1 + s2
#     s3 = list(s3)
#     s3 = list(dict.fromkeys(s3))
#     s3 = sorted(s3)
#     s3 = ''.join(s3)
#     return s3