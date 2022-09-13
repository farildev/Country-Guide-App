let seacrhBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-input");

seacrhBtn.addEventListener("click" , () => {
    let countryName = countryInput.value('');
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        result.innerHTML = `<img src="${data[0].flags.svg}" class="flag-img" />
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital: <span>${data[0].capital[0]}</span></h4>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent: <span>${data[0].continents[0]}</span></h4>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population: <span>${data[0].population}</span></h4>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency: <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span></h4>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common languages: <span> ${Object.values(data[0].languages).toString().split(",").join(", ")}</span></h4>
            </div>
        </div>
        `;
    })
    .catch(() => {
        if(countryName.length == 0) {
            result.innerHTML = `<h3>Input the field cannot be empty</h3>`
        }
    })
});

