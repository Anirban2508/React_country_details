import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom"
import { getCountryIndData } from "../../api/postApi";

export const CountryDetails = () =>{
    const params = useParams();
     const[isPending, startTransition]= useTransition();
        const [country, setCountry]= useState();
        
        useEffect(() =>{
            startTransition(async() =>{
           const res= await getCountryIndData(params.id);
           console.log(res);
           if(res.status === 200 ){
             setCountry(res.data[0]);
           }
            })
        },[])
        if(isPending) return <h1>Loading...</h1>
    console.log(params);
    return(
        <section className="card country-details-card container">
            {country && (
            <div className="container-card bg-white-box">
                <div className="country-image grid grid-two-cols">
                  
                   <img src={country.flags.svg} alt={country.flags.alt} />  
                     <div className="country-content">
                        <p className="card-title">{country.name.official}</p>
                        <div className="infoContainer">
                            <p>
                                <span className="card-description">Native Names: </span>
                                {Object.keys(country.name.nativeName)
                                .map((key) => country.name.nativeName[key].common)
                                .join(" ,")
                                }
                            </p>
                            <p>
                                <span className="card-description">Population:</span>
                                {country.population.toLocaleString()}
                            </p>
                            <p>
                                <span className="card-description">Region:</span>
                                {country.region}
                            </p>
                            <p>
                                <span className="card-description">Sub Region:</span>
                                {country.subregion}
                            </p>
                            <p>
                                <span className="card-description">Capital:</span>
                                {country.capital}
                            </p>
                            <p>
                                <span className="card-description">Top Level Domain:</span>
                                {country.tld[0]}
                            </p>
                        </div>
                    <div className="country-card-backbtn">
                        <NavLink to="/country" className="backbtn"> 
                        <button>Go Back</button></NavLink>
                    </div>
                    </div>


                </div>
            </div>
            )}  
        </section>
    )
}