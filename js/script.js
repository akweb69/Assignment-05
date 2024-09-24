// for box number -02 donation added system

function donateNoakhali() {
    // console.log( feniBalance)
    let myCurrentBalance = parseFloat(getInnerTextNumberById("my-balance"));
    // console.log(myCurrentBalance)
  
    document.getElementById("btn-1").addEventListener("click", function () {
      //   console.log('ok')
      let inputAmount = getInputValueById("input-1");
      let myBalanceElement = getInnerTextById("my-balance");
      let feniBalanceElement = getInnerTextById("noakhali-balance");
      let feniBalance = parseFloat(getInnerTextNumberById("noakhali-balance"));
  
      if (inputAmount <= 0) {
        return alert("Your input is not a Valid number");
      }
      if (myCurrentBalance >= inputAmount) {
        let modalAmount = document.getElementById("tk");
        modalAmount.innerText = inputAmount;
        let feniNewBalance = feniBalance + inputAmount;
        myCurrentBalance = myCurrentBalance - inputAmount;
        myBalanceElement.innerText = myCurrentBalance;
        //
        //
        feniBalanceElement.innerText = feniNewBalance;
        // for open modal
        const modal = document.getElementById("modal");
        const modalCloseBtn = document.getElementById("modal-btn");
        modalCloseBtn.addEventListener("click", function () {
          modal.classList.remove("click-modal");
        });
  
        modal.classList.add("click-modal");
        //  modal close
  
        //    history section
        const title = document.getElementById("title-1").innerText;
        //   create new div
        let historyItem = document.createElement("div");
        historyItem.className = "border-3 border-indigo-600 rounded-l-lg";
        historyItem.innerHTML = `
        <p class= 'text-xl font-bold text-gray-600'>${
          inputAmount + " " + "Taka is" + " " + title
        }</p>
        <p class = 'text-sm font-semibold'> Date : ${new Date()}</p>
        <div class = 'divider'></div>
  
    
       
       `;
  
        const historyBox = document.getElementById("history-item-box");
        historyBox.insertBefore(historyItem , historyBox.firstChild)

        
                // history section
      } else {
        return alert("Your Balance is Low!");
      }
  
      //   console.log(myNewBalance)
      //   console.log(inputAmount)
    });
    
  }
  donateNoakhali();
  


//   
// donation and history btn
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
