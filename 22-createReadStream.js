const http = require("http")
const env = require("dotenv").config()
const port = process.env.PORT
const hostname = process.env.HOST_NAME
const fs = require("fs")


const requestListener = (req, res) => {
    // console.log("requested")
    //const stream = fs.createReadStream("./textFiles/bigFile.txt") //Reading without utf-8 encoding will return buffer

    const stream = fs.createReadStream("./textFiles/bigFile.txt", "utf-8", {

    })

    stream.on("open", () => {
        stream.pipe(res)
    })

    // stream.on("data", (result) => {
    //     // console.log(result)
    //     res.setHeader("Content-type","text/html")
    //     res.end(result)
    // })

    stream.on("error", (err) => {
        console.log(err.message)
    })
    
}

const server = http.createServer(requestListener)

server.listen(port, hostname, () => {
    console.log(`server is listening on ${hostname}:${port}`)
})