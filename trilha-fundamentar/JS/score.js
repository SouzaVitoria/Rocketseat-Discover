function getScore(score) {
  const scoreA = score >= 90 && score <= 100;
  const scoreB = score > 70 && score < 90;
  const scoreC = score >= 50 && score <= 70;
  const scoreD = score < 50;
  let currentScore;

  if (scoreA) {
    currentScore = "A";
  }

  if (scoreB) {
    currentScore = "B";
  }

  if (scoreC) {
    currentScore = "C";
  }

  if (scoreD) {
    currentScore = "D";
  }

  if (score < 0 || score > 100) {
    return console.log("Nota indefinida")
  }

  return console.log(`Sua nota é ${currentScore}`);
}

getScore(prompt("Qual a sua nota?"))
