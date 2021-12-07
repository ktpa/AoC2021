const fs = require("fs");

var contentArr = fs.readFileSync("./data/day4", "utf8").split("\r\n");

var bingoNum = contentArr.filter((_) => {
  if (_.length > 20) return _;
});

var bingoRows = contentArr.filter((_) => {
  if (_.length == 14) return _;
});

//can now pop numbers
bingoNum = bingoNum.toString().split(",").reverse();

bingoCard = renderBingoCard(bingoRows, 0);
function renderBingoCard(rows, index) {
  var bingoCard = [];
  for (var i = index; i < index + 5; ++i) {
    bingoCard.push(rows[i]);
  }
  return bingoCard;
}

checkBingo(renderBingoCard(bingoRows, 0), bingoNum);

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
  console.log(numbers);
  console.log(
    "Row1: " +
      row1 +
      "\nRow2: " +
      row2 +
      "\nRow3: " +
      row3 +
      "\nRow4: " +
      row4 +
      "\nRow5: " +
      row5
  );
}
