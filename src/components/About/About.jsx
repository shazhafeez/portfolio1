import React, { useState } from "react";
import videobg from "../Home/200123_01_Particle_Snow_seamless_loop.mp4";
import "./About.css";
import API from "../../components/logo No background/API_Logo-removebg-preview.png";
import Boostrap from "../../components/logo No background/Bootstrap_Logo-removebg-preview.png";
import CLangauge from "../../components/logo No background/C_language_logo-removebg-preview.png";
import Cpp from "../../components/logo No background/C++_logo-removebg-preview.png";
import Canva from "../../components/logo No background/Canva_Logo-removebg-preview.png";
import CSS from "../../components/logo No background/CSS_Logo-removebg-preview.png";
import Figma from "../../components/logo No background/figma_logo-removebg-preview.png";
import Filmora from "../../components/logo No background/filmora_logo-removebg-preview.png";
import Framer from "../../components/logo No background/Framer_Logo-removebg-preview.png";
import Git from "../../components/logo No background/gtihub_Logo-removebg-preview.png";
import JS from "../../components/logo No background/JS_Logo-removebg-preview.png";
import Photoshop from "../../components/logo No background/photoshop_logo-removebg-preview.png";
import python from "../../components/logo No background/python_logo-removebg-preview.png";
import Raylib from "../../components/logo No background/RAylib_logo-removebg-preview.png";
import ReactLogo from "../../components/logo No background/React_Logo-removebg-preview.png";
import ReactRouter from "../../components/logo No background/REact_Router_logo-removebg-preview.png";

const About = () => {
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

  // useEffect(() => {
  //   const Text = document.querySelector(".Movinglogo");
  //   Text.innerHTML = Text.innerText
  //     .split("")
  //     .map(
  //       (character, index) =>
  //         `<span style="transform:rotate(${index * 10}deg)">${character}</span>`
  //     )
  //     .join("");
  // }, []);
  return (
    <>
      <div className="AllContainer">
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
        {/* First  div */}
        <div className="AboutMe">
          <div className="content">
            This is Shahzeb, a frontend Developer <br />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;based in Pakistan, focused on creating
            <br />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;interactive
            Website using React.js.
          </div>
          <div className="frontendJourney">
            <b>A brief intro into my frontend developer journey</b>
            <br />
            <b> HTML ,CSS ,JAVASCRIPT</b> started from there just like any other
            developer . Boosed my skillset by dwelling into{" "}
            <b>React.js framework</b> . <br />
            <b>Framer Motion</b> further boosted my animation skills hence I
            learnt the importance of creating interactive websites that are
            visually appealing to the user.
          </div>
          <div className="allAboutMe">
            <div className="leftSide">
              <div className="myNameDetails">
                This is Shahzeb , <br />
                frontend Developer
              </div>
              {/* <div className="Movinglogo">framer motion framer</div> */}
            </div>

            <div className="description">
              <div className="where">
                <span>Where I am From ?</span>
                <br></br>
                <span>
                  I belong from the Capital City of Pakistan ,<br /> Islamabad
                  but originally belong from Bagh AJK.
                </span>
              </div>
              <div className="Reason">
                <span>Why I Do This Work ?</span>
                <br></br>
                <span>
                  Previously I had little knowledge of web development , mostly
                  from
                  <br /> my friends who were actually full stack developers{" "}
                  <br /> but never took the intiative to learn . However, during
                  the start <br />
                  of my university I started to indulge into frontend
                  <br />
                  development and actually started to enjoy it a lot
                  <br /> hence started to develop my skill in it .
                </span>
              </div>
              <div className="Current">
                <span>Where I am currently?</span>
                <br></br>
                <span>
                  Currently as of now , I can restly declare myself as a
                  professional frontend developer with 2+ years of experience. I
                  possess skills such as HTML,CSS,JAVASCRIPT,REACT.JS,FRAMER
                  MOTION,API INTEGRATION,NPM and other necessary skills as well.
                </span>
              </div>
            </div>
          </div>
          <div className="AllLogo">
            <img src={API} alt="" />
            <img src={CSS} alt="" />
            <img src={JS} alt="" />
            <img src={Boostrap} alt="" />
            <img src={Framer} alt="" />
            <img src={Canva} alt="" />
            <img src={Figma} alt="" />
            <img src={ReactLogo} alt="" />
            <img src={ReactRouter} alt="" />
            <img src={Photoshop} alt="" />
            <img src={Filmora} alt="" />
            <img src={python} alt="" />
            <img src={Raylib} alt="" />
            <img src={CLangauge} alt="" />
            <img src={Cpp} alt="" />
            <img src={Git} alt="" />
          </div>
          <div className="Approach">MY STRATEGY</div>
          <div className="backgroundImage">
            <div>
              &nbsp;&nbsp;&nbsp;80% web technologies knowledge
              <br /> 10% Network support- 10% online Resources
            </div>
            <div>
              Carrying out the adequate research into various new technologies ,
              and devising a plan to carry out those tasks is the foremost
              tactic . Then comes the actual development phase , where support
              and previous knowledge of technologies pertainig to web are
              occupied . Various frameworks are considered for the optimal
              results and client satisfaction . Following ,the devlopment comes
              constant interaction with the client and adjusting to the client's
              needs and suggestions. Updating of any relavant changes in order
              to gain maximum yield and profit for both the company and the
              clients.
            </div>
          </div>
          <div className="CLientGive">What you should Expect from my Work?</div>
          <div className="card1">
            <span className="foreheading">
              " As a frontend maestro wielding the power of React, I embark on a
              journey with my clients, delving deep into the soul of their
              projects. "
            </span>
            <p>
              Through spirited dialogue and an insatiable appetite for
              understanding, I unlock the hidden desires and dreams behind their
              visions. Armed with this knowledge, I orchestrate a symphony of
              pixels and code, crafting digital masterpieces that transcend mere
              interfaces to become immersive experiences that captivate and
              inspire.
            </p>
          </div>
          <div className="card2">
            <span className="foreheading2">
              "In the realm of development, I don my wizard's hat and conjure
              spells of elegance and efficiency. "
            </span>
            <p>
              With React as my wand, I weave intricate webs of components, each
              imbued with its own magic, yet seamlessly interwoven into a
              tapestry of fluid functionality. But my craft is not merely about
              aesthetics; it's about substance. I wield the sword of
              responsiveness, ensuring that our creation bends and flexes to the
              whims of any device, from the mightiest desktop to the humblest
              smartphone.
            </p>
          </div>
          <div className="card3">
            <span className="foreheadin3">
              "But my journey doesn't end with the flick of a wand or the strike
              of a sword. No, my commitment extends far beyond the initial
              launch, into the uncharted territories of support and innovation."
            </span>
            <p>
              Like a guardian angel, I stand vigilant, ready to swoop in at a
              moment's notice to vanquish bugs and breathe life into new
              features. And as the winds of change sweep across the digital
              landscape, I stand ever vigilant, embracing the latest trends and
              technologies to ensure that our creation remains not just
              relevant, but a beacon of inspiration in a sea of mediocrity.
            </p>
          </div>
          <div className="whatWork">
            What sorts of Works we can Do Together?
            <div className="TypesOfWorks">
            <div>Pixel Picasso</div>
            <div>User Whisperer</div>
            <div>Code Conjurer</div>
            <div>Interface Alchemist</div>
            <div>Client-Centric Maestro</div>
            <div>Frontend Virtuoso</div>
            <div>Experience Architect</div>
            <div>Design Dynamo</div>
            <div>React Renegade</div>
          </div>
          </div>
          
        </div>
        
      </div>
      
    </>
  );
};

export default About;
