const { winston } = global;
const fs = require("fs");
const utils = {};

utils.echoLog = (...args) => {
  if (process.env.SHOW_LOG === "true") {
    try {
      winston.info(args);
    } catch (e) {
      winston.log(e);
    }
  }
  // }
};

utils.empty = (mixedVar) => {
  let key;
  let i;
  let len;
  const emptyValues = ["undefined", null, false, 0, "", "0"];
  for (i = 0, len = emptyValues.length; i < len; i++) {
    if (mixedVar === emptyValues[i]) {
      return true;
    }
  }
  if (typeof mixedVar === "object") {
    for (key in mixedVar) {
      return false;
    }
    return true;
  }

  return false;
};

utils.slugText = (text) => {
  if (text) {
    let str = text;
    //replace all special characters | symbols with a space
    str = str
      .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,<>?\s]/g, " ")
      .toLowerCase();

    // trim spaces at start and end of string
    str = str.replace(/^\s+|\s+$/gm, "");

    // replace space with dash/hyphen
    str = str.replace(/\s+/g, "-");

    return str;
  } else {
    return null;
  }
};
module.exports = utils;
