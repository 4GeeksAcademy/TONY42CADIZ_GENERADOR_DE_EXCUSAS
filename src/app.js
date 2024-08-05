import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoRan = Math.floor(Math.random() * who.length);
  let actionRan = Math.floor(Math.random() * action.length);
  let whatRan = Math.floor(Math.random() * what.length);
  let whenRan = Math.floor(Math.random() * when.length);

  let excuse =
    who[whoRan] +
    " " +
    action[actionRan] +
    " " +
    what[whatRan] +
    " " +
    when[whenRan];

  document.getElementById("excuse").innerText = excuse;
};
