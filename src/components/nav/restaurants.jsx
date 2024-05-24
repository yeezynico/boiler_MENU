import { Link } from "react-router-dom";

const Restaurants = () => {
    return(
        <>
        <h1>restaurants :</h1>
        <Link to="/details" > <p>VOIR le resto!!!</p> </Link>
        </>
    )
}

export default Restaurants;