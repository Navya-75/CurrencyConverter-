function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const result = document.getElementById("result");

  if (!amount) {
    result.innerText = "Please enter an amount.";
    return;
  }

  const exchangeRates = {
    USD: { INR: 83, EUR: 0.91 },
    INR: { USD: 0.012, EUR: 0.011 },
    EUR: { USD: 1.1, INR: 91 },
  };

  if (from === to) {
    result.innerText = `${amount} ${from} = ${amount} ${to}`;
    return;
  }

  const rate = exchangeRates[from][to];
  if (!rate) {
    result.innerText = "Conversion not available.";
    return;
  }

  const converted = (amount * rate).toFixed(2);
  result.innerText = `${amount} ${from} = ${converted} ${to}`;
}
