// for box number -02 donation added system

function donateQouta() {
  // console.log( feniBalance)
  let myCurrentBalance = parseFloat(getInnerTextNumberById("my-balance"));
  // console.log(myCurrentBalance)

  document.getElementById("btn-3").addEventListener("click", function () {
    //   console.log('ok')
    let inputAmount = getInputValueById("input-3");
    let myBalanceElement = getInnerTextById("my-balance");
    let feniBalanceElement = getInnerTextById("qouta-balance");
    let feniBalance = parseFloat(getInnerTextNumberById("qouta-balance"));

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
      const title = document.getElementById("title-3").innerText;
      //   create new div
      let historyItem = document.createElement("div");
      historyItem.className = "border-3 border-indigo-600 rounded-l-lg";
      historyItem.innerHTML = `
         
        <div>
        <p class= 'text-xl font-bold text-gray-600'>${
          inputAmount + " " + "Taka is" + " " + title
        }</p>
        <p class = 'text-sm font-semibold'> Date : ${new Date()}</p>
        </div>
        <div class = 'divider'></div>
  
    
       
       `;

      const historyBox = document.getElementById("history-item-box");
      historyBox.insertBefore(historyItem, historyBox.firstChild);
      // history section
    } else {
      return alert("Your Balance is Low!");
    }

    //   console.log(myNewBalance)
    //   console.log(inputAmount)
  });
}
donateQouta();
