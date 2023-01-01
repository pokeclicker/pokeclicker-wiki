const fs = require('fs');
const { version } = require('./pokeclicker/package.json');

console.log('Updating script version in index.html');

// Get the index file
fs.readFile("index.html", function(err, buf) {
    // Something went wrong loading the index file
    if (err) return console.error('Error reading index.html', err);
    const fileContents = buf.toString();

    // Replace version numbers in file
    fs.writeFile('index.html', fileContents.replace(/\?v=[\d\.]+/g, `?v=${version}`), (err) => {
        if (err) return console.error('Error updating index.html', err);
        console.log('Successfully updated script version in index.html');
    });
});

const glob = require('glob');

console.log('Updating symlinks for images');

// Get all our image files
glob('pokeclicker/docs/assets/images/**/*', (err, res) => {
    if (err) {
        console.error('Error getting images for symlinks', err);
    } else {
      res.forEach(filePath => {
        // Get the file name
        const fileName = filePath.replace(/.*\//, '');

        // Ignore any files just named after IDs
        if (/^-?\d+(-?\w)?\./.test(fileName)) return;

        // Create a symlink
        fs.symlink(`../${filePath}`, `./images/${fileName}`, 'file', (err) => {
            // No error or File already exist
            if (!err || err.code == 'EEXIST') return;
            // Permissions error, run as admin
            if (err.code == 'EPERM') {
                console.error('Permission error creating file, may need to open admin console.');
                process.exit();
            }
            // Unknown error, guess it will need to be dealt with
            console.error('Error updating symlink', err);
        });
      });
      console.log('Successfully updated symlinks for images');
    }
});

