import { fetchCoordinatesAPI, fetchWeatherConditionsAPI } from './api';

export const getCityCoordinates = async (cityName) => {
    const coordinates = await fetchCoordinatesAPI(cityName);
    const { lat, lon } = coordinates[0];

    coordinates.length !== 0 ? getCityWeatherInformation(lat, lon) : alert('Cidade não encontrada!');

}

export const getCityWeatherInformation = async (lat, long) => {
    const weatherConditions = await fetchWeatherConditionsAPI(lat,long);
    const { 
        name, 
        sys: { country }, 
        main: { temp, humidity }, 
        weather: [{ description }],
        wind: { speed } 
    } = weatherConditions;

    const weatherObject = {
        name,
        country,
        mainConditions: {
            temp,
            humidity
        },
        windSpeed: speed
    } 
}

const showCityWeatherConditions = (cityConditions) => {

}
