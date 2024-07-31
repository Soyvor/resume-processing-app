const pdf = require('pdf-parse');
const fs = require('fs');

const extractTextFromPDF = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        return reject(err);
      }
      pdf(data).then(result => {
        resolve(result.text);
      }).catch(err => {
        reject(err);
      });
    });
  });
};

module.exports = { extractTextFromPDF };
