// started operating process 
console.log("first");
setTimeout(() => {
    console.log("second")
}, 0)
console.log("third")

// Here the output will be in this way
// first
// second
// third
// This proves no matter what time we mentioned in the call back function. even they time is 0s. if it is asynchronous it must wait before all the synchronous functions present in the stack complete their executions.

// ---------------------------------

