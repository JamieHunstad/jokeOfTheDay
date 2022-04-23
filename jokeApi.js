class JokeRequest {
    constructor(){

    }

    async getJokeRequest() {
        let response = await fetch("https://api.jokes.one/jod");

        let responseData = await response.json();

        return responseData;
    }
}