function calculateAge() {
    const ageInput = document.getElementById('ageInput');
    const age = parseInt(ageInput.value);
    const nextYearAge = age + 1;
    const resultElement = document.getElementById('result');
    if (age < 110) {
        resultElement.textContent = `You will be ${nextYearAge} years old in a year.`;
    };
    if (age > 119) {
        resultElement.textContent = "How the hell are u still not dead ummm";
    };
}

document.getElementById('resetbtn').addEventListener("click", function() {
    location.reload()
})