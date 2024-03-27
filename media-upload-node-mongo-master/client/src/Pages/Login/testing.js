// function solution(arr) {
//   let dict = {};
//   for (let i of arr) {
//     if (dict.hasOwnProperty(i)) {
//       dict[i] += 1;
//     } else {
//       dict[i] = 1;
//     }
//   }
//   let answer = [];
//   for (let key of Object.keys(dict)) {
//     if (dict[key] > 1) {
//       answer.push(key);
//     }
//   }
//   return answer;
// }

// console.log(solution([1, 2, 3, 2, 4, 5, 3]));



// [1, [2, [3, 4], 5]] --> [1,2,3,4,5]


let answer=[]
function flating(arr){
  let i =0
  let l = arr.length
  while(i<l){
    if(Array.isArray(arr[i])){
      flating(arr[i])
    }else{
      answer.push(arr[i])
    }
    i++
  }
  return answer
}

console.log(flating([1, [2, [3, 4], 5]]))


let dr =()=> new Promise((resolve,reject)=>{
  setInterval(()=>resolve('2000'),1000)
})

let a=async ()=>{
  let data1 =await dr()
  console.log("hello")
  console.log(data1)
  console.log("world")
  console.log(data1)
}
a()

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]

const promise4 = Promise.resolve(3);
const promise5 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'),
);
const promises = [promise4, promise5];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);

// Expected output:
// "fulfilled"
// "rejected"