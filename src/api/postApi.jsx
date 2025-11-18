import axios from "axios"

 const api= axios.create({
    baseURL:"https://restcountries.com/v3.1"
})


//http get method
export const getCountryData = () =>{
    return api.get("/all?fields=name,population,region,capital,flags")
}

//http get method for individual country name
export const getCountryIndData = (name) =>{ // parameter for params from countryCard.jsx
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,language,borders,flags`)
}
