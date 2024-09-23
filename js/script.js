
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
function donationHistory (){
const donatiionBnt = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const donateSection = document.getElementById('donate-section');
const historySection = document.getElementById('history-section')

donatiionBnt.addEventListener('click', function(){
historySection.classList.add("hidden")
donateSection.classList.remove('hidden')
historyBtn.style.backgroundColor = '#fff'
donatiionBnt.style.backgroundColor = '#b4f461'
donatiionBnt.style.border = 'none'




})
historyBtn.addEventListener('click', function(){
    historySection.classList.remove("hidden");
    donateSection.classList.add('hidden');
    historyBtn.style.backgroundColor = '#B4F461';
    donatiionBnt.style.backgroundColor = '#fff'
    donatiionBnt.style.border = '1px solid rgba(17, 17, 17, 0.3)'
    
    })
}
donationHistory()
// 