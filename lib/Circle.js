const Shape = require('./Shape');

class Circle extends Shape {
    constructor (text, color) {
        super(text, color);
    }

    render () {
        return 0;
    }
}

module.exports = Circle;