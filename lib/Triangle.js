const Shape = require('./Shape');

class Triangle extends Shape {
    constructor (text, color) {
        super(text, color);
    }

    render () {
        return 0;
    }
}

module.exports = Triangle;