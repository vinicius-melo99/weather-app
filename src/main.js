import { getCityCoordinates } from './weather';

const citiesButtons = document.querySelector('.cities-buttons');
const searchButton = document.querySelector('#search-btn');

citiesButtons.addEventListener('click', async (e) => {
    const buttonClicked = e.target;

    if(buttonClicked !== citiesButtons) {
        const cityName = buttonClicked.value;
        await getCityCoordinates(cityName);
    }   
})

searchButton.addEventListener('click', () => {
   
});