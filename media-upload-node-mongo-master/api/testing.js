// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let array = [12, 3, 4, 1, 6, 9];
let sum = 24; 

//    12 3     4    1      6       9
// 12    15    16  13      18      21
// 3 
// 4
// 1
// 6
// 9




function solution(arr,sum){
    
    for(let i=0;i<arr.length;i++){
        for(let j =i+1;j<arr.length;j++){
            for(let k =j+1;j<arr.length;k++){
                if(sum === arr[i]+arr[j]+arr[k]){
                    console.log(arr[i],arr[j],arr[k])
                    return true
                }
            }
        }
    }
    // console.log(arr)
    return false
}
// time complexity O(n^3) not desirable ,space complexity = S(1) ; n= length of array 
solution(array,sum)

function solution2(arr,sum){
    let dp = []
    let dict = {}
    
    for (let i in arr ){
        if(dict.hasOwnProperty(arr[i])){
            dict[arr[i]].push(Number(i))
        }else{
            dict[arr[i]]=[Number(i)]
        }
    }

    console.log(dict)

    for(let i =0 ; i<arr.length;i++){
        let temp=[]
        for(let j =i+1 ; j<arr.length;j++){
            let rem=sum-(arr[i]+arr[j]) 
            if(dict.hasOwnProperty(rem)){
                console.log(arr[i],arr[j],rem)
                return true
            }
            temp.push([arr[i],arr[j]])
        }
        dp.push(temp)
    }
    console.log(dp)

}
solution2(array,sum)
