const { writeFileSync, unlinkSync } = require("fs")

for (let i = 0; i < 10000; i++)
{
    writeFileSync("./textFiles/bigFile.txt", `HelloWorld${i}\n`, { flag: "a" })
   
}

 unlinkSync("./textFiles/bigFile.txt")