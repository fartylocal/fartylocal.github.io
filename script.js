var input = document.getElementById("a")
var btn = document.getElementById("b")

btn.addEventListener('click', () => {
var text = input.value
var main = document.querySelector(".main")
main.innerHTML = 
`
        <p>Dear, ${text}. You have diagnosed with diabetes, scoliosis, major brain injury. Diagnosed with Fartylocals diagnosis tool.</p>
        <p>I touched ${text} wool and got the lily pad disease... Never again...</p>
        <p>Dear ${text}, your Roblox version is outdated. Please install a newer version of Roblox.</p>
        <p>🦢🎀Dear ${text}, i will sell you on starpets for 6 cents 🎀🦢</p>
`
})