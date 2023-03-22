const fs = require("fs");
const path = require('path');
// Now I am going to destructure the needed functions from the fs module

const { readFileSync, writeFileSync, readFile, writeFile } = fs;

// readFileSync & writeFileSync - synchronous & blocking fucntions.
// readFile & writeFile - asynchronous & non-blocking fucntions.

const filePath = __filename

// setting the file path
const firstFile = path.join(__dirname, "textFiles", "firstText.txt")
const secondFile = path.join(__dirname, "textFiles", "secondtText.txt")
const thirdFile = path.join(__dirname, "textFiles", "FirstSecondText.txt")

console.log("Start")

readFile(firstFile, "utf-8", (err, result) => {
    if (err) {
        console.log(err)
    }
    else {
        // console.log(result)
    } 
   
})

// The difference between readFile and readFileSync is real file asynchronous so it won't be blocked and readFileSync is synchronous. So it will be blocked easily.

// readFileSync will have only two arguments - The path and encoding type
// readFile will have three arguments - The path, encoding & callback function

// So, let also read the second file in an asunchronous way using readFile

readFile(secondFile, "utf-8", (err, result) => {
    if (err) {
        console.log(err.message)
        return
    }
    
    const second = result
    writeFile(secondFile, "\nJust appending some text to the second file", { flag: "a" }, (err, result) => {
        if (err) {
           throw err 
        }
        console.log("Done with this task")
        
    })
})

console.log("Starting next task")

// Call back is must in the realFile and writeFile Functions as they are asynchronous

// once node js reads the asynchronous function like readFile or writeFile node will offload the task and put inside the queue.
// Then execute other synchronous code in the stack(LastInFirstOut)
// Once it completed executing the synchronous code it will start to execute the asynchrous code that is waiting in the queue(FirstInFirstOut)



