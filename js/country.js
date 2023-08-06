'use strict';

// var country = localStorage.getItem('country')
const countryObjectString = sessionStorage.getItem('country');
const country = JSON.parse(countryObjectString);

function showDetails (country) {
   
        
        const countryDetails = document.querySelector('.main-container');
        console.log(country);

        const htmlB = `
                
            
                <div class="big-flag-container">
                    <img src="${country.flags.png}" alt="${country.flags.alt}" class="big-flag" />
                </div>

                <div class="country-summary">

                    <h3>${
                   country.name.nativeName.eng.common
                     ? country.name.nativeName.eng.common
                     : country.name.common}</h3>

                    <div class="c-text">
                        <div class="country-details p1">

                            <p><strong>Population</strong>: ${country.population}</p>
                            <p><strong>Region</strong>: ${country.region}</p>
                            <p><strong>Sub Region</strong>: ${country.subregion}</p>
                            <p><strong>Capital</strong>: ${country.capital.[0]}</p>
                        </div>

                        <div class="country-details p2">

                            <p><strong>Top Level Domain</strong>: ${country.tld[0]}</p>
                            <p><strong>Currencies</strong>: </p>
                            <p><strong>Languages</strong>: </p>
                        </div>
                    </div>

                    <div class="border-cs">
                        <p><strong>Border Countries</strong>: </p>
                        <div class="border-btns">
                            <a href="./country.html">France</a>
                            <a href="./country.html">Columbia</a>
                            <a href="./country.html">Zambia</a>
                        </div>
                    </div>

                </div>
        
            `
            countryDetails.innerHTML = htmlB
};

showDetails(country);

function details (code){
    fetch(`https://restcountries.com/v3.1/alpha/${code}/`)
    .then((response) => response.json())
    .then((data) => 
        console.log(showDetails(data[0])))

};
