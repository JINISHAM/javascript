//ES6 -> ECMA Script 6 Standard
//1. Var,let,const =>refer variable.js
//2. Arrow function
let fun = () =>{
    console.log("Hello")
}
fun()


//3. Destructuring
var arr =[10,20,30,40,50]
var [a,b,c,d,e] = arr
console.log(a,b,c,d,e)

//4. Spread array
var arr =[10,20,30,40,50]
var arr1 =[...arr,60,70]
console.log(arr1)

