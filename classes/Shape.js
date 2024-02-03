class Shape {
    constructor (text, color) {
        this.text = text;
        this.color = color;
    }

    render () {
        throw new Error('method \'render\' can only be invoked by child classes');
    }

    setColor (color) {
        this.color = color;
    }

    setText (text) {
        this.text = text;
    }
}

module.exports = Shape;