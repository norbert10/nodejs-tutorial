const {readFileSync, writeFileSync} = require('fs')
for(let i=0; i<=1000; i++){
    writeFileSync('./myfolder/subfolder/written-stream.txt', `Helloo world ${i}\n`, {flag: 'a'})
}