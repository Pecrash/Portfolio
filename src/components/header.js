import React from "react";

const Header = () => {
	return(
        <div className="header">
            <a href="#about" data-section="header" data-value="about" >About me</a>
            <a href="#skills" data-section="header" data-value="skills" >My Skills</a>
            <a href="#projects" data-section="header" data-value="projects" >Projects</a>
            <a href="#contact" data-section="header" data-value="services" >Contact me</a>
            <a href="#services" data-section="header" data-value="contact" >Services</a>
        </div>
    ) 
};

export default Header;
