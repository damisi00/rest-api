


function displayList (country) {
    localStorage.setItem('uniqueId', country);
} 


let cardWrap = document.getElementById('card-wrap');
let file = '../data.json';
// To fetch all the countries

async function getCountryList() {

    const response = await fetch(file);
    const data = await response.json();
    return displayCountries(data);
};

getCountryList();


function displayCountries (countries) {

        
        let htmlBody = "";

        for (const country of countries) {

            // const countryObj = JSON.stringify(country);
    //  console.log(country);

            htmlBody += `

                <a href="./country.html" onclick="showCountryDetail('${country.name}')"  class="card">
                    <div class="card-flag">

                        <img src="${country.flags.png}" alt="${country.name}'s flag" />
            
                    </div>

                    <div class="country-details">

                        <h4>${country.name}</h4>
                        <p><strong>Population</strong>: ${country.population}</p>
                        <p><strong>Region</strong>: ${country.region}</p>
                        <p><strong>Capital</strong>: ${country.capital}</p>
                    </div>
                </a>
    
            `
            cardWrap.innerHTML = htmlBody;
        };
};



// To search for countries

document.querySelector('.search-for-country').addEventListener('keyup', (e) => {
  
    const findCountry = e.target.value;
  
    // This is a fetch request to the API. It is using the findCountry to search for the country.
    fetch(`https://restcountries.com/v3.1/${findCountry}`)
      .then((response) => response.json())
      .then((data) => displayFindCountry(data[0]));
  
    // checking if the findCountry is empty? if it is, it will load all the countries.
    if (findCountry === '') {
      getCountryList();
    }
});


// To display search

function displayFindCountry(country) {
    
        let cardWrap = document.getElementById('card-wrap');
        let htmlBody = "";

        
            htmlBody += `

                <a href="./country.html" class="card">
                    <div class="card-flag">

                        <img src="${country.flags.png}" alt="flag" class="" />
            
                    </div>

                    <div class="country-details">

                        <h4>${country.name.common}</h4>
                        <p><strong>Population</strong>: ${country.population}</p>
                        <p><strong>Region</strong>: ${country.region}</p>
                        <p><strong>Capital</strong>: ${country.capital}</p>
                    </div>
                </a>
    
            `
        cardWrap.innerHTML = htmlBody
    
};


// To access clicked country in full details

function accessCountryDetail(code) {
  
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => showCountryDetail(data[0]));
};

const showCountryDetail = (country) => {
    // window.location.href = '../country.html';
    const countryObject = JSON.stringify(country);
    sessionStorage.setItem('country', countryObject);
    // console.log(country);
};



// To select regions

function getCountryList2() {
    fetch(file)
      .then((res) => res.json())
      .then((data) => displayRegionCountry(data));
  };
  
  getCountryList2();

  
function setRegionalElements(country) {

    switch (country) {
        case (country.region === 'Africa'):
            const regionAfrica = document.getElementById('africa');
            regionAfrica.children[0].innerText = country.region;
          break;
        case (country.region === 'Americas'):
            const regionAmerica = document.getElementById('america');
            regionAmerica.children[0].innerText = country.region;
          break;
        case (country.region === 'Asia'):
            const regionAsia = document.getElementById('asia');
            regionAsia.children[0].innerText = country.region;
            break;
        case (country.region === 'Europe'):
            const regionEurope = document.getElementById('europe');
            regionEurope.children[0].innerText = country.region;
            break;
        case (country.oceania === 'Oceania'):
            const regionOceania = document.getElementById('oceania');
            regionOceania.children[0].innerText = country.region;
        
      }
}



function displayRegionCountry(countries) {
    const filterByRegion = document.getElementById('filter_button');
  
    countries.forEach((country) => {
      setRegionalElements(country);
    });
  
    //* Add event listener to Africa Region List Item
    document.getElementById('africa').addEventListener('click', (e) => {
      cardWrap.innerHTML = '';
  
      const africanCountries = countries.filter((country) => {
        filterByRegion.innerText = 'Africa';
        return country.region === 'Africa';
      });
      displayCountries(africanCountries);
      return;
    });
  
    //* Add event listener to Americas Region List Item
    document.getElementById('america').addEventListener('click', (e) => {
   
      cardWrap.innerHTML = '';
  
      const americanCountries = countries.filter((country) => {
        filterByRegion.innerText = 'America';
        return country.region === 'Americas';
      });
      displayCountries(americanCountries);
      return;
    });
  
    //* Add event listener to Asia Region List Item
    document.getElementById('asia').addEventListener('click', (e) => {
    
      cardWrap.innerHTML = '';
  
      const asianCountries = countries.filter((country) => {
        filterByRegion.innerText = 'Asia';
        return country.region === 'Asia';
      });
      displayCountries(asianCountries);
      return;
    });
  
    //* Add event listener to Europe Region List Item
    document.getElementById('europe').addEventListener('click', (e) => {
    
      cardWrap.innerHTML = '';
  
      const europeanCountries = countries.filter((country) => {
        filterByRegion.innerText = 'Europe';
        return country.region === 'Europe';
      });
      displayCountries(europeanCountries);
      return;
    });
  
    //* Add event listener to Oceania Region List Item
    document.getElementById('oceania').addEventListener('click', (e) => {
    
      cardWrap.innerHTML = '';
  
      const oceanicCountries = countries.filter((country) => {
        filterByRegion.innerText = 'Oceania';
        return country.region === 'Oceania';
      });
      displayCountries(oceanicCountries);
      return;
    });
  }