const { Circle, Square, Triangle } = require('../classes');
const WriteToFile = require('./WriteToFile');
const GenerateSVG = require('./GenerateSVG');
const fs = require('fs');

function GenerateSamples () {
    const dir = './samples';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    const shapes = [
        {
            text: 'RMG',
            textColor: "cyan",
            shape: 'Circle',
            shapeColor: "purple"
        },
        {
            text: 'JSQ',
            textColor: "white",
            shape: 'Square',
            shapeColor: "red"
        },
        {
            text: 'SQL',
            textColor: "blue",
            shape: 'Triangle',
            shapeColor: "yellow"
        }
    ];

    shapes.forEach(element => {
        WriteToFile(dir, `/${element.shape}.svg`, GenerateSVG(element));
        console.log(`samples generated for ${element.shape}`);
    });
}

GenerateSamples();
