import React, { useState } from "react";
import "./Contact.css";
import videobg from "D:/react/portfolio/src/components/Home/200123_01_Particle_Snow_seamless_loop.mp4";

const Contact = () => {
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

  return (
    <div className="ContactContainer">
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
      <div className="available">[NEXT AVAILABLE IN AUGUST 2024]</div>
      <div className="WorkTogether">Looking Forward To Collaborate</div>
      <div className="Email">
        Feel Free To Email Me
        <br />
        <div className="msg">&nbsp; &nbsp; Or send Me a message</div>
      </div>
      <div className="AllInput">
        <input type="text" className="Name" placeholder="Name" />
        <input type="text" className="EmailInput" placeholder="Email" />
        <input
          type="text"
          className="descriptionInput"
          placeholder="Describe your experience, thoughts, or feedback in this box. Your input helps us improve and tailor our services to better meet your needs. Feel free to share any insights, suggestions, or comments you may have. We value your input and strive to provide the best possible experience for you."
        />
        <button className="ContactMe">Contact Me</button>
      </div>
    </div>
  );
};

export default Contact;
