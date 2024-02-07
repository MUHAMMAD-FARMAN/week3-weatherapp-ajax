function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    if (cityName.trim() === '') {
        alert('Please enter a city name');
        return;
    }

    const apiKey = 'b3e57b5ca62c4ac19cd72340230612';
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    // const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={apiKey}`;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`

    // AJAX request using XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            displayWeather(data);
        } else {
            alert(`Error: ${xhr.statusText}`);
        }
    };

    xhr.onerror = function () {
        alert('Network error. Please try again.');
    };

    xhr.send();
}

function displayWeather(data) {
    const weatherDataDiv = document.getElementById('weatherData');

    const cityName = data.location.name;
    const temperature = data.current.temp_c;
    const description = data.current.condition.text;

    const weatherHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Description: ${description}</p>
    `;

    weatherDataDiv.innerHTML = weatherHTML;
}