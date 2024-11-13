function returnSomething() {
    return console.log("Return")
}

function valueAsFunction() {
    console.log("valueAsFunction")
}

/*
set Timeout with the value of return statement
 */
setTimeout(returnSomething(), 2000);

/*
use function as value
 */
setTimeout(valueAsFunction, 3000)

