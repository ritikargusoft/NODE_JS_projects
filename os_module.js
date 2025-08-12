const os = require('os');

console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log(`Uptime: ${os.uptime()} seconds`);