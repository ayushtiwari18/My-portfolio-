import React, { useState } from "react";
import cloud from "../../images/cloud.png";
import cloudSoft from "../../images/cloud-soft.png";
import Navigation from "./navigation-bar";
import IntroContent from "./intro-content";
import MobileNav from "./mobile-nav"; // New component for mobile navigation
import "./style.scss";

const Intro = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="intro-section">
            <div
                className="vector-bg"
                id="parallax"
            ></div>
            <img
                src={cloud}
                className="cloud"
                alt="Cloud"
            />
            <img
                src={cloudSoft}
                className="cloud-soft"
                alt="Soft cloud"
            />
            <div className="content">
                <div className="desktop-nav">
                    <Navigation />
                </div>
                <MobileNav
                    isOpen={isMobileMenuOpen}
                    toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
                <IntroContent />
            </div>
        </div>
    );
};

export default Intro;
