const os = require("os");
// info about current user
console.log(os.userInfo());

// method to return system uptime
console.log(`System uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
