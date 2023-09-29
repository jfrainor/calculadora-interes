function calculateInterest() {
    const initialAmount = parseFloat(document.getElementById("initialAmount").value);
    const monthlyDeposit = parseFloat(document.getElementById("monthlyDeposit").value);

    if (isNaN(initialAmount) || isNaN(monthlyDeposit)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    const annualInterestRate = 0.15; // Tasa de interés anual del 15%
    const monthlyInterestRate = 0.0125; // Tasa de interés mensual del 1.25%

    let totalInterest = 0;

    for (let month = 1; month <= 12; month++) {
        totalInterest += (initialAmount + totalInterest + monthlyDeposit) * monthlyInterestRate;
    }

    const formattedInterest = totalInterest.toFixed(2);
    document.getElementById("totalInterest").textContent = `${formattedInterest} Bs.`;
}
