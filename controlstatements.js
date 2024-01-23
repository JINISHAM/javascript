//Looping
//For loop
sum = 0
for(var i = 0; i<10; i++)
{
    sum += i
}
console.log(sum)

//While loop
sum = 0
i = 0
while(i<10)
{
    sum += i
    i++
}
console.log(sum)

//do...while loop
sum = 0
i = 0
do{
    sum += i
    i++
}while(i<10)
console.log(sum)

//Example 1:
arr = [10, 20, 30]
console.log(arr.length)
for( var i = 0;i < arr.length;i++)
{
    console.log(arr[i])
}

//Example 2:
arr = [10, 20, 20.5]
console.log(arr.length)
for(var i = 0;i < arr.length;i++)
{
    console.log(arr[i])
}


//Example 3:
arr = [10, 20, true, false]
console.log(arr.length)
for(var i = 0;i < arr.length;i++)
{
    console.log(arr[i])
}

//Javascript can include all the datatypes in arrays

//for in loop
arr = [10, 20, true, false]
for (const index in arr) {
    console.log("The value present in",index, "is",arr[index])
}

//for of loop
arr = [10, 20, true, false]
for(const value of arr){
    console.log(value)
}

//foreach loop
arr = [10, 20, true, false]
arr.forEach(value =>{
    console.log(value)
})

 //Example 2
 
var kongu = new Object()
kongu["fees"] = 100000
kongu["accomodation"] = "Excellent"
kongu["food"] = "Bad"
kongu["hostel_count"] = 10
console.log(kongu)
//for in loop
for(key in kongu){
    console.log(kongu[key])
}

//for of loop
for(key of kongu){
    console.log(key)
}