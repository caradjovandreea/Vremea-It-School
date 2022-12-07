// API Key-urile NU ar trebui sa fie stocate in format text, nu este sigur.
// Din pacate, fara un server, nu avem cum sa fim 100% safe, dar API-ul fiind gratuit, in cel mai rau caz cineva ne va bloca aplicatia temporar.
const APPID = "dfb68332de66ba5678c393387a0500a7";

// Construim link-urile (endpoint-urile) severelor de la care vom primi date.
function getCurrentWeatherEndpoint(city) {
  // Intotdeauna, cand folosim un API, putem obtine informatii extra prin query params.
  // lang=ro => Rezultatele vin in romana.
  // units=metric => Unitatea de masura va fi grade celsius.
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ro&appid=${APPID}`;
}

function getForecastEndpoint(city){
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ro&appid=${APPID}`;
}