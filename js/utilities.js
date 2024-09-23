function getInputValueById(id) {
  let inputValue = document.getElementById(id).value;
  inputValue = parseFloat(inputValue);
  return inputValue;
}

