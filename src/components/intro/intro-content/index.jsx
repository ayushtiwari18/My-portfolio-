import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import ayush from "../../../images/ayush.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Ayush Tiwari</span>
                    </h1>
                    <p>
                        A dedicated Full Stack Developer passionate about
                        crafting robust web solutions. With certifications in
                        GitHub, cybersecurity, and Java DSA, <br></br>I
                        demonstrate a commitment to mastering essential
                        technologies.
                    </p>
                    <CallToAction text="Contact me" />
                </div>
                <div className="right-col">
                    <img
                        src={ayush}
                        alt="OG Ayush"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">
                            Best Design <br></br>
                        </div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>4k+</span>
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
