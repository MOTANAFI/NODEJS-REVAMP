import { error } from "console"
import fs from "fs/promises"

//readFile -- callback

// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

// readFileSync -- synchronous version

// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data)

// readFile() -- Promise .then()

// fs.readFile('./test.txt', 'utf8')
// .then(data => console.log(data)).catch(err => console.log(err))

// readFile() -- async/await

const readFile = async () => {
    try{
        const data = await fs.readFile('./test.txt', 'utf8')
        console.log(data)

    }catch(error) {
        console.log(error)
    }
}

// wwriteFile();

const writeFile = async () => {
    try{
        await fs.writeFile('./test.txt', 'Hello, i am writing to the file')
        console.log('File written to.')
    }catch(error){
        console.log(error)
    }
}
//appenFile() 

const appenFile = async () => {
    try{
        await fs.appendFile('./test.txt', '\nThis is appended text')
        console.log('file appended to...c')
    }catch(error){console.log(error)}
}
writeFile()
appenFile()
readFile()