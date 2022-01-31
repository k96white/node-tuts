const Eventemits = require("events");
const customEmitter = new Eventemits();
customEmitter.on("show", (arg1, arg2) => {
  console.log("Event has been called");
  console.log(arg1 + " " + arg2);
});
customEmitter.emit("show", "arg1", "Arg2");
