import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import LoginPop from '../../Components/LoginPopup/LoginPop';
import SignPop from '../SignPopup/SignPop';
import { MdPublic } from 'react-icons/md'; // Import Earth icon from Material Icons
import {FaGlobe} from 'react-icons/fa';
import { FaRegUser } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa";

function Header1() {
    const log = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => {
        // Show the login popup
        setShowLogin(true);
    };

    const sig = useNavigate();
    const [showSignup, setShowSignup] = useState(false);
    const handleSignupClick = () => {
        // Show the signup popup
        setShowSignup(true);
    };

    return (
        <div className='Header'>
            <div className='airbnb'>
                <Link to='/'><img src={logo} className='logo' alt='none' /></Link>
            </div>

            <div className='header-menu'>
                <div className="places">
                    <span><Link className='list' to='/'>Places to stay</Link></span>
                    <span><Link className='list' to='/'>Places to stay</Link></span>
                    <span><Link className='list' to='/'>Places to stay</Link></span>
                    <span><Link className='list' to='/'>Places to stay</Link></span>
                </div>

                <div className='host'>
                    <Link to="/HostPage" className='Become'>Become a Host 
                        <FaGlobe className='earth-icon'/>
                    </Link> {/* Add Earth icon after the text */}
                </div>

                <div className='dropdown'>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic"> 
                            <FaGripLines className='line' />
                            <FaRegUser className='user' />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleLoginClick}>Login</Dropdown.Item>
                            <Dropdown.Item onClick={handleSignupClick}>Sign Up</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Host Your Home</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Host an Experience</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            {/* Conditionally render the LoginPop and SignPop components */}
            {showLogin && <LoginPop />}
            {showSignup && <SignPop />}
        </div>
    );
}

export default Header1;
