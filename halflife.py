import math

def compute_half_life(NT, NO, T):
    if not all(isinstance(i, int) and i > 0 for i in [NT, NO, T]) or NO <= NT:
        return None
    
    k = math.log(2) / T
    t_half = math.log(NO / NT) / k
    
    return round(t_half, 4)
