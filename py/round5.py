def round_to_next5(n):
    # Your code here
    if n % 5 == 0:
        return n
    elif n % 5 == 1:
        return n + 4
    elif n % 5 == 2:
        return n + 3
    elif n % 5 == 3:
        return n + 2
    elif n % 5 == 4:
        return n + 1


# BEST WAY!!!!!
def bestround_to_next5(n):
    return n + (5 - n) % 5
