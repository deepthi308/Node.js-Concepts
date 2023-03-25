const http = require("http")
const fs = require("fs")
const env = require("dotenv").config()
// const url = require("url")
const requestListener = (req, res) => {
    console.log(req.url)
    const url = req.url
    if (url === "/")
    {
        // res.statuscode("404")
        const text = fs.readFileSync("./textFiles/FirstSecondText.txt", "utf-8")
       res.end(text) 
    }
}

const server = http.createServer(requestListener)

const port = process.env.PORT
const hostname = process.env.HOST_NAME



server.listen(port, hostname, () => {
    console.log(`server is listening on ${hostname}:${port}`)
})