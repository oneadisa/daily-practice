// Write class below
class ShiftCipher {
    constructor (shift) {
        this._shitft = shift
    }

    get shift () {
        return this._shift
    }

    encrypt (message) {
        let capitalise = message.toUpperCase()
        let messageArray = capitalise.split('')
        let charArray = []
        for (let i = 0; i < capitalise.length; i++) {
            charArray.push(capitalise.charCodeAt(i))
        }
        let charShiftArray = charArray.map(char => char + this._shift)

        let shiftedLetterArray = charShiftArray.map(char => String.fromCharCode(char))

        const encryptedMessage = shiftedLetterArray.join('')

        return encryptedMessage.toLowerCase()
    }

    decrypt (message) {
        let capitalise = message.toUpperCase()
        let messageArray = capitalise.split('')
        let charArray = []
        for (let i = 0; i < capitalise.length; i++) {
            charArray.push(capitalise.charCodeAt(i))
        }
        let charShiftArray = charArray.map(char => char - this._shift)

        let shiftedLetterArray = charShiftArray.map(char => String.fromCharCode(char))

        const decryptedMessage = shiftedLetterArray.join('')

        return decryptedMessage.toLowerCase()
    }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'
