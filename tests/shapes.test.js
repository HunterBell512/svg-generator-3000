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
    describe('Object Creation', () => {
        it('create an object with that matches the output parameters', () => {
            const tri = new Triangle('svg', 'white', 'blue');

            expect(tri.render()).toEqual(`    <polygon points="150, 0 250, 173 50, 173" fill="blue"/>
    <text x="50%" y="50%" dy=".8em" font-size="60" text-anchor="middle" fill="white">svg</text>`)
        });
    });

    describe('Object Creation', () => {
        it('create an object with that matches the output parameters', () => {
            const tri = new Triangle('svg', 'white', 'red');

            expect(tri.render()).toEqual(`    <polygon points="150, 0 250, 173 50, 173" fill="red"/>
    <text x="50%" y="50%" dy=".8em" font-size="60" text-anchor="middle" fill="white">svg</text>`)
        });
    });

    describe('Object Creation', () => {
        it('create an object with that matches the output parameters', () => {
            const tri = new Triangle('svg', 'white', 'green');

            expect(tri.render()).toEqual(`    <polygon points="150, 0 250, 173 50, 173" fill="green"/>
    <text x="50%" y="50%" dy=".8em" font-size="60" text-anchor="middle" fill="white">svg</text>`)
        });
    });
});

describe('Circle', () => {
    describe('Object Creation', () => {
        it('create an object with that matches the output parameters', () => {
            const circle = new Circle('svg', 'white', 'blue');

            expect(circle.render()).toEqual(`    <circle cx="150" cy="100" r="80" fill="blue"/>
    <text x="50%" y="50%" font-size="60" dy=".3em" text-anchor="middle" fill="white">svg</text>`)
        });
    });

    describe('Object Creation', () => {
        it('create an object with that matches the output parameters', () => {
            const circle = new Circle('svg', 'white', 'red');

            expect(circle.render()).toEqual(`    <circle cx="150" cy="100" r="80" fill="red"/>
    <text x="50%" y="50%" font-size="60" dy=".3em" text-anchor="middle" fill="white">svg</text>`)
        });
    });

    describe('Object Creation', () => {
        it('create an object with that matches the output parameters', () => {
            const circle = new Circle('svg', 'white', 'green');

            expect(circle.render()).toEqual(`    <circle cx="150" cy="100" r="80" fill="green"/>
    <text x="50%" y="50%" font-size="60" dy=".3em" text-anchor="middle" fill="white">svg</text>`)
        });
    });
});

describe('Square', () => {
    describe('Object Creation', () => {
        it('create an object with that matches the output parameters', () => {
            const square = new Square('svg', 'white', 'blue');

            expect(square.render()).toEqual(`    <rect width="200" height="200" x="50" fill="blue"/>
    <text x="50%" y="50%" font-size="60" dy=".3em" text-anchor="middle" fill="white">svg</text>`)
        });
    });

    describe('Object Creation', () => {
        it('create an object with that matches the output parameters', () => {
            const square = new Square('svg', 'white', 'red');

            expect(square.render()).toEqual(`    <rect width="200" height="200" x="50" fill="red"/>
    <text x="50%" y="50%" font-size="60" dy=".3em" text-anchor="middle" fill="white">svg</text>`)
        });
    });

    describe('Object Creation', () => {
        it('create an object with that matches the output parameters', () => {
            const square = new Square('svg', 'white', 'green');

            expect(square.render()).toEqual(`    <rect width="200" height="200" x="50" fill="green"/>
    <text x="50%" y="50%" font-size="60" dy=".3em" text-anchor="middle" fill="white">svg</text>`)
        });
    });
});