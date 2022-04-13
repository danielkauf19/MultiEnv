const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
const fileName = './app.json';
const file = require(fileName);

const env = argv.env;

file.svgAppIcon.foregroundPath = `./icons/${env}/icon.svg`;
file.svgAppIcon.androidOutputPath = `./android/app/src/${env}/res`;

fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(file));
  console.log('writing to ' + fileName);
});
