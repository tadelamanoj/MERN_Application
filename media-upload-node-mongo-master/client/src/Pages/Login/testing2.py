
from collections import defaultdict
array = [2,7,11,15]
target = 100
dic = defaultdict(list)
def solution(arr,target):
    l=len(arr)
    for i in range(l):
        # if( target-arr[i] not in dic):  #9-2 = 7 
        dic[target-arr[i]].append(i) # dic[7]=0
        dic[arr[i]].append(i)
        print(dic)
    
    for k,v in dic.items():
        if(len(v)>1):
            return v
    
print(solution(array,target))



