const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if(err){
                reject(err)
                //return out of the function here to mkae sure the Promise doesn't accidentally execute the resolve() function as well
                return
            }

            //if everyhting went well, resolve the Promise and send the succesful data to the '.then()' method
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

const copyFile = () =>{
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if(err){
                reject(err)
                return
            }
            resolve({
                ok: true,
                message:'Stylesheet copied!'
            })
        })
    })
}

module.exports = {writeFile, copyFile}