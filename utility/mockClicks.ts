import  {EventEmitter} from 'events'

export const emitter = new EventEmitter();



export function clickButtonLikeAKid() {
    const min = 0.2;
    const max = 1;
    const rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
    emitter.emit('buttonClicked')
    setTimeout(clickButtonLikeAKid, rand * 1000);
}


