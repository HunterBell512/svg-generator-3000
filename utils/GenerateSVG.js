const { Circle, Square, Triangle } = require('../classes');

function GenerateSVG (data) {
    let shape;

    if (data.shape === 'Circle') {
        shape = new Circle(data.text, data.textColor, data.shapeColor);
    } else if (data.shape === 'Square') {
        shape = new Square(data.text, data.textColor, data.shapeColor);
    } else {
        shape = new Triangle(data.text, data.textColor, data.shapeColor);
    }

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${shape.render()}
</svg>`
}

module.exports = GenerateSVG;