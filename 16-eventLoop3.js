// Javascript doesn't have any asynchronous stuff
// But the environment in which javascript runs will provide all the asynchrous stuff
//All the asynchronous stuff that we have seen earlier like fetch, setTimeout and setInterval are the api provided by the browser and javascrript have acess to all these stuff

setInterval(() => {
    console.log("Hello and It takes me 2s to tell you Hello")
}, 2000);
console.log("No matter how far I am from the top I will run first because I am synchronous")

//This function will be called every 2seconds.
// In order to kill the process use control+c keyboard shortcut
// unexpected error