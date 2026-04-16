// DOM Access
const convertBtn = document.getElementById('convertBtn');
const usdAmountInput = document.getElementById('usdAmount');
const resultText = document.getElementById('resultText');
const resultDisplay = document.getElementById('resultDisplay');

// Function logic with async/await handling internal Promises
async function convertCurrency() {
    // Basic setup and loading state
    const usdAmount = usdAmountInput.value;
    resultText.className = 'loading';
    resultText.textContent = 'Loading...';

    // Fetch call using async/await
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();

    // Data parsing and calculation
    const inrRate = data.rates.INR;
    const convertedValue = (usdAmount * inrRate).toFixed(2);

    // Update the DOM with the result
    resultDisplay.className = 'result success-result';
    resultText.className = '';
    resultText.innerHTML = `<strong>$${usdAmount} USD</strong> = <strong>₹${convertedValue} INR</strong>`;
}

// Events
convertBtn.addEventListener('click', convertCurrency);
