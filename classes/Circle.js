const Shape = require('./Shape');

class Circle extends Shape {
    constructor (text, textColor, color) {
        super(text, textColor, color);
    }

    render () {
        return `    <circle cx="150" cy="100" r="80" fill="${this.color}"/>
    <text x="50%" y="50%" font-size="60" dy=".3em" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = Circle;