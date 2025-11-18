import { NavLink, useRouteError } from "react-router-dom";
export const ErrorPage =() =>{

     const error = useRouteError(); //hook usage
    console.log(error);
    return (
        <div>
            <h1>Oops and error occured.</h1>
            {error && <p>{error.data}</p>} 
            <NavLink to="/"><button>GO Home</button> </NavLink>
        </div>
    );

}