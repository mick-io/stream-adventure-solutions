const fs = require("fs");

const fpath = process.argv[2];

fs.createReadStream(fpath).pipe(process.stdout);
