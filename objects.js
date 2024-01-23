//Objects
//How will you declare objects
//1 way
var customerDetails = {
    "name": "Jinisha",
    "age": 20,
    "phone":"9876543210"
}
console.log(customerDetails)

customerDetails["id"] = "21ECR092"
console.log(customerDetails)

//2way
var customerDetails = {}
customerDetails["id"] = "21ECR092"
customerDetails["name"] = "Jini"
customerDetails["phone"] = "9876543210"
customerDetails["age"] = "20"
console.log(customerDetails)

//3rd way
var kongu = new Object()
kongu["fees"] = 100000
kongu["accomodation"] = "Excellent"
kongu["food"] = "Bad"
kongu["hostel_count"] = 10
console.log(kongu)
console.log(kongu.food)
console.log(kongu["hostel_count"])
console.log(kongu["food"])