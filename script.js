const quoteBTN = document.getElementById("btn_quote");
const txtContent = document.getElementById("text_field");

quoteBTN.addEventListener("click", loadQuote);

function loadQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => response.json())
    .then((data) => {
      let newBox = document.createElement("div");
      let newQuote = document.createTextNode(data.quote);

      newBox.appendChild(newQuote);
      txtContent.append(newBox);

      //   txtContent.append(document.createTextNode(data.quote));
    });
}
