function roll() {
  let rollTimes = Math.round(document.getElementById("rollTimes").value);
  let sides = document.getElementById("sides").value;
  let randomNum = [];
  let total = 0;
  function random() {
    if (sides === "4") {
      randomNum.push(Math.floor(Math.random() * 4) + 1);
    } else if (sides === "6") {
      randomNum.push(Math.floor(Math.random() * 6) + 1);
    } else if (sides === "8") {
      randomNum.push(Math.floor(Math.random() * 8) + 1);
    } else if (sides === "10") {
      randomNum.push(Math.floor(Math.random() * 10) + 1);
    } else if (sides === "12") {
      randomNum.push(Math.floor(Math.random() * 12) + 1);
    } else {
      randomNum.push(Math.floor(Math.random() * 20) + 1);
    }
  }
  for (let i = 0; i < rollTimes; i++) {
    random();
  }
  for (let j in randomNum) {
    total += randomNum[j];
  }
  if (rollTimes == 0 || sides == "") {
    document.getElementById("output").textContent =
      "please choose how many sides and/or specify how many times the dice should roll.";
  } else {
    document.getElementById("output").innerHTML =
      "dice rolled " +
      rollTimes +
      " times;<br>dice had " +
      sides +
      " sides;<br>total was " +
      total +
      ";<br>individual values were " +
      randomNum.join(", ");
  }
}
