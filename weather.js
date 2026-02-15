
function getWeather() {

  let city = document.getElementById("cityInput").value;

  if (city === "") {

    document.getElementById("result").innerHTML = "Please enter a city name";
    return;
  }

  
 document.getElementById("result").innerHTML =
        "Temperature: " + city+ "is 25  °C";
    }
    

