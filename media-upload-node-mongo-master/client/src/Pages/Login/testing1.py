
s= input() #"(){}{}"

dic={'(':')','{':'}',"[":"]"}

def validParant(s):

    if(s==""):
        return True
    
    stack=[] 

    for i in s:

        if(i in dic):
            stack.append(i)
        else: # stack is not null
            if(len(stack)>0 and dic[stack[-1]]==i):
                stack.pop()
            else:
                return False
    if(len(stack)==0):
        return True
    else:
        return False

print(validParant(s))