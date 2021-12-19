const fs = require("fs");

var contentArr = fs.readFileSync("./data/day4", "utf8").split("\n");

var bingoNum = contentArr.filter((_) => {
  if (_.length > 20) return _;
});

var bingoRows = contentArr.filter((_) => {
  if (_.length == 14) return _;
});

bingoNum = bingoNum.toString().split(",");

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
  var bingo = false;
  var sum = 0;

  for (var i = 0; i < numbersLength; ++i) {
    // each row
    // WINNING ITERATION: 22
    // WINNING NUMBER: 49
    var number = numbers[i];

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

    if (i >= 4) {
      if (
        bingoCheck[0] == "X" &&
        bingoCheck[1] == "X" &&
        bingoCheck[2] == "X" &&
        bingoCheck[3] == "X" &&
        bingoCheck[4] == "X"
      ) {
        console.log("\nBINGO ON FIRST ROW");
        if (i < lowestBingo) {
          bingo = true;
          lowestBingo = i;
          console.log(
            "\nNew lowest bingo iteration on horizontal check: " + (i + 1)
          );
          console.log("Start pos: " + 0 + "\n");
          console.log(row1);
          console.log(row2);
          console.log(row3);
          console.log(row4);
          console.log(row5);
          break;
        }
      }
      if (
        bingoCheck[5] == "X" &&
        bingoCheck[6] == "X" &&
        bingoCheck[7] == "X" &&
        bingoCheck[8] == "X" &&
        bingoCheck[9] == "X"
      ) {
        console.log("\nBINGO ON SECOND ROW");
        if (i < lowestBingo) {
          bingo = true;
          lowestBingo = i;
          console.log(
            "\nNew lowest bingo iteration on horizontal check: " + (i + 1)
          );
          console.log("Start pos: " + 5 + "\n");
          console.log(row1);
          console.log(row2);
          console.log(row3);
          console.log(row4);
          console.log(row5);
          break;
        }
      }
      if (
        bingoCheck[10] == "X" &&
        bingoCheck[11] == "X" &&
        bingoCheck[12] == "X" &&
        bingoCheck[13] == "X" &&
        bingoCheck[14] == "X"
      ) {
        console.log("\nBINGO ON THIRD ROW");
        if (i < lowestBingo) {
          bingo = true;
          lowestBingo = i;
          console.log(
            "\nNew lowest bingo iteration on horizontal check: " + (i + 1)
          );
          console.log("Start pos: " + 10 + "\n");
          console.log(row1);
          console.log(row2);
          console.log(row3);
          console.log(row4);
          console.log(row5);
          break;
        }
      }

      if (
        bingoCheck[15] == "X" &&
        bingoCheck[16] == "X" &&
        bingoCheck[17] == "X" &&
        bingoCheck[18] == "X" &&
        bingoCheck[19] == "X"
      ) {
        console.log("\nBINGO ON FOURTH ROW");
        if (i < lowestBingo) {
          bingo = true;
          lowestBingo = i;
          console.log(
            "\nNew lowest bingo iteration on horizontal check: " + (i + 1)
          );
          console.log("Start pos: " + 15 + "\n");
          console.log(row1);
          console.log(row2);
          console.log(row3);
          console.log(row4);
          console.log(row5);
          break;
        }
      }
      if (
        bingoCheck[20] == "X" &&
        bingoCheck[21] == "X" &&
        bingoCheck[22] == "X" &&
        bingoCheck[23] == "X" &&
        bingoCheck[24] == "X"
      ) {
        console.log("\nBINGO ON FIFTH ROW");
        if (i < lowestBingo) {
          bingo = true;
          lowestBingo = i;
          console.log(
            "\nNew lowest bingo iteration on horizontal check: " + (i + 1)
          );
          console.log("Start pos: " + 20 + "\n");
          console.log(row1);
          console.log(row2);
          console.log(row3);
          console.log(row4);
          console.log(row5);
          break;
        }
      }
      // COL CHECKS
      if (
        bingoCheck[0] == "X" &&
        bingoCheck[5] == "X" &&
        bingoCheck[10] == "X" &&
        bingoCheck[15] == "X" &&
        bingoCheck[20] == "X"
      ) {
        console.log("BINGO ON FIRST COL");
        if (i < lowestBingo) {
          bingo = true;
          lowestBingo = i;
          console.log(
            "\nNew lowest bingo iteration on vertical check: " + (i + 1)
          );
          console.log("Start pos: " + 0 + "\n");
          console.log(row1);
          console.log(row2);
          console.log(row3);
          console.log(row4);
          console.log(row5);
          break;
        }
      }
      if (
        bingoCheck[1] == "X" &&
        bingoCheck[6] == "X" &&
        bingoCheck[11] == "X" &&
        bingoCheck[16] == "X" &&
        bingoCheck[21] == "X"
      ) {
        console.log("BINGO ON SECOND COL");
        if (i < lowestBingo) {
          bingo = true;
          lowestBingo = i;
          console.log(
            "\nNew lowest bingo iteration on vertical check: " + (i + 1)
          );
          console.log("Start pos: " + 1 + "\n");
          console.log(row1);
          console.log(row2);
          console.log(row3);
          console.log(row4);
          console.log(row5);
          break;
        }
      }
      if (
        bingoCheck[2] == "X" &&
        bingoCheck[7] == "X" &&
        bingoCheck[12] == "X" &&
        bingoCheck[17] == "X" &&
        bingoCheck[22] == "X"
      ) {
        console.log("BINGO ON THIRD COL");
        if (i < lowestBingo) {
          bingo = true;
          lowestBingo = i;
          console.log(
            "\nNew lowest bingo iteration on vertical check: " + (i + 1)
          );
          console.log("Start pos: " + 2 + "\n");
          console.log(row1);
          console.log(row2);
          console.log(row3);
          console.log(row4);
          console.log(row5);
          break;
        }
      }
      if (
        bingoCheck[3] == "X" &&
        bingoCheck[8] == "X" &&
        bingoCheck[13] == "X" &&
        bingoCheck[18] == "X" &&
        bingoCheck[23] == "X"
      ) {
        console.log("BINGO ON FOURTH COL");
        if (i < lowestBingo) {
          bingo = true;
          lowestBingo = i;
          console.log(
            "\nNew lowest bingo iteration on vertical check: " + (i + 1)
          );
          console.log("Start pos: " + 3 + "\n");
          console.log(row1);
          console.log(row2);
          console.log(row3);
          console.log(row4);
          console.log(row5);
          break;
        }
      }
      if (
        bingoCheck[4] == "X" &&
        bingoCheck[9] == "X" &&
        bingoCheck[14] == "X" &&
        bingoCheck[19] == "X" &&
        bingoCheck[24] == "X"
      ) {
        console.log("BINGO ON FIFTH COL");
        if (i < lowestBingo) {
          bingo = true;
          lowestBingo = i;
          console.log(
            "\nNew lowest bingo iteration on vertical check: " + (i + 1)
          );
          console.log("Start pos: " + 5 + "\n");
          console.log(row1);
          console.log(row2);
          console.log(row3);
          console.log(row4);
          console.log(row5);
          break;
        }
      }
      if (i > lowestBingo) {
        break;
      }
      // FIND SUM OF ALL *UNMARKED* NUMBERS
      // MULTIPLY SUM WITH WINNING NUMBER
    }
  }
  if (bingo) {
    for (var i = 0; i < 5; ++i) {
      row1.push(row2[i]);
    }
    for (var i = 0; i < 5; ++i) {
      row1.push(row3[i]);
    }
    for (var i = 0; i < 5; ++i) {
      row1.push(row4[i]);
    }
    for (var i = 0; i < 5; ++i) {
      row1.push(row5[i]);
    }
    // Bingocheck for sum
    for (var i = 0; i < 25; ++i) {
      if (bingoCheck[i] != "X") {
        sum += parseInt(row1[i]);
      }
    }
    console.log("Sum: " + sum);
    console.log("Number: " + number);
    finalInteger = number * sum;
    bingo = false;
    console.log(finalInteger);
  }
}
