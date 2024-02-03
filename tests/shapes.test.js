const Shape = require('../classes/Shape');
const Triangle = require('../classes/Triangle');
const Circle = require('../classes/Circle');
const Square = require('../classes/Square');

describe('Shape', () => {
    describe('render', () => {
        it('should fail if the render method is invoked from the parent class', () => {
            const shape = new Shape();
            const test = () => {
                shape.render();
            }
            expect(test).toThrow(Error);
        });
    });
});

describe('Triangle', () => {
    describe('setColor', () => {
        it('should set the color to blue', () => {
            const tri = new Triangle();

            tri.setColor('blue');

            expect(tri.render()).toEqual('<polygon points="100, 0 200, 173 0, 173" fill="blue"/>')
        });
    });

    describe('setColor', () => {
        it('should set the color to red', () => {
            const tri = new Triangle();

            tri.setColor('red');

            expect(tri.render()).toEqual('<polygon points="100, 0 200, 173 0, 173" fill="red"/>')
        });
    });

    describe('setColor', () => {
        it('should set the color to green', () => {
            const tri = new Triangle();

            tri.setColor('green');

            expect(tri.render()).toEqual('<polygon points="100, 0 200, 173 0, 173" fill="green"/>')
        });
    });
});

describe('Circle', () => {
    describe('setColor', () => {
        it('should set the color to blue', () => {
            const circle = new Circle();

            circle.setColor('blue');

            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue"/>')
        });
    });

    describe('setColor', () => {
        it('should set the color to red', () => {
            const circle = new Circle();

            circle.setColor('red');

            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="red"/>')
        });
    });

    describe('setColor', () => {
        it('should set the color to green', () => {
            const circle = new Circle();

            circle.setColor('green');

            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="green"/>')
        });
    });
});

describe('Square', () => {
    describe('setColor', () => {
        it('should set the color to blue', () => {
            const square = new Square();

            square.setColor('blue');

            expect(square.render()).toEqual('<rect width="200" height="200" fill="blue"/>')
        });
    });

    describe('setColor', () => {
        it('should set the color to red', () => {
            const square = new Square();

            square.setColor('red');

            expect(square.render()).toEqual('<rect width="200" height="200" fill="red"/>')
        });
    });

    describe('setColor', () => {
        it('should set the color to green', () => {
            const square = new Square();

            square.setColor('green');

            expect(square.render()).toEqual('<rect width="200" height="200" fill="green"/>')
        });
    });
});