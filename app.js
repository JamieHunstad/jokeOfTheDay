let jokeCall = new JokeRequest;
let newUi = new UiJoke;

document.addEventListener("DOMContentLoaded", getNewJoke());


function getNewJoke(){
    jokeCall.getJokeRequest()
    .then(data => {
        newUi.createUI(data);
        let punchlineBtn = document.getElementById("punchlineBtn");
        let newUiPunchline = new UiJoke;
        punchlineBtn.addEventListener("click", newUiPunchline.showJoke);
    })
    .catch(err => console.log(err));
}