//Example 1 => function without the arguement and without return type
/*function fun(){
    console.log("function sample example")
}
fun()*/

//Example 2
function fun(a,b){
    console.log("function with arguement without return type")
    for(i = a; i<b ;i++){
        if (i % 2 == 0){
            console.log("The number",i,"is even")
        }
        else{
            console.log("The number",i,"is odd")
        }

    }
}
fun(2,5)

//Example 3 =>with arguement with return
function fun(a,b){
        if (a % 2 == 0){
            return a
        }
        else{
            return b
        }

    }

console.log(fun(2,5))
