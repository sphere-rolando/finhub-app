


def compound(init_amt, monthly_amt, init_array, compounding_perct):
    result = []
    for index, val in enumerate(init_array):
        if val != 0:
            entry = (result[index-1] + monthly_amt ) * compounding_perct
            result.append(entry)
        else:
            entry = (init_amt + monthly_amt) * compounding_perct
            result.append(entry)
    return result
