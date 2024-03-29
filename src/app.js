import "bootstrap";
import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  let excuse = generateExcuse(who, action, what, when);
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = excuse;

  document.getElementById("button").addEventListener("click", newExcuse);
  document.getElementById("hideBtn").addEventListener("click", hideDiv);
};

function newExcuse() {
  document.getElementById("excuse").innerHTML = generateExcuse(
    who,
    action,
    what,
    when
  );
}

function generateExcuse(array1, array2, array3, array4) {
  let whoRandomNumber = Math.floor(Math.random() * array1.length);
  let actionRandomNumber = Math.floor(Math.random() * array2.length);
  let whatRandomNumber = Math.floor(Math.random() * array3.length);
  let whenRandomNumber = Math.floor(Math.random() * array4.length);

  return (
    array1[whoRandomNumber] +
    " " +
    array2[actionRandomNumber] +
    " " +
    array3[whatRandomNumber] +
    " " +
    array4[whenRandomNumber]
  );
}

function hideDiv() {
  var x = document.getElementById("main");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
