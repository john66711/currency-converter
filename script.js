const convertBtn = document.getElementById("convertBtn");
const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const resultDisplay = document.getElementById("result");

// Static conversion rates (base: USD)
const rates = {
  USD: 1,
  EUR: 0.92,
  INR: 83.1,
  GBP: 0.79,
  JPY: 148.3,
  AUD: 1.51,
  CAD: 1.36,
  CNY: 7.12,
  CHF: 0.88,
  SAR: 3.75
};

convertBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (isNaN(amount) || amount <= 0) {
    alert("⚠️ Please enter a valid amount!");
    return;
  }

  const usdAmount = amount / rates[from]; // Convert to USD
  const converted = usdAmount * rates[to]; // Convert to target currency

  resultDisplay.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
});
