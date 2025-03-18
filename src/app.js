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
  randomColor();

  document.getElementById("exButton").addEventListener("click", newExcuse);
  document.getElementById("exButton").addEventListener("click", randomColor);
  document.getElementById("hideExBtn").addEventListener("click", hideExcuseDiv);
  document.getElementById("excuse").addEventListener("click", copyToClip);
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

function randomColor() {
  let excuseBack = document.getElementById("excuseGen");
  let excuseText = document.getElementById("excuse");
  let excuseBtn = document.getElementById("exButton");

  let textRed = Math.floor(Math.random() * 256);
  let textGreen = Math.floor(Math.random() * 256);
  let textBlue = Math.floor(Math.random() * 256);

  let btnRed = Math.floor(Math.random() * 256);
  let btnGreen = Math.floor(Math.random() * 256);
  let btnBlue = Math.floor(Math.random() * 256);

  let textLuminance = 0.2126 * textRed + 0.7152 * textGreen + 0.0722 * textBlue;
  let btnLuminance = 0.2126 * btnRed + 0.7152 * btnGreen + 0.0722 * btnBlue;

  excuseText.style.color = textLuminance < 110 ? "white" : "black";
  excuseBtn.style.color = btnLuminance < 110 ? "white" : "black";

  excuseBack.style.backgroundColor = `rgb(${textRed}, ${textGreen}, ${textBlue})`;
  excuseBtn.style.backgroundColor = `rgb(${btnRed}, ${btnGreen}, ${btnBlue})`;
}

function hideExcuseDiv() {
  let excuseDiv = document.getElementById("excuseGen");
  let button = document.getElementById("hideExBtn");

  if (excuseDiv.classList.contains("hidden")) {
    excuseDiv.classList.remove("hidden");
    button.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
  } else {
    excuseDiv.classList.add("hidden");
    button.innerHTML = '<i class="fa-solid fa-eye"></i>';
  }
}

function copyToClip() {
  navigator.clipboard.writeText(document.getElementById("excuse").textContent);

  // Alert the copied text
  alert("Copied to Cilpboard");
}
