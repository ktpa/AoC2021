const fs = require("fs");

var contentArr = fs.readFileSync("./data/day3", "utf8").split("\r\n");
var posArr = [];
var binary = [];

function pushToArray(pos) {
  for (i in contentArr) {
    posArr.push(parseInt(contentArr[i].charAt(pos)));
  }
  var zero = 0;
  var one = 0;
  for (i in posArr) {
    if (posArr[i] === 0) {
      zero++;
    } else {
      one++;
    }
  }
  posArr = [];
  if (zero > one) {
    zero = 0;
    one = 0;
    return 0;
  } else {
    zero = 0;
    one = 0;
    return 1;
  }
}
function getBinary() {
  for (var i = 0; i < contentArr[0].length; ++i) {
    binary.push(pushToArray(i));
  }
}

getBinary();
var num1 = parseInt(binary.join(""), 2);
for (i in binary) {
  if (binary[i] === 0) {
    binary[i] = 1;
  } else {
    binary[i] = 0;
  }
}
var num2 = parseInt(binary.join(""), 2);

console.log(num1 * num2);
