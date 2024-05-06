import React, { useEffect } from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import logo from "../Navbar/Untitled_design__2_-removebg-preview.png";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    const Text = document.querySelector(".myName");
    Text.innerHTML = Text.innerText
      .split("")
      .map(
        (character, index) =>
          `<span style="transform:rotate(${index * 12}deg)">${character}</span>`
      )
      .join("");

    
  }, []);
  return (
    
      <div className="SubHome">
        <div className="subHomeContainer">
          <div className="Skills">
            <div className="SkillsTitle">[WHAT I CAN DO FOR YOU]</div>
            <div className="SkillsDesciption">
              With nearly a decade of experience, I <br /> can help make your
              brand or products’
              <br /> experience not just humane, but also
              <br /> memorable.
            </div>
          </div>
          <div className="viewWorks">
            <div className="WorksTitle">[SELECTED WORKS]</div>
            <p>2020-2023</p>
            <Link to="/Work">
              <motion.button
                className="ViewAll"
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                VIEW ALL WORK
              </motion.button>
            </Link>
          </div>
        </div>
        <div className="marquee">
          <div>STUDIO BY SHZ</div>
          <div>STUDIO BY SHZ</div>
          <div>STUDIO BY SHZ</div>
          <div>STUDIO BY SHZ</div>
          <div>STUDIO BY SHZ</div>
          <div>STUDIO BY SHZ</div>
          <div>STUDIO BY SHZ</div>
          <div>STUDIO BY SHZ</div>
          <div>STUDIO BY SHZ</div>
          <div>STUDIO BY SHZ</div>
          <div>STUDIO BY SHZ</div>
        </div>
        <div className="msgContainer">
          <div className="available">[NEXT AVAILABLE IN AUGUST 2024]</div>
          <div className="msg">
            Let’s create
            <br /> together
          </div>
          <Link to="/Contact">
            <motion.button
              className="email"
              whileHover={{
                scale: 1.2,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              SHOOT ME AN EMAIL
            </motion.button>
          </Link>
        </div>
        <div className="AboutContainer">
          <div className="aboutMeLinks">
            <span>More About Me</span>
            <Link to="/About">About</Link>
            <div>Skills</div>
            <div>Qualification</div>
          </div>
          <div className="create">
            <span>I Create</span>
            <div>Design</div>
            <div>Coding</div>
            <div>Developments</div>
          </div>
          <div className="socials">
            <span>Connect With Me</span>
            <div>Twitter</div>
            <div>Linkedin</div>
            <div>Instagram</div>
          </div>
        </div>
        <div className="copyright">
          <span>&#169; 2024 Shahzeb Hafeez </span>
          <span>All rights reserved.</span>
          <div className="circleContainer">
            <div className="borderContainer">
              <p className="myName"> shahzeb hafeez shahzeb hafeez</p>
              <div className="MovingCircle">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="badge">
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Footer;
