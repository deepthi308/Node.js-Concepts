const { readFile } = require("fs")
const path = require("path")

const filepath = path.join(__dirname, "textFiles", "eventLoop.txt")
console.log("Gonna start reading the eventLoop text file")
readFile(filepath, "utf-8", (err, result) => {
    if (err) {
        throw err
    }
    // console.log(result)
    console.log("Read the file")
})
console.log("Gonna start reading a new file")

// Since the read file function is asynchronous.
// It will offload the function and put it inside the queue
// Then the synchronous and blocking functions placed in the stack will be executed first
// Once the stack is free then the asynchronous functions present in the queue will be executed