import React, { useState } from "react";

import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    FaStackOverflow,
    FaInstagram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import Section from "../shared/section";
import Logo from "../../images/LogoAtT.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";

const Footer = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Section
            background="dark"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={Logo}
                        alt="JS Dev Hindi"
                    />
                </div>
                <div
                    className="menu-toggle"
                    onClick={toggleMenu}
                >
                    ☰
                </div>
                <ul className={`footer-menu-items ${menuOpen ? "open" : ""}`}>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Blog & Articles
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        color="#0D2636"
                        icon={<SiLeetcode />}
                        link="https://leetcode.com/u/_aayush03/"
                        label="Check out our GitHub profile"
                    />
                    <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com/ayushtiwari18"
                        label="Check out our GitHub profile"
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedinIn />}
                        link="https://www.linkedin.com/in/tiwariaayush/"
                        label="Connect with us on LinkedIn"
                    />
                    <SocialIcon
                        color="#f2740d"
                        icon={<FaStackOverflow />}
                        link="https://stackoverflow.com/users/19861790/ayush-tiwari?tab=profile"
                        label="View our Stack Overflow profile"
                    />
                    <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                        link="https://www.instagram.com/_aayush.03__/"
                        label="Follow us on Instagram"
                    />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2024 Ayush Creations | All Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
