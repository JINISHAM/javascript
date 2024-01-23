//Callback
function ramuSomu(welcomeMessage,callback){
    setTimeout(function(){
        console.log(welcomeMessage)
        callback();
    },2000)

}
function miniAni(){
    console.log("Hello")
}
ramuSomu("Hii",miniAni)


//Example 2
//Form submission example
function submitForm(buttonclick,db){
    setTimeout(function(){
        console.log(buttonclick)
        db()
    },2000)

}
function database(){
    console.log("Form submitted successfully")
}
submitForm("Submit button clicked",database)


/*function abc(a,b){
    console.log(a+b)
}
abc(5,4)*/

//Example 3
function savevideo(buttonpressed,db){
    setTimeout(function(){
        console.log(buttonpressed)
        db()
    },2000)

}
function database(){
    console.log("video saved in your gallary")
}
savevideo("if save button is pressed",database)

//Example 4
function jinisha(msg,person){
    setTimeout(function(){
        console.log(msg)
        person()

    },2000)
}
function ritthik(){
    console.log("Hii sis")
}
jinisha("Hii bro",ritthik)
