const Shape = require('./Shape');

class Square extends Shape {
    constructor (text, textColor, color) {
        super(text, textColor, color);
    }

    render () {
        return `    <rect width="200" height="200" x="50" fill="${this.color}"/>
    <text x="50%" y="50%" font-size="60" dy=".3em" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = Square;