import React from "react";

const SocialIcon = ({ icon, color, link, label }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ backgroundColor: color }}
            aria-label={label}
        >
            {icon}
        </a>
    );
};

export default SocialIcon;
