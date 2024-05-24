// Nav.jsx

import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../../index.scss';

const Nav = () => {
    const [isNightMode, setIsNightMode] = useState(false);

    const toggleTheme = () => {
        setIsNightMode(!isNightMode);
        const html = document.getElementsByTagName('html')[0];
        html.classList.toggle('nuit');
    };

    return (
        <>
            <div className="NAV" >
                <Link to="/restaurants"><p className='gold'>Restaurant</p></Link>
                <Link to="/"><p className='gold'>Home</p></Link>
                <Link to="/log"><p className='gold'>Log</p></Link>
                <button id="themeLogo" onClick={toggleTheme}>
                    {isNightMode ? '☀️' : '🌙'}
                </button>
            </div>
        </>
    );
}

export default Nav;
