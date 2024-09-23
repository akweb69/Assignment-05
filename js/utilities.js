function getInputValueById(id) {
  let inputValue = document.getElementById(id).value;
  inputValue = parseFloat(inputValue);
  return inputValue;
}

function getInnerTextById (id){
    let innerText = document.getElementById(id).innerText;
        return innerText ;
}

function getInnerTextNumberById (id){
    let innerText = document.getElementById(id).innerText;
        innerText = parseFloat(innerText);
        return innerText ;
}

