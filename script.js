var input = document.getElementById("a")
var btn = document.getElementById("b")
function insertc(inputString, charToInsert) {
        const charsArray = inputString.split('');
        const resultString = charsArray.join(charToInsert) + charToInsert;
        return resultString;
      }
btn.addEventListener('click', () => {
var text = input.value
var main = document.querySelector(".main")
main.innerHTML = `<p>${insertc(text,"︡")}</p>`
})