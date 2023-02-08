const fs = require('fs');
const util = require('util');



const readFromFile = util.promisify(fs.readFile);
/**
 *  fx to write data to JSON file given a destination & content
 *  @param {string} destination file to write to
 *  @param {object} content content to write to file
 *  @returns {void} 
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
/**
 *  fx to read data from a file and append
 *  @param {object} content append to file
 *  @param {string} file path to save to
 *  @returns {void} 
 */
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };