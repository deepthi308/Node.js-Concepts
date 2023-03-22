const fs = require("fs");
const path = require('path');
// Now I am going to destructure the needed functions from the fs module

const { readFileSync, writeFileSync, readFile, writeFile } = fs;

const filePath = __filename

// setting the file path
const firstFile = path.join(__dirname, "textFiles", "firstText.txt")
const secondFile = path.join(__dirname, "textFiles", "secondtText.txt")
const thirdFile = path.join(__dirname, "textFiles", "FirstSecondText.txt")

console.log(firstFile);

// writing in two files
writeFileSync(firstFile, "Hello This is my first file");
writeFileSync(secondFile, "Hello This is my second file");

// reading those two files and storing it it separate variables 
const first = readFileSync(firstFile, "utf-8")
const second = readFileSync(secondFile, "utf-8")

// Writing those variable in a third file
writeFileSync(thirdFile, `${first}\n${second}`)

// Appending to the third file without overriding the original text
writeFileSync(thirdFile, "\nJust appending this text to the original text", { flag: "a" })

// Reading the third file without encoding (utf-8) => This will give you a buffer

const buffer = readFileSync(thirdFile);

// console.log(buffer) //Printing the buffer in the terminal

// Reading the same third file with utf-8 encoding this will return the human readable text
const thirdFileText = readFileSync(thirdFile, "utf-8")

//console.log(thirdFileText); //This will print the actual text

// readFileSync()