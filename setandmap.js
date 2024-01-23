//Set
//1st Eg
setExample = new Set("aiadmk","bjp","congress") //if it is not given inside array bracket, it will consider only first word aiadmk and in that word it will remove duplicate letters
console.log(setExample)
setExample = new Set(["aiadmk","bjp","congress"])//inside square bracket it will display all the values
console.log(setExample)
setExample.add("dmk")
setExample.add("aiadmk")
console.log(setExample)

//for of loop
for(value of setExample){
    console.log(value)
}
//for in loop
for(key in setExample){
    console.log(key)
}


//Maps
mapeg = new Map([["id","21ECR092"]])
mapeg1 = new Map([["id","21ecr092"],["name","jinisha"]])
mapeg1.set("age","20")
mapeg1.set("phone","9876543210")
console.log(mapeg)
console.log(mapeg1)
console.log(mapeg1.delete("phone"))

for(value of mapeg1){
    
    console.log(value)
}

for(key in mapeg1){
    console.log(key)
}
console.log(mapeg1.has("name"))
