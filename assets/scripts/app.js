const btn = document.querySelector("#search-btn");
const searchInput = document.querySelector("#country-input");

btn.addEventListener("click", () => {
    let countryName = searchInput.value;
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(url);
});