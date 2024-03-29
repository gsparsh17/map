


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/


// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  
const url = `https://weather-api99.p.rapidapi.com/weather?city=${city}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '456ec09b8amshac4552027284ed3p107858jsn7307aba7968f',
		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
	}
};


return fetch(url, options)
.then(response=>response.json())
.then(data=>data)
.catch(err=>console.log(err))


  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
}



/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  
  const data= await getWeatherData(city)
  showWeatherData(data)
  
  
  
  // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  console.log(weatherData,"🍪")
  console.log(weatherData.name)
  document.getElementById("temp").innerText=Math.round((Number(weatherData.main.temp)-273.15))
  document.getElementById("city-name").innerText=weatherData.name
  document.getElementById("min-temp").innerText=Math.round((Number(weatherData.main.temp_min)-273.15))
  document.getElementById("max-temp").innerText=Math.round((Number(weatherData.main.temp_max)-273.15))
  document.getElementById("weather-type").innerText=weatherData.weather[0].main
  

  //CODE GOES HERE
  
}


