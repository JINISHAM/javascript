//Promise =>location example
function islocationvalid(loc) {
    var v = "nilgiris"
    if (v === loc) {
        return true
    }
    else {
        return false
    }
}
function location() {
    return new Promise(function (response, errormsg) {
        setTimeout(function () {
            loc = "nilgiris"
            console.log("Location entered is", loc)
            if (islocationvalid) {
                return response("Location found")
            }
            else {
                return errormsg("Location not found")
            }

        }, 2000)
    });
}
location().then(
    function (response) {
        console.log(response)
    }
).catch(function (errormsg) {
    console.log(errormsg)
})