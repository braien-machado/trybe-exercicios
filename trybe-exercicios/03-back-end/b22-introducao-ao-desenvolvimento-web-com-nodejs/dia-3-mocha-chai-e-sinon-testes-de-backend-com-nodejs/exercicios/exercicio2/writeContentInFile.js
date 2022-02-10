const fs = require('fs');

function writeContentInFile(path, content) {
  try {
    fs.writeFileSync(path, content);
    return 'ok';
  } catch (error) {
    console.log(error);
  }
}

module.exports = writeContentInFile;