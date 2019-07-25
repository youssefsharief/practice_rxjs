function bufferCountClosure(num: number) {
    let arr: string[] = []
    let index = 0
    return (data: string) => {
        index += 1
        if (index % num === 0) {
            const arrToReturn = [...arr, data]
            arr = []
            return arrToReturn
        } else {
            arr.push(data)
            return undefined
        }
    }
}
const c = bufferCountClosure(3)
c('e') /*? $ */
c('b') /*? $ */
c('z') /*? $ */
c('r') /*? $ */
c('w') /*? $ */
c('k') /*? $ */