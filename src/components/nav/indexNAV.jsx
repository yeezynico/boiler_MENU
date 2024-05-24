import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <>
            <Link to="/restaurants">restaurant </Link>

            <Link to="/">Home </Link>
    
            <Link to="/log">Log </Link>


        </>
    )
}

export default Nav;