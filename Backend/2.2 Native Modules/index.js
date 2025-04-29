// const fs = require('fs');

import { readFile } from 'fs';

// fs.writeFile("message.txt","Hello From NodeJS!", (err) =>{
//     if (err) throw err;
//     console.log("File has been saved")
// });

readFile('./message.txt',"utf-8", (err, data) => {
    if (err) throw err;
    console.log(data)
});