import React, { useState } from "react";
import videobg from "../../components/Home/200123_01_Particle_Snow_seamless_loop.mp4";
import "./Work.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// All images
import realstateHomepage from "../../porjects/real estate business/realstate homepage mobile.png";
import realstateMain from "../../porjects/real estate business/main.png";
import startuppage1 from "../../porjects/startup/page1.png";
import startuppage2 from "../../porjects/startup/page2.png";
import startuppage3 from "../../porjects/startup/page3.png";
import startuppage4 from "../../porjects/startup/page4.png";
import startupfooter from "../../porjects/startup/footer.png";
import startupmenudown from "../../porjects/startup/menu down.png";
import startuploginpage from "../../porjects/startup/login page.png";
import news from "../../porjects/newsapp API/mobile.png";
import text from "../../porjects/text utility/mobile main.png";
import amazon from "../../porjects/amazon clone/hero-header.png";

const realEstateImage = [
  startuppage1,
  startuppage2,
  startuppage3,
  startuppage4,
  startupfooter,
  startupmenudown,
  startuploginpage,
];

const Work = () => {
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
  const [OpenDropDown, setOpenDropDown] = useState({
    OpenDropDown1: false,
    OpenDropDown2: true,
    OpenDropDown3: true,
    OpenDropDown4: true,
    OpenDropDown5: true,
  });

  const DropMenu = (dropDownId) => {
    setOpenDropDown({
      ...OpenDropDown,
      [dropDownId]: !OpenDropDown[dropDownId],
    });
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
  return (
    <div className=" WorksContainer ">
      <video
        src={videobg}
        width={{ width }}
        height="6000px"
        autoPlay
        loop
        muted
        playsInline
        className="background-clip"
      />
      <div className="WorksWrapper ">
        <div className="quote">
          "Bringing digital dreams to life with a blend of code, creativity, and
          a deep understanding of user needs and behavior."
        </div>
        <div className="allProjects">
          <motion.div
            className="maincontainer"
            variants={DivVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
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
              </div>
            </div>
          </motion.div>
          <motion.div
            className="thirdcontainer"
            variants={DivVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <div className="second">
              <div className="secondContainer">
                <img src={news} alt="" />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="fourthcontainer"
            variants={DivVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <div className="mythird">
              <img src={amazon} alt="" />
            </div>
          </motion.div>
        </div>
        <div className="DesignProcess">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>Development Phase</div>
        </div>
        <div className="DropDownAllContainer">
          <div className="dropDown1">
            <div
              className="DropDown1Container"
              onClick={() => DropMenu("OpenDropDown1")}
            >
              <span>Design </span>
              <i
                class={
                  OpenDropDown.OpenDropDown1
                    ? "fa-light fa-plus fa-lg"
                    : "fa-light fa-xmark fa-lg"
                }
              ></i>
            </div>
            <motion.div
              className="DropDown1Content"
              initial={{ opacity: 0 }}
              animate={{
                opacity: OpenDropDown.OpenDropDown1 ? 0 : 1,
                display: OpenDropDown.OpenDropDown1 ? "none" : "block",
              }}
            >
              In the design phase, frontend developers collaborate closely with
              designers to translate wireframes and mockups into interactive and
              visually appealing user interfaces. This involves careful
              consideration of typography, color schemes, layout, and overall
              aesthetic to ensure that the final product aligns with the
              client's brand identity and provides an intuitive user experience.
            </motion.div>
          </div>
          <div className="dropDown2">
            <div
              className="DropDown1Container"
              onClick={() => DropMenu("OpenDropDown2")}
            >
              <span>Implementation </span>
              <i
                class={
                  OpenDropDown.OpenDropDown2
                    ? "fa-light fa-plus fa-lg"
                    : "fa-light fa-xmark fa-lg"
                }
              ></i>
            </div>
            <motion.div
              className="DropDown1Content"
              initial={{ opacity: 0 }}
              animate={{
                opacity: OpenDropDown.OpenDropDown2 ? 0 : 1,
                display: OpenDropDown.OpenDropDown2 ? "none" : "block",
              }}
            >
              Implementation is where the magic happens as frontend developers
              bring designs to life using HTML, CSS, and JavaScript. This phase
              involves writing clean, modular, and semantic code to create
              responsive layouts, stylish UI components, and interactive
              elements.
            </motion.div>
          </div>
          <div className="dropDown3">
            <div
              className="DropDown1Container"
              onClick={() => DropMenu("OpenDropDown3")}
            >
              <span>Prototyping </span>
              <i
                class={
                  OpenDropDown.OpenDropDown3
                    ? "fa-light fa-plus fa-lg"
                    : "fa-light fa-xmark fa-lg"
                }
              ></i>
            </div>
            <motion.div
              className="DropDown1Content"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: OpenDropDown.OpenDropDown3 ? 0 : 1,
                display: OpenDropDown.OpenDropDown3 ? "none" : "block",
              }}
            >
              Prototyping involves building functional prototypes or mockups to
              demonstrate the behavior and flow of the user interface. Frontend
              developers utilize tools like Figma, Adobe XD, or prototyping
              libraries in React or Vue.js to create interactive prototypes that
              simulate user interactions, transitions, and animations. These
              prototypes serve as invaluable tools for gathering feedback,
              iterating on designs, and refining the user experience.
            </motion.div>
          </div>
          <div className="dropDown4">
            <div
              className="DropDown1Container"
              onClick={() => DropMenu("OpenDropDown4")}
            >
              <span>Testing </span>
              <i
                class={
                  OpenDropDown.OpenDropDown4
                    ? "fa-light fa-plus fa-lg"
                    : "fa-light fa-xmark fa-lg"
                }
              ></i>
            </div>
            <motion.div
              className="DropDown1Content"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: OpenDropDown.OpenDropDown4 ? 0 : 1,
                y: OpenDropDown.OpenDropDown4 ? 200 : 0,
                display: OpenDropDown.OpenDropDown4 ? "none" : "block",
              }}
            >
              Testing is a crucial phase where frontend developers rigorously
              test their code to ensure its functionality, accessibility, and
              compatibility across various platforms and devices. This involves
              manual testing, automated testing, and performance testing to
              identify and fix any bugs, errors, or inconsistencies.
            </motion.div>
          </div>
          <div className="dropDown5">
            <div
              className="DropDown1Container"
              onClick={() => DropMenu("OpenDropDown5")}
            >
              <span>Optimization </span>
              <i
                class={
                  OpenDropDown.OpenDropDown5
                    ? "fa-light fa-plus fa-lg"
                    : "fa-light fa-xmark fa-lg"
                }
              ></i>
            </div>
            <motion.div
              className="DropDown1Content"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: OpenDropDown.OpenDropDown5 ? 0 : 1,
                display: OpenDropDown.OpenDropDown5 ? "none" : "block",
              }}
            >
              Optimization focuses on enhancing the performance and efficiency
              of the frontend codebase. Frontend developers optimize their code
              by reducing file sizes, minimizing render times, and implementing
              caching strategies to improve loading speeds and user experience.
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
