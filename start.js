/*
WATCH FOR CHANGES TO OUR SCRIPTS
*/
var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');

var b = browserify({
  entries: ['scripts/main.js'],
  cache: {},
  packageCache: {},
  plugin: [watchify]
});

b.on('update', bundle);
bundle();

function bundle() {
  b.bundle()
    .on('error', console.error)
    .pipe(fs.createWriteStream('bundle.js'))
  ;
}

/*
RUN OUR LOCAL SERVER
*/
const FiveServer = require('five-server').default
new FiveServer().start();
