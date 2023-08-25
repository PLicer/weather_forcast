const inputbox = document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body=document.querySelector('.weather-body');

 async function checkweather(city)
{

  const api_key="ee075beceee0244904995474acd984cd";
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  
  const weather_data= await fetch(`${url}`).then(response=>
    response.json())
    
    if(weather_data.cod === `404`)
    {
     
      location_not_found.style.display="flex";
      weather_body.style.display="none";
      
      return;
    }
    location_not_found.style.display="none";
    weather_body.style.display="flex";
    console.log(weather_data);
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity
    }%`;
    wind_speed.innerHTML=`${ weather_data.wind.speed }Km\Hr`;
    switch(weather_data.weather[0].main){
      case 'Clouds':
         weather_img.src="/weather_forcast/assets/cloud.png";
         break;
      case 'Clear':
         weather_img.src="/weather_forcast/assets/clear.png";
         break;
      case 'Rain':
        weather_img.src="/weather_forcast/assets/rain.png";
        break;
      case 'Snow':
        weather_img.src="/weather_forcast/assets/snow.png";
        break;
        case 'Mist':
          weather_img.src="/weather_forcast/assets/mist.png";    
          break;
    }

}


searchBtn.addEventListener('click',()=>{
  checkweather(inputbox.value);
});