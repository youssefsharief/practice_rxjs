const Rx = require('rxjs')

const faker = require('faker')

const sub = new Rx.Subject()
const zero = () => new Promise((res, rej) => setTimeout(() => res(0), 200))
const one = () => new Promise((res, rej) => setTimeout(() => res(1), 150))
const two = () => new Promise((res, rej) => setTimeout(() => res(2), 500))
const three = () => new Promise((res, rej) => setTimeout(() => res(3), 650))
const four = () => new Promise((res, rej) => setTimeout(() => res(4), 980))
const five = () => new Promise((res, rej) => setTimeout(() => res(5), 30))
const six = () => new Promise((res, rej) => setTimeout(() => res(6), 50))
const seven = () => new Promise((res, rej) => setTimeout(() => res(7), 10))
const eight = () => new Promise((res, rej) => setTimeout(() => res(8), 300))
const nine = () => new Promise((res, rej) => setTimeout(() => res(9), 100))
const ten = () => new Promise((res, rej) => setTimeout(() => res(10), 600))

let i = 0
// setInterval(() => {
//     if (i === 11) {i=0}
//     sub.next({ name: faker.name.firstName(), payload: { blabla: faker.commerce.color() }, sequence: i++ })
// }, 5)

// console.log(Date.now()%2)


sub.throttle().subscribe(async e=>{
    switch (e.sequence) {
        case 0: return console.log(await zero())
        case 1: return console.log(await one())
        case 2: return console.log(await two())
        case 3: return console.log(await three())
        case 4: return console.log(await four())
        case 5: return console.log(await five())
        case 6: return console.log(await six())
        case 7: return console.log(await seven())
        case 8: return console.log(await eight())
        case 9: return console.log(await nine())
        case 10: return console.log(await ten())
    }
    
})

// //emit value every 1 second
// const source = Rx.Observable.interval(1000);
// //throttle for 2 seconds, emit latest value
// const example = source.throttle(val => Rx.Observable.interval(5000));
// //output: 0...3...6...9
// const subscribe = example.subscribe(val => console.log(val));
