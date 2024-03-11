"use strict";
// laver en const til min api
const apiKey = "91ee8e00d9ce24534e20065eca135136";
// laver en let som hedder city som er tom, så tildeler vi den en værdig senere
let city = ""; 
// tager fat i vores html elementer
const cityInput = document.querySelector("#cityInput");
const getWeatherBtn = document.querySelector("#getWeatherBtn");
const weatherOutput = document.querySelector("#weatherOutput");

// onclick event som gør at når vi klikker giver vi vores city variable en value som er userinput, herefter bruger vi trim for at fjerne mellemrum
getWeatherBtn.addEventListener("click", () => {
    city = cityInput.value.trim();
    // if statement som siger hvis ingen value er i city bliver man promptet
    if (city === "") {
        alert("Please enter a city.");
        return;
    }
// herefter har vi det data vi skal bruge for at hente data fra hjemmesiden
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data); 

            //laver variabler som tager fat i vores data fra apien, her har vi 
            //temparature som henter temperaturen hvorefter det bliver ændret fra kelvin til celcius og til kun 2 decimal tal
            const temperature = (data.main.temp - 273.15).toFixed(2);
            const description = data.weather[0].description;

          // ændre vores html til at skrive hvilken temperatur der er og vejr typen
            weatherOutput.innerHTML = `Temperature: ${temperature} &#8451;<br>Description: ${description}`;
        })
      
    
});