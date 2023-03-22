const http = require("http");

const server = http.createServer((req, res) => {
    // prints the request url
    url = req.url;

    if (url === "/favicon.ico") {
        url = "/"
    }

    else if (url === "/") {
        
        res.end("Welcome to our homepage")
    }
    else if(url === "/about") {
        res.end("Wecome to our about page")
    }

    else{
        res.end(`<h1>Oops!</h1>
                <p>We can't seem to find the page you are looking for</p>
                <a href="/">Click to go back to home page</a>`)
    // res.write("Welcome to our page")
    // console.log(req) prints the huge request object
    // res.end()
        }
});

server.listen(4000, () => {
    console.log("Server is listening in port 4000")
})

// ------------------------------------------------

// const http = require("http")

// const requestListener = (req,res) => {
//     let url = req.url;
//     if (url == "/favicon.ico")
//     {
//         url = "/"
    
//     }
//     else if (url == "/")
//     {
//         console.log("request event")
//         res.end("This is my home page")
//     }
//     else if (url == "/about")
//     {
//         res.end("This is my about page")
//     }
//     else {
//         res.end(`<h1>Page Not Found</h1>`)
//     }
// }

// const server = http.createServer(requestListener)
// const PORT = 8080;

// server.listen(PORT, () => {
//     console.log(`Server is listening at port ${PORT}`)
// })

// ------------------------------------------------------------

// const http = require("http");
// let count = 0;

// const requestListener = (req, res) => {
//     count += 1;
//     console.log("request count sent to the server is "+count)
//     let url = req.url
//     if (url == "/favicon.ico") 
//     {
//         url = "/"
//     }
//     else if (url == "/" || url == "/home")
//     {
//         res.end("<h1>This is the home page</h1>")
//     }
//     else if (url == "/about")
//     {
//         // Blocking Code 
//         for (let i = 0; i < 1000; i++){
//             for (let j = 0; j < 1000; j++)
//             {
//                console.log(`${i}${j}`)
//             }
//         }
//         res.end("<h1>This is the about page</h1>")
//     } 
//     else if (url == "/others")
//     {
//         res.end("<h1>This is the others page</h1>")
//     }
//     else
//     {
//        res.end("<h1>Page not found</h1>") 
//     }
// }

// const server = http.createServer(requestListener)

// server.listen(5000, () => {
//     console.log("Server is listening in the port 5000")
// })