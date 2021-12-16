const fs = require("fs");

var contentArr = fs.readFileSync("./data/day4", "utf8").split("\n");

var bingoNum = contentArr.filter((_) => {
  if (_.length > 20) return _;
});

var bingoRows = contentArr.filter((_) => {
  if (_.length == 14) return _;
});

//can now pop numbers
bingoNum = bingoNum.toString().split(",").reverse();

function renderBingoCard(rows, index) {
  var bingoCard = [];
  for (var i = index; i < index + 5; ++i) {
    bingoCard.push(rows[i]);
  }
  return bingoCard;
}

var maxIterator = bingoRows.length - 5;
for (var i = 0; i <= maxIterator; i += 5) {
  console.log("Round: " + i);
  checkBingo(renderBingoCard(bingoRows, i), bingoNum);
}

function checkBingo(card, numbers) {
  var row1 = card[0]
    .toString()
    .split(" ")
    .filter((_) => {
      if (_ != " ") {
        return _;
      }
    });
  var row2 = card[1]
    .toString()
    .split(" ")
    .filter((_) => {
      if (_ != " ") {
        return _;
      }
    });
  var row3 = card[2]
    .toString()
    .split(" ")
    .filter((_) => {
      if (_ != " ") {
        return _;
      }
    });
  var row4 = card[3]
    .toString()
    .split(" ")
    .filter((_) => {
      if (_ != " ") {
        return _;
      }
    });
  var row5 = card[4]
    .toString()
    .split(" ")
    .filter((_) => {
      if (_ != " ") {
        return _;
      }
    });

  var bingoCheck = Array(25);
  var numbersLength = numbers.length;
  // all numbers
  var from = 0;

  for (var i = 0; i < numbersLength; ++i) {
    // each row
    var number = numbers.pop();
    var index = row1.indexOf(number);
    if (index != -1) {
      bingoCheck[index] = "X";
    }
    index = row2.indexOf(number);
    if (index != -1) {
      bingoCheck[index + 5] = "X";
    }
    index = row3.indexOf(number);
    if (index != -1) {
      bingoCheck[index + 10] = "X";
    }
    index = row4.indexOf(number);
    if (index != -1) {
      bingoCheck[index + 15] = "X";
    }
    index = row5.indexOf(number);
    if (index != -1) {
      bingoCheck[index + 20] = "X";
    }
    // eval bingo
    if (i > 4) {
      var prospect = bingoCheck.indexOf("X", from);
      from = prospect + 1;

      if (
        bingoCheck[prospect + 1] == "X" &&
        bingoCheck[prospect + 2] == "X" &&
        bingoCheck[prospect + 3] == "X" &&
        bingoCheck[prospect + 4] == "X"
      ) {
        console.log("Horizontal bingo!\nStopped at " + (i + 1));
        break;
      } else if (
        bingoCheck[prospect + 5] == "X" &&
        bingoCheck[prospect + 10] == "X" &&
        bingoCheck[prospect + 15] == "X" &&
        bingoCheck[prospect + 20] == "X"
      ) {
        console.log("Vertical bingo!\nStopped at " + (i + 1));
        break;
      }
    }
  }
}
