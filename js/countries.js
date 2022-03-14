

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

// Note: we could have sent only required items or from displayCountries() function and use them via taking parameters in getCountryHtml() function......

// const getCountryHtml = name, country, capital => {
const getCountryHtml = country => {


    const name = country.name.official;
    const capital = country.capital;
    const flag = country.flags.png;


    /* Note: Or we could have used destructuring like const {name, capital, flags}
    = country;  if only all these data were in the same layer....
    */

    return `
         <div class="country">
         <h2>${name}</h2>
         <h3>Capital: ${capital}</h3>
         <img src="${flag}">
          </div>
 `;
}