// This is a failure

function* bufferCountGenerator(num: number, wholeInputArr: string[]) {
    let arrToReturn = []
    for (let index = 0; index < wholeInputArr.length; index++) {
        const element = wholeInputArr[index];
        if (index % num === 0) {
            yield [...arrToReturn, element]
            arrToReturn = []
        } else {
            console.log('a')
            arrToReturn.push(element)
            yield undefined
        }
    }    
}
const d = bufferCountGenerator(3, ['w', 'a', 's', 'b', 'r', 'v', 'e', 'p', 'l', 'e', 'l', 'i', 's']) 
d.next('asa').value /*? $ */
d.next().value /*? $ */
d.next().value /*? $ */
d.next().value /*? $ */
d.next().value /*? $ */
d.next().value /*? $ */
d.next().value /*? $ */
d.next().value /*? $ */
d.next().value /*? $ */
d.next().value /*? $ */

