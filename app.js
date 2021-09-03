var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

btnTranslate.addEventListener("click", clickHandler);

var serverURL = "https://api.funtranslations.com/translate/minion.json";
function clickHandler() {
  var inputText = txtInput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      outputDiv.innerHTML = json.contents.translated;
    });
}

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}
