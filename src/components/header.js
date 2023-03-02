import React from "react";
import { FormattedMessage } from "react-intl";

const Header = () => {
	return (
		<div className="header">
			<a href="#about">
				<FormattedMessage id="header.about" defaultMessage={"About me"} />
			</a>
			<a href="#skills">
				<FormattedMessage id="header.skills" defaultMessage={"My Skills"} />
			</a>
			<a href="#projects">
				<FormattedMessage id="header.projects" defaultMessage={"Projects"} />
			</a>
			<a href="#contact">
				<FormattedMessage id="header.contact" defaultMessage={"Contact me"} />
			</a>
			<a href="#services">
				<FormattedMessage id="header.services" defaultMessage={"Services"} />
			</a>
		</div>
	);
};

export default Header;
