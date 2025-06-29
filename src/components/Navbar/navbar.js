// import {useNavigate} from 'react-router-dom';
import './navbar.css'; 
import { Link } from 'react-router-dom';


const Navbar = () => {
    // const navigate = useNavigate();


    return(
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className="navbar-logo">
                    <h3 className="first-logo">Oğulcan</h3>
                    <h3 className="second-logo">Kacar</h3>
                </Link>
                <div className="nav-menu">
                    

                    <div className="nav-right">
                        <Link to='/about' className='nav-links'>
                            <span className="nav-text">Hakkımda</span>
                        </Link>
                        <Link to='/projects' className='nav-links'>
                            <span className="nav-text">Projeler</span>
                        </Link>
                        <Link to='/skills' className='nav-links'>
                            <span className="nav-text">Yetenekler</span>
                        </Link>
                        <Link to='/contact' className='nav-links'>
                            <span className="nav-text">İletişim</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;