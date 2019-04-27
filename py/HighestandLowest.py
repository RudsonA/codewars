def high_and_low(numbers):
    numbers = numbers.split()
    num = []
    for x in numbers:
        num.append(int(x))
    num.sort()
    numbers = []
    for x in num:
        numbers.append(str(x))
    return f"{numbers[-1]} {numbers[0]}"