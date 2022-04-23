class UiJoke {
    constructor(){

    }

    createUI(myData){
        let date = new Date();
        let month = date.getMonth()+1;
        let day = date.getDate();
        let year= date.getFullYear();

        let formattedDate = `${month}.${day}.${year}`

        let myJoke = myData.contents.jokes[0].joke.text;

        let myJokeNoQ = myJoke.slice(3);
        let myJokeAIndex= myJokeNoQ.indexOf("\nA:");
        let jokeSetup = myJokeNoQ.slice(0,myJokeAIndex); 
        let myJokeNoA = myJokeNoQ.slice(myJokeAIndex);
        let jokeAnswer = myJokeNoA.slice(4);


        let insertContent = document.getElementById("insert");

        insertContent.innerHTML = `
        <section id="topSection">
            <p id="date">${formattedDate}</p>
            <h1 id="title">JOKE OF THE DAY</h1>
        </section>
        <section class="bottomSection">
            <h2 class="joke" id="jokeSetup">${jokeSetup}</h2>
            <h2 class="joke" id="punchline" style="display: none">${jokeAnswer}</h2>
            <button id="punchlineBtn">Get Punchline</button>
            <h2 id="comeBack" style="display: none">Come back tomorrow for another joke!</h2>
        </section>
        `
    }
    showJoke(){
        let comeBack = document.getElementById("comeBack");
        let jokeSetup = document.getElementById("jokeSetup");
        let punchline = document.getElementById("punchline");
        punchlineBtn.style.display = "none";
        jokeSetup.className = "jokeTold";
        punchline.style.display = "block";
        comeBack.style.display = "block";

    }

}