var textarea = document.querySelector(".country");
var btn = document.querySelector("button");
var container = document.querySelector(".container");

var JiafeiFunction = Jiafei;

btn.addEventListener('click', JiafeiFunction); 

function Jiafei() {
  console.log("Millie bobby brown is cvmming");
  console.log(textarea.value);
  if (textarea.value !== "Floptropica") {
    container.innerHTML =
    `<p id="result" style="border: 3px dotted red; height: 300px; margin: 0px auto 18px auto; line-height: 300px; font-size: 30px;">
      Wrong! Setting your house on fire...
    </p>`;
    var audio = new Audio("fire.mp3");
    audio.play();
  }
  if (textarea.value === "Floptropica") {
    container.innerHTML =
    `<p id="result" style="border: 3px dotted green; height: 300px;text-align: left; vertical-align: middle;margin: 0px auto 18px auto; padding: 5px;font-size: 30px;">
      Greetings. <br> <br> Your answer was correct! Queen Jiafei is inviting you to her coochielicious haunted house! Bring all your family and friends! <br><br> Best regards,<br> Jiafei
    </p>`;
    var audio = new Audio("correct.mp3");
    audio.play();
  }

}