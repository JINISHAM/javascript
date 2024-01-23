//global scope
//For loop
sum = 0
for(var i = 0; i<10; i++)
{
    sum += i
}
console.log(sum)

//While loop
//sum = 0
i = 0
while(i<10)
{
    sum += i
    i++
}
console.log(sum)

//do...while loop
//sum = 0
i = 0
do{
    sum += i
    i++
}while(i<10)
console.log(sum)

//local scope
for(var i= 0;i<10;i++){
    console.log(i+9)
}
console.log(i)

//block scope
//1.
var a = 10
console.log(a)
{
    var a = 5
    var b = 5
    console.log(a)
    console.log(b)
}
console.log(a)

//2.
var a = 10
console.log(a)
{
    let a = 5     //let holds the accessibility until the block ends
    let b = 5
    console.log(a)
    console.log(b)
}
console.log(a)