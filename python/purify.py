def purify(lst):
    res = []
    for ele in lst:
        if ele % 2 == 0:
            res.append(ele)
    return res
  
print (purify([1, 2, 3, 4]))