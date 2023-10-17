import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("#home");
  return (
    <nav>
      <a href="#home" onClick={() => setActiveSection('#home')} className={activeSection === "#home" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveSection('#about')} className={activeSection === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveSection('#experience')} className={activeSection === "#experience" ? "active" : ""}>
        <BiBook />
      </a>
      <a href="#services" onClick={() => setActiveSection('#services')} className={activeSection === "#services" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActiveSection('#contact')} className={activeSection === "#contact" ? "active" : ""}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
