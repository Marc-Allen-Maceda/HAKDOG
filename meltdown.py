def meltdown(N):
    count = 0
    for a in range(1, int(N**(1/3))+1):
        for b in range(a, int((N//a)**(1/2))+1):
            c = N//(a*b)
            if c >= b:
                count += c - b + 1
    return count
