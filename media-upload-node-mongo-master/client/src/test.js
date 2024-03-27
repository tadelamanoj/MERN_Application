let nums = [1,2,3,4]
target = 8

function solution(nums,target){
    let dict ={}
    let ans=[]
    for( let i=0; i<nums.length;i++){
        if(dict.hasOwnProperty(nums[i]) && dict.hasOwnProperty(target-nums[i])){
            ans.push([dict[nums[i]],i])
            break
        }else{
            dict[target-nums[i]]=i
            dict[nums[i]]=i
        }
    }
    console.log(ans[0])
    return ans[0]
}
solution(nums,target)

nums=nums.filter((e)=>e>2)
console.log(nums)
nums = [1,2,3,4]
nums=nums.filter((e)=>e>2)
console.log(nums)