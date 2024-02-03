const Shape = require('./Shape');

class Circle extends Shape {
    constructor (text, color) {
        super(text, color);
    }

    render () {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}"/>`;
    }
}

module.exports = Circle;