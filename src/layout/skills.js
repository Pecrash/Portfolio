import React from "react";
import { FormattedMessage } from "react-intl";

const Skills = () => {
	return (
		<div className="skills" id="skills">
			<h1 className="skills__title" data-section="skills" data-value="title">
				<FormattedMessage
					id="skills.title"
					defaultMessage={"My Skills"}
				/>
			</h1>
			<section className="skills__container">
				<img src="/assets/skills_Icons/HTML5.svg" alt="" />
				<img src="/assets/skills_Icons/css.svg" alt="" />
				<img src="/assets/skills_Icons/javascript.svg" alt="" />
				<img src="/assets/skills_Icons/react.svg" alt="" />
				<img src="/assets/skills_Icons/sass.svg" alt="" />
				<img src="/assets/skills_Icons/github.svg" alt="" />
				<img src="/assets/skills_Icons/blender.svg" alt="" />
				<img src="/assets/skills_Icons/Figma.svg" alt="" />
				<img src="/assets/skills_Icons/illustrator.svg" alt="" />
			</section>
		</div>
	);
};

export default Skills;
