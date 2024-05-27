import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import logoNavJour from '../../src/assets/images/logo-nav-jour.svg';
import logoNavNuit from '../../src/assets/images/logo-nav-nuit.svg';
import '../index.scss';

const Nav = ({ isNightMode, toggleTheme }) => {
  return (
    <>
      <div className="navbar" >
        <div className='nav-links'>
          <Link to="/restaurants"> <p className='gold'> RESTAURANTS </p> </Link>
          <Link to="/"> <img src={isNightMode ? logoNavNuit : logoNavJour} alt='Logo navbar' /> </Link>
          <Dropdown className='btn-dropdown'>
            <Dropdown.Toggle className='gold log'> CONNEXION </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/login"> SE CONNECTER </Dropdown.Item>
              <Dropdown.Item as={Link} to="/signup"> S'INSCRIRE </Dropdown.Item>
              <Dropdown.Item as={Link} to="/option3"> Option 3 </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='theme-toggler'>
          <button id="themeLogo" onClick={toggleTheme}>
            {isNightMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;
