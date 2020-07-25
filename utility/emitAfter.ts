import  {EventEmitter} from 'events'

export const emitter = new EventEmitter();



export function emitAfter(milliseconds) {
    setTimeout(() =>emitter.emit('buttonClicked'), milliseconds)
}


