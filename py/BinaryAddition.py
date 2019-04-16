# Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

# The binary number returned should be a string.

def add_binary(a,b):
    c = a + b
    c = bin(c)
    c = list(c)
    del c[0]
    del c[0]
    c = ''.join(c)

    return c 