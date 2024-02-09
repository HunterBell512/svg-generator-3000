const fs = require('fs');

function WriteToFile (dir, fileName, data) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    fs.writeFile(dir + fileName, data, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg!');
    })
}

module.exports = WriteToFile;