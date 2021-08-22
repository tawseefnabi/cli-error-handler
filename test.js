const handleError = require("./index.js");

const err = new Error([`Something went wrong!`]);
console.log('err', err);
handleError(`Got an error`, err);