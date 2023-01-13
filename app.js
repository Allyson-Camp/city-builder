/* Imports */
import { renderSlogan } from './utils.js';
/* Get DOM Elements */
const skylineDropdown = document.getElementById('skyline-dropdown');
const skylineCountEl = document.getElementById('skyline-count');

const artDropdown = document.getElementById('art-dropdown');
const artCountEl = document.getElementById('art-count');

const parkDropdown = document.getElementById('park-dropdown');
const parkCountEl = document.getElementById('park-count');

const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
const slogansDisplayEl = document.getElementById('slogans-display');

const skylineEl = document.getElementById('skyline');
const artEl = document.getElementById('art');
const parksEl = document.getElementById('park');

/* State */
let skylineCount = 0;
let artCount = 0;
let parkCount = 0;
let slogans = [];

//call functions
// displayStats();
// displaySlogan();

/* Events */
skylineDropdown.addEventListener('change', () => {
    const skylineValue = skylineDropdown.value; 
    skylineCount++;
    console.log(skylineCount);
    skylineEl.style.backgroundImage = `url(./assets/${skylineValue}-skyline.png)`;
    displayStats();
});

artDropdown.addEventListener('change', () => {
    const artValue = artDropdown.value; 
    artCount++;
    artEl.style.backgroundImage = `url(./assets/${artValue}-art.png)`;
    displayStats();
});

parkDropdown.addEventListener('change', () => {
    const parkValue = parkDropdown.value; 
    parkCount++;
    parksEl.style.backgroundImage = `url(./assets/${parkValue}-park.png)`;
    displayStats();
});

sloganButton.addEventListener('click', () => {
    slogans.push(sloganInput.value);
    sloganInput.value = '';
    displaySlogan();
});


/* Display Functions */

function displayStats() {
    artCountEl.textContent = artCount;
    skylineCountEl.textContent = skylineCount;
    parkCountEl.textContent = parkCount;
}

function displaySlogan() {
    slogansDisplayEl.textContent = '';

    for (let slogan of slogans){
        const newElement = renderSlogan(slogan);
        slogansDisplayEl.append(newElement);
    }
}


// (don't forget to call any display functions you want to run on page load!)
