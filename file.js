const fs = require('fs')
// reading a file text

const readText=fs.readFileSync('./T/read.txt','utf-8')

// erittinf a text 
const weritrtext = fs.writeFileSync('./T/erite.txt',readText + 'this is ar ')
console.log(readText)
console.log(weritrtext)
