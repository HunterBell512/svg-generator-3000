class Shape {
    constructor (text, textColor, color) {
        this.text = text;
        this.color = color;
        this.textColor = textColor;
    }

    render () {
        throw new Error('method \'render\' can only be invoked by child classes');
    }

    setText (text) {
        this.text = text;
    }

    setTextColor (color) {
        this.textColor = color;
    }

    setColor (color) {
        this.color = color;
    }

}

module.exports = Shape;