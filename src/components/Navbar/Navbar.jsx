import React from "react";
import "./Navbar.css";
import logo from "./Untitled_design__2_-removebg-preview.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  

  const NavVariant = {
    start: {
      x: 100,
      opacity: 1,
    },
    end: {
      x: 100,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const ulVariant = {
    start: {},
    end: {
      x: 50,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.4,
        when: "AfterChildren",
      },
    },
  };
  const LiVariant = {
    start: {
      y: -50,
      opacity: 0,
    },
    end: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    
      <nav>
        <motion.div
          className="logo"
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 30,
            damping: 10,
          }}
        >
          <img src={logo} />
        </motion.div>
        {/* <motion.div className="globemenu" onClick={() => setClick(!click)}>
          <i
            class={
              click
                ? "fa-light fa-list-ul fa-xl" 
                : "fa-sharp fa-thin fa-bars fa-2xl"
            }
            style={{color: "ffffff"}}
          ></i>
        </motion.div> */}
        {/* laptop view */}
        <motion.div
          className="main "
          initial={{ y: -100, opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 30,
            damping: 10,
          }}
        >
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/About" className="about">
            About
          </Link>
          <Link to="/Work" className="Work">
            Work <div className="yellowdot"></div>
          </Link>
        </motion.div>
        <Link to="/Contact">
          <motion.div
            className="contact"
            initial={{ x: 1500, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 30,
              damping: 10,
            }}
          >
            Contact Me
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </motion.div>
        </Link>
      
      {/* mobile view */}
      {/* <div className="mobile">
        <motion.div
          className="menu-enabled"
          variants={NavVariant}
          initial="start"
          animate= "end" 
        >
          <motion.ul variants={ulVariant}>
            <motion.li className="About-mobile" key={1} variants={LiVariant}>
              About
            </motion.li>
            <motion.li className="home-mobile" key={2} variants={LiVariant}>
              Home
            </motion.li>
            <motion.li className="Work-mobile" key={3} variants={LiVariant}>
              Work <motion.li className="yellowdot"></motion.li>
            </motion.li>
            <motion.li className="contact-mobile" key={4} variants={LiVariant}>
              Contact
            </motion.li>
          </motion.ul>
        </motion.div>
      </div> */}
      </nav>
  );
}

export default Navbar;
