import { NavLink } from "react-router-dom"

//have to change eslin.config.js to change react props congig -- "react/prop-types":0,at 32th line
export const CountryCard = ({country}) =>{
    const { flags, name , population , region , capital } = country
    return (
        <li className="country-card card">
            <div className="container-card bg-white-box">
                <img src={flags.svg} alt={flags.alt}/>
                <div className="countryInfo">
                    <p className="card-title">{name.common.length > 10 ? name.common.slice(0, 10) + " ..." : name.common}</p>
                    <p>
                        <span className="card-description">Population</span>
                        {population.toLocaleString()} 
                    </p>
                    <p>
                        <span className="card-description">Region</span>
                        {region}
                    </p>
                    <p>
                        <span className="card-description">Capital:
                            {capital[0]} {/* capital is in array form and we need oth index */}
                        </span>
                    </p>
                    <NavLink to={`/country/${name.common}`}><button>Read More</button></NavLink> 
                    {/* as it goes as get request via url so we need to sed path through rouding in app.jsx file */}
                </div>
            </div>
        </li>
    )
}