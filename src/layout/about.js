import React from "react";
import { FormattedMessage } from "react-intl";

const About = () => {
	return (
		<div className="about" id="about">
			<h1 className="about__title">
				<FormattedMessage id="about.title" defaultMessage={"About me"} />
			</h1>
			<p className="about__paragraph">
				<FormattedMessage
					id="about.paragraph"
					defaultMessage={
						"I am someone passionate about learning, I love art, and I believe that code can take each of my passions even further. I am a junior frontend developer looking for opportunities and I hope that this portfolio can speak a bit more about me, my work, and what I can do to help you."
					}
				/>
			</p>
		</div>
	);
};

export default About;
