const fs = require("fs");

var contentArr = fs.readFileSync("./data/day2", "utf8").split("\r\n");

var horizontal = 0;
var depth = 0;
var aim = 0;

for (i in contentArr) {
  var direction = contentArr[i]
    .split(/\d/)
    .filter((n) => n)
    .join();
  var number = contentArr[i]
    .split(/\D/)
    .filter((n) => n)
    .join();

  direction = direction.trim();
  number = parseInt(number);

  //    forward X does two things:
  //    - It increases your horizontal position by X units.
  //    - It increases your depth by your aim multiplied by X.

  if (i < 1000) {
    if (direction == "forward") {
      if (aim > 0) {
        horizontal += number;
        depth = depth + aim * number;
      } else if (aim < 0) {
        horizontal += number;
        depth = depth - aim * number;
      } else {
        horizontal += number;
      }
    } else if (direction == "up") {
      aim -= number;
    } else {
      aim += number;
    }
  }
}

console.log(horizontal * depth);
