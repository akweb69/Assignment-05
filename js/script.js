
function box1() {
    const myBalanceElement = document.getElementById('my-balance');
    const noakhaliTotalElement = document.getElementById('total-1');
    const donateAmountInput = document.getElementById('input1');
    const donateButton = document.getElementById('donate-btn-1');
    const modalCloseBtn = document.getElementById('modal-btn');

   
    donateButton.addEventListener('click', function() {
      const myBalance = parseFloat(myBalanceElement.innerText);
      const donateAmount = parseFloat(donateAmountInput.value);
      const noakhaliTotal = parseFloat(noakhaliTotalElement.innerText);

  
      if (donateAmount <= myBalance) {
        const newBalance = (myBalance - donateAmount).toFixed(2);
        const newTotal = (noakhaliTotal + donateAmount).toFixed(2);

        if(donateAmount <= 0){
           return alert("Invalid Input");
          }

        myBalanceElement.innerText = newBalance;
        noakhaliTotalElement.innerText = newTotal;

        const modal = document.getElementById('modal');
        modalCloseBtn.addEventListener('click', function(){
            modal.classList.remove("click-modal");
        })
      

        modal.classList.add("click-modal");
        


        
      }
      
      
      else {
        alert("Insufficient funds Or invalid input");
      }
    });
  }
  
  box1();
//   
// 
// 