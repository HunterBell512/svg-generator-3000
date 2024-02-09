const Shape = require('./Shape');

class Triangle extends Shape {
    constructor (text, textColor, color) {
        super(text, textColor, color);
    }

    render () {
        return `    <polygon points="150, 0 250, 173 50, 173" fill="${this.color}"/>
    <text x="50%" y="50%" dy=".8em" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = Triangle;