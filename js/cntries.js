const loadCountries = () => {
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data))
}

const displayCountries= countries => {
    // for ( const country of countries){
    //     console.log(country)
    // }


     const countriesContainer=document.getElementById('contries-container');


    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML=`
        <h3> Name: ${country.name.common}</h3>
        <p> capital: ${country.capital[0]}</p>
        <button onclick="loadCountryDetail('${country.cca2}')"> Details</button>
        `

        countriesContainer.appendChild(countryDiv);
    })
}

loadCountryDetail = (code) =>{
    // https://restcountries.com/v3.1/name/{name}
    const url = `https://restcountries.com/v3.1/name/${code}`
    // console.log('get coutry details', code)
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))

}


const displayCountryDetail =  country => {
    const countryDetail =document.getElementById('country-detail');
    countryDetail.innerHTML=`
    <h2> Details : ${country.name.common}</h2>
    <img src="${country.flags.png}"> 
    `
}

loadCountries();