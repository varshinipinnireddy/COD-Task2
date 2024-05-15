const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const temp=document.querySelector(".temperature");
let city='';


search.addEventListener('click', () => {
    const APIKey = '486e4ab66c1b7e1034dd55572708a901';
    city = document.querySelector('.search-box input').value;

    if (city ==='') {
        
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(json => {
            console.log('Weather data:', json);
            if (!json.weather || json.weather.length === 0) {
                throw new Error('Weather data is missing or empty');
            }

            const image = document.querySelector('.weather-box img');
            console.log('Weather condition:', json.weather[0].main);
            let condition=json.weather[0].main;
            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.jpeg';
                    break;
                case 'Rain':
                    image.src = 'images/rain.jpeg';
                    break;
                case 'Snow':
                    image.src = 'images/snow.jpeg';
                    break;
                case 'Clouds':
                    console.log("hello bye")
                    image.src = 'images/cloud.jpeg';
                    break;
                case 'Mist':
                    image.src='images/mist.jpeg';
                case 'Haze':
                    image.src = 'images/mist.jpeg';
                    break;
                default:
                    image.src = 'images/cloud.jpeg';
            }
            

           temp.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
           temp.classList.add("temp");
           let des = documet.querySelector(".description");
           des.innerText = condition;


        })
        .catch(error =>{
           
 } );
        
})



