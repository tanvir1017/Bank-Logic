// deposite value add
document.getElementById('deposit-btn').addEventListener('click', function(){
   const depositeValue = document.getElementById('deposit-amount');
   const depositAmount = depositeValue.value
    //   console.log(depositAmount)

    // add amount on the board
   const depositTotal = document.getElementById('total-deposit');
   const previousAmount = depositTotal.innerText;
   const totalDepositAmount = parseFloat(previousAmount) + parseFloat(depositAmount);
   depositTotal.innerText = totalDepositAmount;

   // add ful deposit balance in balance Total
   const totalBalance = document.getElementById('total-balance');
   const balanceTotalText = totalBalance.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText);
   const newBalanceTotal = previousBalanceTotal + parseFloat(depositAmount);
   totalBalance.innerText = newBalanceTotal

   //clear the input field
   depositeValue.value = '';
})



// handle the withdraw amount 
document.getElementById('withdraw-btn').addEventListener('click', function (){
   const withdrawBalanceInput = document.getElementById('withdraw-amount');
   const withdrawBalanceText = withdrawBalanceInput.value;
   const withdrawBalance = parseFloat(withdrawBalanceText);
   // console.log(withdrawBalance)   

   // set the total amount on the dashboard
   const totalWithdraw = document.getElementById('total-withdraw');
   const previousWithdrawText = totalWithdraw.innerText;
   const previousWithdrawAmount = parseFloat(previousWithdrawText);
   
   //Addition with input field and show on dashboard the addition
   const newWithdrawAmount = previousWithdrawAmount + withdrawBalance;
   totalWithdraw.innerText = newWithdrawAmount;

   //reduce from the main balance
   const totalWithdrowBalance = document.getElementById('total-balance');
   const totalWithdrowBalanceText = totalWithdrowBalance.innerText;
   const totalWithdrawAmount = parseFloat(totalWithdrowBalanceText);

   const afterWithdrawBalance = totalWithdrawAmount - withdrawBalanceText;
   totalWithdrowBalance.innerText = afterWithdrawBalance
   
   //clear the input box
   withdrawBalanceInput.value = '';
})



