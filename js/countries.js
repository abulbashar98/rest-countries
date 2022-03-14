

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {

    const countryHtml = countries.map(country => getCountryHtml(country))
    // console.log(countryHtml.join(' '));
    const container = document.getElementById('countries');

    container.innerHTML = countryHtml.join(' ');
}


loadCountries();

const getCountryHtml = country => {


    return `
             <div class="country">
             <h2>${country.name.official}</h2>
             <h3>Capital: ${country.capital}</h3>
             <img src="${country.flags.png}">
              </div>
     `;
}