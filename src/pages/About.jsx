import countryFacts from "../api/countryData.json"


export const About = () => {
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are the interestiong facts 
                <br/>
                about verious countries
            </h2>
            <div className="gradient-cards">

{
    countryFacts.map((country)=>{
        const {id,countryName,capital,population,keydestination,interestingfacts} = country
        return(
            <div className="card" key={id}>
                    <div className="container-card bg-blue-box">
                        <p className="card-title">{countryName}</p>
                        <p>
                            <span className="card-description">Capotal:</span>
                            {capital}
                        </p>
                        <p>
                            <span className="card-description">Population:</span>
                            {population}
                        </p>
                        <p>
                            <span className="card-description">Key Destinations:</span>
                            {keydestination}
                        </p>
                        <p>
                            <span className="card-description">Interesting Facts:</span>
                            {interestingfacts}
                        </p>
                    </div>
                </div>
        );
    })
}

                
            </div>
        </section>
    );
}