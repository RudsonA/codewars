def remove_char(s):
    arr = list(s)
    del arr[0]
    arr.pop()
    trimstr = "".join(arr)
    return trimstr

def remove_char_2(s):
    return s[1 : -1]