var convertedTextField = document.getElementById("converted-text");
var textToConvert = document.getElementById("main-message");

const convertText = () => {
  const convertedText = textToConvert.value
  .toLowerCase()
  .replace(/ /g, "-")
  .replace("---", "-")
  .replace(",", "");
  
  convertedTextField.textContent = convertedText;
  clearTextArea();
};


const clearTextArea = () => {
  textToConvert.value = "";
}