import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4 className="contact-info-title">
                I would be happy to answer any questions you may have about
                freelancing or Web Design!
            </h4>
            <div className="contact-option-wrapper">
                <div className="contact-option">
                    <FaPhoneAlt className="icon" />
                    <span className="text">+91 9301742572</span>
                </div>
                <div className="contact-option">
                    <MdEmail className="icon" />
                    <span className="text">ayushtiwari102003@gmail.com</span>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
