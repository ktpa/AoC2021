const fs = require("fs");

var counter = 0;

var contentArr = fs
  .readFileSync("./data/day1", "utf8")
  .split("\n")
  .map((_) => parseInt(_, 10));

/* for (var i = 0; i < contentArr.length; ++i) {
  if (contentArr[i] > contentArr[i - 1]) {
    counter++;
  }
}*/

var value1 = 0;
var value2 = 0;
// Part 2
for (var i = 0; i < contentArr.length - 2; ++i) {
  value1 = contentArr[i] + contentArr[i + 1] + contentArr[i + 2];
  value2 = contentArr[i + 1] + contentArr[i + 2] + contentArr[i + 3];
  if (value2 > value1) {
    counter++;
  }
  value1 = 0;
  value2 = 0;
}
console.log(counter);

/*console.log(
  fs
    .readFileSync("./data/day1", "utf8")
    .split("\n")
    .map((_) => parseInt(_, 10))
    .filter((value, i, array) => {
      return value > array[i - 1];
    }).length
);*/
