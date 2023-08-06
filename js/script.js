

//'https://restcountries.com/v3.1/all'

function displayList (country) {
    localStorage.setItem('uniqueId', country);
} 


let cardWrap = document.getElementById('card-wrap');

// To fetch all the countries

function getCountryList() {
    fetch('https://restcountries.com/v3.1/all')
    // fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        
        let htmlBody = "";

        for (const country of data) {
            htmlBody += `

                <a href="./country.html" onclick="showCountryDetails('${country.cca2}')"  class="card">
                    <div class="card-flag">

                        <img src="${country.flags.png}" alt="${country.flags.alt}" />
            
                    </div>

                    <div class="country-details">

                        <h4>${country.name.common}</h4>
                        <p><strong>Population</strong>: ${country.population}</p>
                        <p><strong>Region</strong>: ${country.region}</p>
                        <p><strong>Capital</strong>: ${country.capital}</p>
                    </div>
                </a>
    
            `
            var countryPost = localStorage.setItem('country-data', data);
            cardWrap.innerHTML = htmlBody
        };
    })
}

getCountryList();


// To search for countries

document.querySelector('.search-for-country').addEventListener('keyup', (e) => {
  
    const findCountry = e.target.value;
  
    // This is a fetch request to the API. It is using the findCountry to search for the country.
     
    fetch(`https://restcountries.com/v3.1/name/${findCountry}`)
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

                        <img src="${country.flags.png}" alt="country's flag" class="" />
            
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
    
}


// To access clicked country in full details

function accessCountryDetail(code) {
  
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => showCountryDetail(data[0]));
}

const showCountryDetail = (country) => {
    window.location.href = './country.html';
    const countryObject = JSON.stringify(country);
    sessionStorage.setItem('country', countryObject);
    // console.log(country);
};



// To select regions

// const regionSwitch = document.getElementsByClassName('regions');
// regionSwitch.forEach(region => {
//     region.addEventListener('click', e => {
//         console.log('sent');
//         Array.from(regionSwitch).forEach(el =>{
//             if(el.innerText.includes(region.innerText) || region.innerText === '') {
//                 el.parentElement.parentElement.style.display = 'flex';
//             }else{
//                 el.parentElement.parentElement.style.display = 'none';
//             }
//             console.log('done');
//         })
//     })
// })

