let s="Hello world manoj"
function solution(s){
    // let stack = []
    let word=""
    let finalWord=""
    for( let i of s){
        if(i===" "){
            finalWord=word+" "+finalWord
            word=""
        }
        word+=i
    }
    finalWord=word+" "+finalWord
    console.log(finalWord)
    
}
solution(s)

let a = [1,2,3]
function aa(s){
    s[1]=100
}
aa(a)
console.log(a)