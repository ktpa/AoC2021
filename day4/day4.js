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
var lowestBingo = 101;
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
    //var number = numbers.pop();

    var number = numbers[numbersLength - (i + 1)];
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
    // eval bingo (BUGGED -> SOMETIMES PROSPECT INDEX OF BINGOCHECK GIVES UNDEFINED)
    if (i > 4) {
      var prospect = bingoCheck.indexOf("X", from);
      from = prospect + 1;
      console.log(bingoCheck[prospect] == "X");
      if (
        bingoCheck[prospect + 1] == "X" &&
        bingoCheck[prospect + 2] == "X" &&
        bingoCheck[prospect + 3] == "X" &&
        bingoCheck[prospect + 4] == "X"
      ) {
        if (i < lowestBingo) {
          lowestBingo = i;
          console.log("New lowest bingo on horizontal check: " + i);
          console.log("Start pos: " + bingoCheck.indexOf("X", from));
          console.log(row1);
          console.log(row2);
          console.log(row3);
          console.log(row4);
          console.log(row5);
          var sum = 0;
          // switch case is bugged

          switch (from) {
            case 0:
              // add rows 2-5 (BUGGED, SHOULD NOT ADD PREVIOUSLY DREWN NUMBERS)

              if (bingoCheck[5] == undefined) {
                sum += parseInt(row2[0]);
              }
              if (bingoCheck[6] == undefined) {
                sum += parseInt(row2[1]);
              }
              if (bingoCheck[7] == undefined) {
                sum += parseInt(row2[2]);
              }
              if (bingoCheck[8] == undefined) {
                sum += parseInt(row2[3]);
              }
              if (bingoCheck[9] == undefined) {
                sum += parseInt(row2[4]);
              }
              if (bingoCheck[10] == undefined) {
                sum += parseInt(row3[0]);
              }
              if (bingoCheck[11] == undefined) {
                sum += parseInt(row3[1]);
              }
              if (bingoCheck[12] == undefined) {
                sum += parseInt(row3[2]);
              }
              if (bingoCheck[13] == undefined) {
                sum += parseInt(row3[3]);
              }
              if (bingoCheck[14] == undefined) {
                sum += parseInt(row3[4]);
              }
              if (bingoCheck[15] == undefined) {
                sum += parseInt(row4[0]);
              }
              if (bingoCheck[16] == undefined) {
                sum += parseInt(row4[1]);
              }
              if (bingoCheck[17] == undefined) {
                sum += parseInt(row4[2]);
              }
              if (bingoCheck[18] == undefined) {
                sum += parseInt(row4[3]);
              }
              if (bingoCheck[19] == undefined) {
                sum += parseInt(row4[4]);
              }
              if (bingoCheck[20] == undefined) {
                sum += parseInt(row5[0]);
              }
              if (bingoCheck[21] == undefined) {
                sum += parseInt(row5[1]);
              }
              if (bingoCheck[22] == undefined) {
                sum += parseInt(row5[2]);
              }
              if (bingoCheck[23] == undefined) {
                sum += parseInt(row5[3]);
              }
              if (bingoCheck[24] == undefined) {
                sum += parseInt(row5[4]);
              }
              break;
            case 1:
              row1.forEach((_) => {
                sum += parseInt(_);
              });
              row3.forEach((_) => {
                sum += parseInt(_);
              });
              row4.forEach((_) => {
                sum += parseInt(_);
              });
              row5.forEach((_) => {
                sum += parseInt(_);
              });
              break;
            // add rows 1, 3-5
            case 2:
              row1.forEach((_) => {
                sum += parseInt(_);
              });
              row2.forEach((_) => {
                sum += parseInt(_);
              });
              row4.forEach((_) => {
                sum += parseInt(_);
              });
              row5.forEach((_) => {
                sum += parseInt(_);
              });
              break;
            // add rows 1, 2, 4, 5
            case 3:
              row1.forEach((_) => {
                sum += parseInt(_);
              });
              row2.forEach((_) => {
                sum += parseInt(_);
              });
              row3.forEach((_) => {
                sum += parseInt(_);
              });
              row5.forEach((_) => {
                sum += parseInt(_);
              });
              break;
            // add rows 1, 2, 3, 5
            case 4:
              row1.forEach((_) => {
                sum += parseInt(_);
              });
              row2.forEach((_) => {
                sum += parseInt(_);
              });
              row3.forEach((_) => {
                sum += parseInt(_);
              });
              row4.forEach((_) => {
                sum += parseInt(_);
              });
              break;
            // add rows 1, 2, 3, 4
            default:
              console.log("bad from case: " + from);
              break;
          }
          console.log("Sum of non-bingo card numbers: " + sum);
          console.log("Winning number: " + number);
          console.log("Resulting number: " + number * sum);
          sum = 0;
          // FIND SUM OF ALL *UNMARKED* NUMBERS
          // MULTIPLY SUM WITH WINNING NUMBER
        }
        break;
      } else if (
        bingoCheck[prospect + 5] == "X" &&
        bingoCheck[prospect + 10] == "X" &&
        bingoCheck[prospect + 15] == "X" &&
        bingoCheck[prospect + 20] == "X"
      ) {
        if (i < lowestBingo) {
          lowestBingo = i;
          console.log("New lowest bingo on vertical check: " + i);
          console.log("Start pos: " + (prospect + 1));
          console.log(row1);
          console.log(row2);
          console.log(row3);
          console.log(row4);
          console.log(row5);
        }
        break;
      }
    }
  }
}
