const dgram = require('dgram');
const message = Buffer.from('Some bytes');
const client = dgram.createSocket('udp4');
let index = 0;
setInterval(function () {
  client.send(message, 41234, 'localhost', (err) => {
    if(err) throw err.message;
    console.log(`-----> ${index++}`);
  });
},1000);