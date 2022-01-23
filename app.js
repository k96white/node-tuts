const _ = require("lodash");
console.log(_.chunk([1, 2, 3, 4, 5, "abc"], 3));
console.log("Compact method : ", _.compact([0, 1, 2, 3, 4, false]));
const items = [1, [2, [3, [4]], 5]];
console.log("Flattened array : ", _.flattenDeep(items));
