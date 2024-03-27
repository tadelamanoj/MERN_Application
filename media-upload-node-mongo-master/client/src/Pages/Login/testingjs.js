
// // function solution(arr){

// // 	let stack = []

// // 	let ans = 0
// // 	for(let i in arr){
// // 		// if we encounter an open parenthesis then we insert into the stack
// // 		if(arr[i]==="(" ){  
// // 			stack.push(")") 
// // 		}
// // 		else if(arr[i]===")" && stack.length>0 ){  //or else if the next element is closing parenthesis then we increment ans by 1 
// // 			stack.pop()     				// "((())) )"
// // 			ans+=1    
// // 		}
// // 	}
// // 	return ans*2
// // }

// // let st= "(())())()"
// // console.log(solution(st))

// let globalVar = 'I am global';

// let myObject = {
//   myVar: 'I belong to the object',
//   regularFunction: function() {
//     console.log(this.myVar); // Accessing object property using this
//   },
//   arrowFunction: () => {
//     console.log(this.myVar); // Inheriting this from the surrounding scope (global in this case)
//     console.log(this.globalVar); // Inheriting this from the surrounding scope (global in this case)
//   },
//   anotherRegularFunction() {
//     console.log(this.myVar); // Accessing object property using this
//   }
// };

// myObject.regularFunction();         // Output: I belong to the object
// myObject.arrowFunction();           // Output: undefined, undefined
// myObject.anotherRegularFunction();  // Output: I belong to the object


	
// console.log(['12341234','5678901234','10','7890','123456a'].map(parseInt))
console.log(0.1+ 0.2 ,0015)