const { readFile, writeFile } = require('fs')

//Get file using promise

const getFile = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {

                resolve(data)
            }
        })
    })
}

getFile('./myfolder/subfolder/file.txt')
.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err)
})