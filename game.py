import re
print("keep a number in your mind from 1-21")
A=[1,4,7,10,13,16,19]
B=[2,5,8,11,14,17,20]
C=[3,6,9,12,15,18,21]
print("A \t B \t C")
for i in range(0,7):
    print(f"{A[i]} \t {B[i]} \t {C[i]}")
for i in range(3):
    choice=input("Enter to which block your number belongs to A B or C:")
    if  re.match('r"^[ABCabc]$"',choice):
        print("invalid choice")
    temp=B
    if choice=='A':
        B=A
        A=temp
    elif choice=='C':
        B=C
        C=temp
    total=A+B+C
    j=0
    for i in range(0,7):
        A[i]=total[j]
        B[i]=total[j+1]
        C[i]=total[j+2]
        j+=3
    print("A \t B \t C")
    for i in range(0,7):
        print(f"{A[i]} \t {B[i]} \t {C[i]}")
print(f"the number in your mind is :{total[10]}")



    

    
       
