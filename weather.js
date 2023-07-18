/*

var apiKey = "YOUR_API_KEY";
var latitude = 37.7749;  // Example latitude (e.g., San Francisco)
var longitude = -122.4194;  // Example longitude (e.g., San Francisco)
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Process the weather data
    var temperature = data.main.temp;
    var weatherDescription = data.weather[0].description;

    console.log("Temperature: " + temperature);
    console.log("Weather Description: " + weatherDescription);
  })
  .catch(function (error) {
    console.log("Error fetching weather data: " + error);
  });

*/