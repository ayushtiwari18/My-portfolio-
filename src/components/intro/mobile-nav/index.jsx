// mobile-nav.jsx
import React from "react";
import "./mobile-nav.scss";

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <div className="mobile-nav">
            <button
                className="hamburger"
                onClick={toggleMenu}
            >
                ☰
            </button>
            {isOpen && (
                <div className="mobile-menu">
                    <a
                        href="#about"
                        onClick={toggleMenu}
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        onClick={toggleMenu}
                    >
                        Skills
                    </a>
                    <a
                        href="#portfolio"
                        onClick={toggleMenu}
                    >
                        Portfolio
                    </a>
                    <a
                        href="#contact"
                        onClick={toggleMenu}
                    >
                        Contact
                    </a>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
