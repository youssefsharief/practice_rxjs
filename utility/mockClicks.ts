import  {EventEmitter} from 'events'

export const emitter = new EventEmitter();



export function clickButtonLikeAKid() {
    const min = 1;
    const max = 3;
    const rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
    emitter.emit('buttonClicked', 'c')
    setTimeout(clickButtonLikeAKid, rand * 1000);
}


