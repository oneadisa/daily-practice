def count(sequence, item):
    count = 0
    for i in sequence:
        if i == item:
            count += 1
    return count
  
print (count([1, 2, 1, 1], 1))