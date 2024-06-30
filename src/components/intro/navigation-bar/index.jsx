import React, { useState } from "react";
import logo from "../../../images/LogoAtT.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";
import "./style.scss";

const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navItems = [
        { name: "Skills", section: "skills" },
        { name: "Portfolio", section: "portfolio" },
        { name: "Blogs & Articles", section: "blogs" },
    ];

    return (
        <nav className="top-navigation-bar">
            <div className="app-logo">
                <img
                    src={logo}
                    alt="JS Dev"
                />
            </div>
            <div className={`navigation ${mobileMenuOpen ? "open" : ""}`}>
                {navItems.map((item) => (
                    <span
                        key={item.section}
                        className="navigation-item"
                        onClick={() => {
                            scrollToSection(item.section);
                            setMobileMenuOpen(false);
                        }}
                    >
                        {item.name}
                    </span>
                ))}
                <CallToAction
                    text="Contact me"
                    action={() => {
                        scrollToSection("contact");
                        setMobileMenuOpen(false);
                    }}
                />
            </div>
            <div
                className="mobile-menu-toggle"
                onClick={toggleMobileMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navigation;
