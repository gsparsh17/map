// var x = document.getElementById("demo");
// getLocation()
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
//   console.log(position.coords.latitude)
//   console.log(position.coords.longitude)
// }
var x = document.getElementById("demo");
var wes = document.getElementById("wes");
var wes1 = document.getElementById("wes1");
getLocation()
function getLocation() {
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    navigator.geolocation.getCurrentPosition(showWeather);
 } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
 }
}

function showPosition(position) {
//  x.innerHTML = "Latitude: " + position.coords.latitude + 
//  "<br>Longitude: " + position.coords.longitude;
}
function showWeather(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude + 
//  "<br>Longitude: " + position.coords.longitude;
 var apiKey = "fdf8effb2626c5d9737dd56efc916c2d"; // replace with your own API key
 var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;

 fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      var temperature = data.main.temp - 273.15; // converting from Kelvin to Celsius
      // document.getElementById("weather").innerHTML = `Weather: ${data.weather[0].description}<br>Temperature: ${temperature.toFixed(2)} &#8451;`;
      wes.innerHTML=temperature.toFixed(2)+`&#8451<br>`;
      wes1.innerHTML=data.weather[0].description.toUpperCase();
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      document.getElementById("weather").innerHTML = "Error fetching weather data.";
    });
}
function showWeather1(Lng,Lat) {
   //     x.innerHTML = "Latitude: " + position.coords.latitude + 
   //  "<br>Longitude: " + position.coords.longitude;
    var apiKey = "fdf8effb2626c5d9737dd56efc916c2d"; // replace with your own API key
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Lng}&appid=${apiKey}`;
   console.log(apiUrl)
    fetch(apiUrl)
       .then(response => response.json())
       .then(data => {
         var temperature = data.main.temp - 273.15; // converting from Kelvin to Celsius
         // document.getElementById("weather").innerHTML = `Weather: ${data.weather[0].description}<br>Temperature: ${temperature.toFixed(2)} &#8451;`;
         wes.innerHTML=temperature.toFixed(2)+`&#8451<br>`;
      wes1.innerHTML=data.weather[0].description.toUpperCase();
       })
       .catch(error => {
         console.error("Error fetching weather data:", error);
         document.getElementById("weather").innerHTML = "Error fetching weather data.";
       });
      }
function dial()
{
   document.getElementById("di").style.display="block";
}
function loadQuestion()
{
   document.getElementById("di").style.display="none";
}
