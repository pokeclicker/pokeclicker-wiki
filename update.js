const fs = require("fs");
const { version } = require('./pokeclicker/package.json');

console.log("Updating script version in index.html");
fs.readFile("index.html", function(err, buf) {
    if (err) return console.error('Error reading index.html', err);
    const fileContents = buf.toString();
    fs.writeFile("index.html", fileContents.replace(/\?v=[\d\.]+/g, `?v=${version}`), (err) => {
        if (err) return console.error('Error updating index.html', err);
        console.log("Successfully updated script version in index.html");
    });
});