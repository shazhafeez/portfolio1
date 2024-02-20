import React, { useRef } from "react";
import videobg from "./200123_01_Particle_Snow_seamless_loop.mp4";
import { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import travel from "D:/react/portfolio/src/porjects/travel web/mobile home.png";
import news from "D:/react/portfolio/src/porjects/newsapp API/mobile.png";
import text from "D:/react/portfolio/src/porjects/text utility/mobile main.png";
import amazon from "D:/react/portfolio/src/porjects/amazon clone/hero-header.png";
import currency from "D:/react/portfolio/src/porjects/currency converter/mobile.png";
import pass from "D:/react/portfolio/src/porjects/password generatore/mobile.png";
import folder from "D:/react/portfolio/src/Folder no bg.png";
import {
  motion,
  useAnimate,
  stagger,
  useAnimation,
  animate,
  AnimatePresence,
  calcLength,
  useInView,
} from "framer-motion";
// all startup images
import startuppage1 from "D:/react/portfolio/src/porjects/startup/page1.png";
import startuppage2 from "D:/react/portfolio/src/porjects/startup/page2.png";
import startuppage3 from "D:/react/portfolio/src/porjects/startup/page3.png";
import startuppage4 from "D:/react/portfolio/src/porjects/startup/page4.png";
import startupfooter from "D:/react/portfolio/src/porjects/startup/footer.png";
import startupmenudown from "D:/react/portfolio/src/porjects/startup/menu down.png";
import startuploginpage from "D:/react/portfolio/src/porjects/startup/login page.png";

import icon1 from "D:/react/portfolio/src/all-inclusive.png";
import icon2 from "D:/react/portfolio/src/select-all.png";
import icon3 from "D:/react/portfolio/src/select.png";
import icon4 from "D:/react/portfolio/src/selection.png";

import realstateHomepage from "D:/react/portfolio/src/porjects/real estate business/realstate homepage mobile.png";
import realstateMain from "D:/react/portfolio/src/porjects/real estate business/main.png";

import Footer from "../SubHome/Footer";
const realEstateImage = [
  startuppage1,
  startuppage2,
  startuppage3,
  startuppage4,
  startupfooter,
  startupmenudown,
  startuploginpage,
];
function Home() {
  const [page, setPage] = useState(0);

  const [width, setwidth] = useState("100%");
  const changewidth = () => {
    if (window.innerWidth < 1120) {
      setwidth("100%");
    } else if (window.innerWidth < 1000) {
      setwidth("100%");
    } else if (window.innerWidth < 790) {
      setwidth("100%");
    } else if (window.innerWidth < 500) {
      setwidth("100%");
    }
  };
  window.addEventListener("resize", changewidth);

  const TextStagger = stagger(0.4, { startDelay: 0.15 });

  function MoveHero() {
    const [scope, animate] = useAnimate();
    useEffect(() => {
      animate(
        "div",

        {
          y: [1000, 0],
          opacity: [0, 1],
        },
        {
          duration: 3,
          delay: TextStagger,
          type: "spring",
          stiffness: 30,
          damping: 10,
        }
      );
    }, []);
    return scope;
  }

  // const controls = useAnimation();
  // const [ref, inView] = useInView();

  const BoxVariant = {
    initial: {
      x: 0,
    },
    animate: {
      x: 0,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  };

  // useEffect(
  //   (i) => {
  //     if (inView) {
  //       controls.start({
  //         y: [2000, 0],
  //         opacity: [0, 1],

  //         transition: {
  //           duration: 25,
  //           delay: 0.3 * i,
  //           type: "spring",
  //           stiffness: 70,
  //           damping: 30,
  //         },
  //       });
  //     }
  //   },
  //   [inView]
  // );

  const scope = MoveHero();

  function MoveToLeft(page) {
    if (page > 0) {
      setPage(page - 1);
    } else if (page == 0) {
      setPage(realEstateImage.length - 1);
    }
  }
  function MoveToRight(page) {
    if (page == 6) {
      setPage(0);
    } else if (page >= 0) {
      setPage(page + 1);
    }
  }
  const [scale, setScale] = useState(false);
  const scaleIcon = (scale) => {
    setScale(!scale);
  };

  const DivVariant = {
    initial: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <>
      <div className="herosection">
        <video
          src={videobg}
          width={{ width }}
          height="5500px"
          autoPlay
          loop
          muted
        />
        <div className="hero ">
          {/* section 1 */}
          <motion.div className="section1" ref={scope}>
            <div className="btn-1">
              <button className="hero-btn">
                hello<i class="fa-solid fa-sun"></i>
              </button>
            </div>

            <div className="heading ">
              Shahzeb Hafeez-SH
              <br />A proficient front-end developer
            </div>
            <div className="subheading">
              {" "}
              merging technical prowess with design finesse.
            </div>
          </motion.div>
          {/* section 2 */}
          <div className="movable-container">
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>
            <div className="venture">venture</div>

            {/* <motion.div
              className="movable2"
              initial={{
                x: 1000,
              }}
              animate={{
                x: [-500, -1000, -1500, -2000],
                opacity: [1, 0.9, 0.6, 0.4],
                color: "orange",
              }}
              transition={{
                duration: 25,

                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              
            </motion.div> */}
          </div>
          {/* highlights */}
          <div className="highlights">
            Highlights
            <div className="sub-highlight">
              some of my most outstanding works
            </div>
          </div>
          <motion.div
            className="maincontainer"
            variants={DivVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once:true
            }}
          >
            <div className="divcontainer1">
              <div className="div1">
                <img src={realstateHomepage} />

                <motion.img
                  src={realstateMain}
                  whileHover={{
                    zIndex: 1,
                    transition: {
                      duration: 3,
                      delay: 0.2,
                      type: "spring",
                      damping: 100,
                      stiffness: 30,
                    },
                  }}
                />
                <Link to="/Work/RealState" className="icon4">
                  <i
                    class="fa-solid fa-arrow-up-right-from-square fa-lg"
                    style={{ color: "#ffffff" }}
                  ></i>
                </Link>
              </div>
              <div className="div2">
                <button className="left" onClick={() => MoveToLeft(page)}>
                  <i
                    class="fa-solid fa-angle-left fa-2xl"
                    style={{ color: "#ffffff" }}
                  ></i>
                </button>
                <img src={realEstateImage[page]} />
                <button className="right" onClick={() => MoveToRight(page)}>
                  <i
                    class="fa-solid fa-angle-right fa-2xl"
                    style={{ color: "#ffffff" }}
                  ></i>
                </button>
                <Link to="/Work/TitanStartup" className="icon">
                  <i
                    class="fa-solid fa-arrow-up-right-from-square fa-lg"
                    style={{ color: "#ffffff" }}
                  ></i>
                </Link>
              </div>
            </div>
            {/* <div className="seconddiv">
              <motion.div className="image3">
                <img src={travel} alt="" />
              </motion.div>
            </div> */}
          </motion.div>
          <motion.div className="thirdcontainer"
            variants={DivVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once:true
            }}
          >
            <div className="first">
              <div className="tablet-bg">
                <motion.img src={text} alt="" />
              </div>
              <Link to="/Work/TextUtility" className="icon2">
                <i
                  class="fa-solid fa-arrow-up-right-from-square fa-lg"
                  style={{ color: "#ffffff" }}
                ></i>
              </Link>
            </div>
            <div className="second">
              <div className="secondContainer">
                <img src={news} alt="" />
              </div>
              <Link to="/Work/NewsAPI">
                <i
                  class="fa-solid fa-arrow-up-right-from-square fa-lg"
                  style={{ color: "#ffffff" }}
                ></i>
              </Link>
            </div>
          </motion.div>
          <motion.div className="fourthcontainer"
            variants={DivVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once:true
            }}
          >
            {/* <div className="myfirst">
              <img src={currency} alt="" />
            </div>
            <div className="mysecond">
              <img src={pass} alt="" />
            </div> */}
            <div className="mythird">
              <img src={amazon} alt="" />
              <Link to="/Work/Amazon" className="icon3">
                <i
                  class="fa-solid fa-arrow-up-right-from-square fa-lg"
                  style={{ color: "#ffffff" }}
                ></i>
              </Link>
              <motion.div
                className="myfourth"
                onHoverStart={() => scaleIcon(scale)}
                onHoverEnd={() => scaleIcon(scale)}
              >
                <div className="fourthcontainer">
                  <img src={folder} alt="" />
                </div>
                <motion.div
                  className="folderDetails"
                  animate={{ y: scale ? -230 : 0, opacity: scale ? 1 : 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 10,
                  }}
                >
                  <div>
                    <img src={icon1} alt="" />
                  </div>
                  <div>
                    <img src={icon2} alt="" />
                  </div>
                  <div>
                    <img src={icon3} alt="" />
                  </div>
                </motion.div>
              </motion.div>
              <div className="iconContainer">
                <Link to="/Work">
                  <motion.i
                    class="fa-solid fa-arrow-up-right-from-square fa-lg"
                    style={{ color: "#ffffff", scale: scale ? 1.2 : 1 }}
                  ></motion.i>
                </Link>

                <motion.div
                  className="allprojects"
                  initial={{ y: 100 }}
                  animate={{ opacity: scale ? 1 : 0, y: scale ? 0 : 100 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 10,
                  }}
                >
                  All Projects
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
