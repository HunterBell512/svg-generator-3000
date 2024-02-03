class Shape {
    constructor (text, color) {
        this.text = text;
        this.color = color;
    }

    render () {
        throw new Error('method \'render\' can only be invoked by child classes');
    }
}

module.exports = Shape;