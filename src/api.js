const weatherAPI_ID = 'c372213cb55b138bb18c56da625c313d';

export const fetchCoordinatesAPI = async (cityName) => {
    const API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}%20&limit=5&appid=${weatherAPI_ID}`;   
    
    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
};

export const fetchWeatherConditionsAPI = async (...coordinates) => {
    const [lat, lon] = coordinates;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherAPI_ID}&lang=pt_br`;

    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
}