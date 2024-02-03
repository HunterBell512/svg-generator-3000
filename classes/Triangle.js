const Shape = require('./Shape');

class Triangle extends Shape {
    constructor (text, color) {
        super(text, color);
    }

    render () {
        return `<polygon points="100, 0 200, 173 0, 173" fill="${this.color}"/>`;
    }
}

module.exports = Triangle;