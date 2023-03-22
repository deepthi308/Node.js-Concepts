const { readFile, writeFile } = require("fs")
const { reject } = require("lodash")
const { join, resolve } = require("path")
const util = require("util");

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const path1 = join("./textFiles", "firstText.txt")
const path2 = join("./textFiles", "secondtText.txt")
const path3 = join("./textFiles", "FirstSecondText.txt")
const path4 = join("./textFiles", "eventLoop.txt")
const path5 = join("./textFiles", "fileFour.txt")


const startReading = async () => {
    try {
    const first = await readFilePromise(path1, "utf-8")
    const second = await readFilePromise(path2, "utf-8")
    const third = await readFilePromise(path3, "utf-8")
    const fourth = await readFilePromise(path4, "utf-8")
    const fifth = await writeFilePromise(path5, `File1 : ${first}\n\nFile2 : ${second}\n\nFile3 : ${third}\n\nFile4 : ${fourth}\n`)
    // console.log(first, second, third, fourth, fifth)
    }
    catch (err) {
        console.log(err)
    }
    
}

startReading()

// let resultText = ""

// const getText = (...paths) => {
//     paths.forEach((path) => {
//         readFile( path , "utf-8", ((err, result) => {
//     if (err) {
//         throw err
//     }
//     else {
//         // console.log(result)
//         // result = result + "\n"
//         resultText += `${result}\n`
//     }
//     console.log(resultText)
// }))
// })
// }

// const getText = (path) => {
//     // console.log(paths) => internally the var args parameter will be converted into an array
//     return new Promise((resolve, reject) => {
    
//     readFile( path , "utf-8", ((err, data) => {
//     if (err) {
//         reject(err)
//     }
//     else {
//        resolve(data)
//     }
//     // console.log(resultText)
//     }))
    
//     })
// }




// getText(path1).then((result)=>console.log(result)).catch((err)=>console.log(err))


