import {EventEmitter} from 'events'


const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello world ' + name)
}

function goodbyHandler(name) {
    console.log('Good by ' + name)
}

// registere event listener

myEmitter.on('greet', greetHandler)
myEmitter.on('goodby', goodbyHandler)


//Emiit events
myEmitter.emit('greet', 'john')
myEmitter.emit('goodby', 'john')

// Error handling 

myEmitter.on('error', (error) => {
    console.log('An Error Occurred', error)
})

myEmitter.emit('error', new Error('something went wrong'))