const EventEmitter = require("events")

const emitter = new EventEmitter()

// emitter.on("response", () => {
//     console.log("Emitter emitted the response")
// })


// emitter.emit("response")
// emitter.emit("response")


const http = require("http")
const server = http.createServer()

server.on("request", (req,res) => {
    console.log(req)
})

server.listen("8000")

// server.emit("request")