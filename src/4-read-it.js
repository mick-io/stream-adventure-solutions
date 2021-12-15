const stream = require("stream");

class MyStream extends stream.Readable {
  _read() {
    return {};
  }
}

const myStream = new MyStream();
const content = process.argv[2];

myStream.push(content);
myStream.pipe(process.stdout);
