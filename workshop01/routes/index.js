var express = require("express");
var router = express.Router();

const Quotes = [
  "Logic will get you from A to B. Imagination will take you everywhere.",
  "There are 10 kinds of people. Those who know binary and those who don't.",
  "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
  "It's not that I'm so smart, it's just that I stay with problems longer.",
  "It is pitch dark. You are likely to be eaten by a grue.",
];

function getRandomNumber(x) {
  // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
  const randomDecimal = Math.random();

  // Scale the random decimal to the desired range (0 - x-1) and round it
  const randomNumber = Math.floor(randomDecimal * x);

  return randomNumber;
}

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: Quotes[getRandomNumber(5)] });
});

module.exports = router;
