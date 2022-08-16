// // Deposit Button
document.getElementById('deposit-btn').addEventListener('click', function () {
    // Deposit Field
    let depositField = document.getElementById('deposit-field');
    let depositAmountString = depositField.value;
    let depositAmount = parseFloat(depositAmountString);
    // Total Deposit
    let depositTotal = document.getElementById('total-deposit');
    let depositTotalString = depositTotal.innerText;
    let depositTotalAmount = parseFloat(depositTotalString);
    // Add new Total Deposit
    let newTotalDeposit = depositTotalAmount + depositAmount;
    depositTotal.innerText = newTotalDeposit;
    // Get Balance Status
    let currentBalance = document.getElementById('total-balance');
    let currentBalanceString = currentBalance.innerText;
    let currentBalanceAmount = parseFloat(currentBalanceString);
    // Update Balance Status
    let newBalance = currentBalanceAmount + depositAmount;
    currentBalance.innerText = newBalance;
    // Default input field
    depositField.value = ' ';
})

// Withdraw Button

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // Get withdraw amount from field
    let withdrawField = document.getElementById('withdraw-field');
    let withdrawAmountString = withdrawField.value;
    let withdrawAmount = parseFloat(withdrawAmountString);
    // Get Withdraw Dasboard current Amount
    let totalWithdraw = document.getElementById('total-withdraw');
    let totalWithdrawString = totalWithdraw.innerText;
    let totalWithdrawAmount = parseFloat(totalWithdrawString);
    // Update current Withdraw dashboard amount
    let newTotalWithdraw = totalWithdrawAmount + withdrawAmount;
    totalWithdraw.innerText = newTotalWithdraw;
    // Get Balance Status
    let currentBalance = document.getElementById('total-balance');
    let currentBalanceString = currentBalance.innerText;
    let currentBalanceAmount = parseFloat(currentBalanceString);
    // Update Balance Status
    let newBalance = currentBalanceAmount - withdrawAmount;
    currentBalance.innerText = newBalance;
    // // Default input field
    withdrawField.value = ' ';

})