import React from "react";
import "./style.scss";
import Section from "../shared/section";
import TechIcon from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Skills = () => {
    return (
        <Section
            id="skills"
            background="dark"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcon}
                        alt="JS, HTML CSS React"
                        loading="lazy"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <ul>
                        <li>
                            <b>Technical Proficiency:</b> Demonstrated
                            proficiency in programming languages including{" "}
                            <i>Python</i>, <i>Java</i>, <i>C++</i>, and{" "}
                            <i>JavaScript</i>, allowing for the development of
                            sophisticated software applications and web-based
                            solutions.
                        </li>
                        <li>
                            <b> Data Analysis and Visualization:</b> Skilled in
                            employing tools such as <i>SQL</i>,<i> Excel</i>,
                            Tableau, and Power BI for the analysis and
                            interpretation of complex datasets, effectively
                            communicating findings in a comprehensible format
                        </li>
                        <li>
                            <b>Project Management: </b>Proven experience in the
                            strategic planning, execution, and oversight of
                            projects from inception through to completion,
                            ensuring timely delivery and adherence to
                            established quality standards
                        </li>
                        <li>
                            <b>Communication and Leadership:</b> Capable of
                            facilitating effective internal and external
                            communication, adept at leading teams towards the
                            achievement of shared objectives and cultivating a
                            productive collaborative environment
                        </li>
                        <li>
                            <b> Problem-Solving and Critical Thinking:</b>{" "}
                            Equipped with a logical mindset and analytical
                            approach, excelling in the identification of issues,
                            the formulation of innovative solutions, and the
                            implementation of strategies to address and overcome
                            challenges.
                        </li>
                        <li>
                            Continuous Learning: Committed to lifelong learning,
                            actively engaged in staying informed about the
                            latest technological advancements and industry
                            trends, continually seeking out opportunities for
                            professional growth and skill development
                        </li>
                    </ul>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() =>
                            window.open(
                                "https://drive.google.com/file/d/1FIWiol1MjMBbOA3GR_A6UJnipj5_67q_/view?usp=sharing"
                            )
                        }
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
