let restCountry = [];
fetch("https://restcountries.eu/rest/v2/all").then((res) => {
    res.json().then((data) => {
        restCountry = data;
    })
})

//1. Get all the countries from Asia continent using Filter function
var asiaCountry = restCountry.filter((item) => (item.region === 'Asia') ? item.name : false);
console.log(asiaCountry);


//2. Get all the countries with population of less than 2 lacs using Filter function
var countries = restCountry.filter((item) => item.population >= 200000);
console.log(countries);


//3. Print the following details name, capital, flag using forEach function
restCountry.forEach((elem) => {
    console.log(elem.name, elem.capital, elem.flag);
})


//4. Print the total population of countries using reduce function
var totalPopulation = restCountry.reduce((acc, item) => {
    return acc + item.population;
}, 0)
console.log(totalPopulation);


//5. Print the total population of countries in Asia continent using reduce and filter function
var asia = restCountry.filter((elem) => elem.region === 'Asia').reduce((acc, item) => {
    return acc + item.population;
}, 0)

//6. Print the country which use US Dollars as currency.
var dollarCurrencyCountries = restCountry.filter((elm) => elm.currencies[0].code === 'USD');

