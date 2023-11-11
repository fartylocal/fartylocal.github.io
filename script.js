function calculateAge() {
    const ageInput = document.getElementById('ageInput');
    const age = parseInt(ageInput.value);
    const nextYearAge = age + 1;

    const resultElement = document.getElementById('result');
    resultElement.textContent = `You will be ${nextYearAge} years old in 1 year.`;
}