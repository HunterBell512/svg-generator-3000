const Shape = require('./Shape');

class Square extends Shape {
    constructor (text, color) {
        super(text, color);
    }

    render () {
        return 0;
    }
}

module.exports = Square;