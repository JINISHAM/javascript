/*
//variable hoisting
console.log(a)
var a = 10    //var is declared globally, output:undefined

//
console.log(a)
let a = 10     //let is declared locally, output:reference error
*/

// Functional hoisting
konguclg(5,10)
function konguclg(a,b){
    for(i = a; i<b ;i++){
        if (i % 2 == 0){
            console.log("The number",i,"is even")
        }
        else{
            console.log("The number",i,"is odd")
        }

    }
}