export default class CardForm {
    number: string
    expirationDate: string
    cvc: string

    constructor({number = '', expirationDate = '', cvc = ''} = {}) {
        this.number = number
        this.expirationDate = expirationDate
        this.cvc = cvc
    }
}
