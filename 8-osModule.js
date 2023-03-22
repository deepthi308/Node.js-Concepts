
const os = require("os");

console.log(os.userInfo());

const uptime = os.uptime()

console.log(`Your system's uptime is ${uptime}`)

const currentOs = {
    "name": os.type(),
    "release": os.release(),
    "hostname": os.hostname(),
    "machineType": os.machine(),
    "homeDir": os.homedir(),
    "platform": os.platform(),
    "version": os.version()
}

    
Object.entries(currentOs).map(property=> console.log(property))

const items = {
  'first': new Date(),
  'second': 2,
  'third': 'test'
}

Object.entries(items).map(item => {
  console.log(item)
})

console.log("-------------------------")

console.log(currentOs)