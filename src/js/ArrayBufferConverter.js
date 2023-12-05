export default class ArrayBufferConverter {

    load(buffer) {
        this.bufferview = new Uint16Array(buffer)
    }

    toString() {
        let arr = [];
        for (let i = 0; i < this.bufferview.length; i++) {
            arr.push(String.fromCharCode(this.bufferview[i]))
        }
        return arr.join('')
    }
}