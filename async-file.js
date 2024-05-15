const fs = require('fs')

fs.readFile('./T/read.txt','utf-8',(err,data)=>{
    if(err){
        throw Error('Error reading text')
    }console.log(data)
    // writing asnconasli

    fs.writeFile('./T/red.txt',data,'utf-8',(err)=>{
        if(err){
            throw Error('Error reading')
        }
    })
})