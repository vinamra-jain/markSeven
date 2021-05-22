var btn= document.querySelector("#translate-btn");
var inp = document.querySelector("#input");
var out = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json"

function urlGenerate(input){
    return serverURL+"?text="+input;
}

function errorHandler(error){
    console.log("Error occurred:", error);
    alert("Something wrong with the server. Please try again after sometime.")
}

function btnTriggered(){
    var finalURL = urlGenerate(inp.value);
    fetch(finalURL)
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        out.innerHTML = translatedText;
    })
    .catch(errorHandler)
}

btn.addEventListener("click", btnTriggered);



