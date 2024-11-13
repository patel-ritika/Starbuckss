import React, {useState} from 'react';
import "../asset/styles/header.css";
import logo from "../asset/images/logo.png"; // Replace with your actual logo file path
import { FaMapMarkerAlt, FaBars } from "react-icons/fa"; // Location icon
import { Link } from 'react-router-dom';


const Header = () => {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // New state for mobile menu

    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <header className="header">
            {/* Left side: Logo and Menu */}
            <div className="header-left">
            <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
                
                {/* Menu icon for mobile */}
                <FaBars className="menu-icon" onClick={toggleMenu} />

                {/* Navigation (show based on menuOpen state on mobile) */}
                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item" onClick={toggleSubmenu}>
                            MENU
                            {submenuOpen && (
                                <ul className="submenu">
                                    <Link
                                       to="/menu"
                                       onClick={() => setSubmenuOpen(false)}
                                       style={{ color: "black", textDecoration: "none"}}
                                    >
                                        <li>Menu</li>
                                    </Link>

                                    <Link
                                       to="/featured"
                                       onClick={() => setSubmenuOpen(false)}
                                       style={{ color: "black", textDecoration: "none"}}
                                    >
                                        <li>Featured</li>
                                    </Link>

                                    <Link
                                       to="/previous"
                                       onClick={() => setSubmenuOpen(false)}
                                       style={{ color: "black", textDecoration: "none"}}
                                    >
                                        <li>Previous</li>
                                    </Link>

                                    <Link
                                       to="/favorites"
                                       onClick={() => setSubmenuOpen(false)}
                                       style={{ color: "black", textDecoration: "none"}}
                                    >
                                        <li>Fevorites</li>
                                    </Link>
                                </ul>
                            )}
                        </li>
                        <li className="nav-item">
                            <Link to="/rewards" 
                            onClick={() => setSubmenuOpen(false)}
                            style={{ color: "black", textDecoration: "none"}}
                            >REWARDS</Link> {/* Link to a new page */}
                        </li>

                        <li className="nav-item">
                            <Link to="/gift-cards"
                            onClick={() => setSubmenuOpen(false)}
                            style={{ color: "black", textDecoration: "none"}}
                            >GIFT CARDS</Link> {/* Link to a new page */}
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Right side: Location, Find a Store, and Buttons */}
            <div className="header-right">
                <div className="location">
                    <FaMapMarkerAlt className="location-icon" />
                    <span>Find a Store</span>
                </div>
                <button className="btn sign-in">Sign In</button>
                <button className="btn join-now">Join Now</button>
            </div>

            
        </header> 
         );
}

export default Header;


