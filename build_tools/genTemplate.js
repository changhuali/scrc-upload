const fs = require('fs');
const path =require('path');
const MT = require('mark-twain');


const mdPath = path.join(__dirname, '../README.md');
const jsonPath = path.join(__dirname, '../demo/Md.js');

const jsonML = MT(fs.readFileSync(mdPath).toString());
fs.writeFile(jsonPath, `export default ${JSON.stringify(jsonML, null, 2)}`, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('generating jsonML success');
}); 
