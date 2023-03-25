const { createReadStream } = require("fs")


// default 64kb
// last buffer - remainder
// highWaterMark - control size

const stream = createReadStream("./textFiles/firstText.txt", {
    highWaterMark: 90000,
    encoding: "utf-8"
} )

stream.on("data", (result) => {
    console.log(result)
})

stream.on("error", (err) => {
    console.log(err.message)
})