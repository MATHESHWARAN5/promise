document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    fetchDogImage();
    fetchJoke();
  });
  
  function fetchWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const city = 'London';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherDiv = document.getElementById('weather');
        const temp = (data.main.temp - 273.15).toFixed(2);
        weatherDiv.innerHTML = `
          <h2>Weather in ${city}</h2>
          <p>Temperature: ${temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>`;
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }
  
  function fetchDogImage() {
    const url = 'https://dog.ceo/api/breeds/image/random';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const dogImageDiv = document.getElementById('dog-image');
        dogImageDiv.innerHTML = `
          <h2>Random Dog Image</h2>
          <img src="${data.message}" alt="Dog Image" class="img-fluid">`;
      })
      .catch(error => console.error('Error fetching dog image:', error));
  }
  
  function fetchJoke() {
    const url = 'https://v2.jokeapi.dev/joke/Any';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const jokeDiv = document.getElementById('joke');
        const joke = data.joke || `${data.setup} - ${data.delivery}`;
        jokeDiv.innerHTML = `<h2>Joke</h2><p>${joke}</p>`;
      })
      .catch(error => console.error('Error fetching joke:', error));
  }
  