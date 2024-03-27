// // const arr1 = [1234, 1244, 5674, 7899, 9876,];
// // const a=[1]
// // const b=[1]
// // console.log(a===b) 
// // function solution(arr1){
// //     let types= new Set([0,11,22,33,44,55,66,77,88,99]) 
// //     let result =[]
// //     result =arr1.filter((item)=>{
// //         let rem = item % 100
// //         if(types.has(rem)){
// //             return true
// //         }else{
// //             return false
// //         }
// //     })
// //     return result
// // }

// // console.log(solution(arr1))

// var name1 = "manoj"
//  function x(){
//     console.log(name1)
//     var name1 = "kumar"
//     console.log(name1)
// };
// x()
// console.log(name1)

// const a={b:1}
// const c=a
// c.d=2
// console.log(a,c)

let arr= [2, 3, 5, [{"name": "Jhon Doe"}, 2, 3, 1, [true, 1, 2, ["name", 1, 2]], 2, 4], 1]

let total=0
function sumAll(arr){

    for(let item of arr){
        if(typeof(item) === "number"){
            total += item
        }
        else if(item && Array.isArray(item)){
            sumAll(item)
        }
    }
    
}
sumAll(arr)
console.log(total)
const promise1 = Promise.resolve('One');
const promise2 = Promise.reject('Rejected');
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Three');
});

let r = async () => {
  try {
    const results = await Promise.allSettled([promise1, promise2, promise3]);
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};

r(); // Call the async function

const promise11 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'One');
  });
  const promise21 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Two');
  });
  
  Promise.race([promise11, promise21])
    .then((value) => console.log(value))
    .catch((error) => console.error(error));
  