const fs = require('fs');

function writeDataToFile(filename, data) {
  fs.writeFileSync(filename, data, function(err) {
    if (err) {
      console.log(err);
    }
  });
}