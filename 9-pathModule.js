const path = require("path");

console.log("Path Seperator : " + path.sep);

const filePath = path.resolve(__filename);
const dirPath = path.resolve(__dirname);
const joinedPath = path.join(path.resolve(__dirname), path.basename(__filename));

console.log("File Path : " + filePath);
console.log("Directory Path : " + dirPath);
console.log("Absolute Path : " + joinedPath);

const basenameOfFilePath = path.basename(__filename);
const basenameOfDirPath = path.basename(__dirname);

console.log(`The base name of the file path is ${basenameOfFilePath} & \nThe base of the directory path is ${basenameOfDirPath} 😎`)