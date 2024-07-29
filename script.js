const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');

search.addEventListener('click', () => {

    const APIKey = '2f2fc124b696b00d1b6a92ae4b9bb797';
    const city = document.querySelector('.search-box input').value;

    if (city =='')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&standard=metric&appid=${APIKey}`).then(response => response.json()).then(json =>{

        if (json.cod == '404') {
            cityHide.textContent = city;
            container.style.height = '404px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            console.log("err");
            return;
        }
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        if (cityHide.textContent == city) {
            return;
        }
        else {
            cityHide.textContent = city;       
            
            container.style.height = '555px';
            container.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');


            switch (json.weather[0].main) {
            
                case 'Clear':
                  image.src ='image/sun.png'; 
                  break;
                  
                  case 'Rain':
                  image.src = "image/rain.png";
                  break;
                
                  case 'Snow':
                  image.src = 'image/snow_9755338.png';
                  break;
    
                  case 'Clouds':
                  image.src = 'image/Cloud.png';
                  break;
    
                  case 'Mist':
                  image.src = "image/Mist.png";
                  break;
    
                  case 'Haze':
                  image.src = 'image/Mist.png';
                  break;
                
                default:
                  image.src = 'image/cloud.png';
                 
            }

            
            temp = parseInt(json.main.temp)/10;
            temperature.innerHTML = `${temp}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/H`;
            
            // const infoWeather = document.querySelector('.info-weather');
            // const infoHumidity = document.querySelector('.info-humidity');
            // const infoWind = document.querySelector('.info-Wind');

            // const elCloneInfoWeather = infoWeather.cloneNode(true);
            // const elCloneInfoHumidity = infoHumidity.cloneNode(true);
            // const elCloneInfoWind = infoWind.cloneNode(true);

            // elCloneInfoWeather.id = 'clone-info-weather';
            // elCloneInfoWeather.classList.add('active-clone');

            // elCloneInfoHumidity.id = 'clone-info-humidity';
            // elCloneInfoHumidity.classList.add('active-clone');

            // elCloneInfoWind.id = 'clone-info-wind';
            // elCloneInfoWind.classList.add('active-clone');

            // setTimeout(() => {
            //     infoWeather.insertAdjacentElement("afterend",elCloneInfoWeather);
            //     infoHumidity.insertAdjacentElement("afterend",elCloneInfoHumidity);
            //     infoWind.insertAdjacentElement("afterend",elCloneInfoWind);
            // }, 2200);

            // const CloneInfoWeather = document.querySelectorAll('.info-weather.active-Clone');
            // const totalCloneInfoWeather = CloneInfoWeather.length;
            // const CloneInfoWeatherFirst = CloneInfoWeather[0];

            // const CloneInfoHumidity = document.querySelectorAll('.info-humidity.active-Clone');
            // const totalCloneInfoHumidiy = CloneInfoHumidity.length;
            // const CloneInfoHumidityFirst = CloneInfoHumidity[0];

            // const CloneInfoWind = document.querySelectorAll('.info-wind.active-Clone');
            // const totalCloneInfoWind = CloneInfoWind.length;
            // const CloneInfoWindFirst = CloneInfoWind[0];

            // if (totalCloneInfoWeather > 0) {
            //     CloneInfoWeatherFirst.ClassList.remove('active-Clone');
            //     CloneInfoHumidityFirst.ClassList.remove('active-Clone');
            //     CloneInfoWindFirst.ClassList.remove('active-Clone');

            //     setTimeout(() => {
            //         CloneInfoWeatherFirst.remove();
            //         CloneInfoHumidityFirst.remove();
            //         CloneInfoWindFirst.remove();
            //     }, 2200);
            // }
        }
               
    });

});