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