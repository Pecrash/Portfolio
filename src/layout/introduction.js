import React from "react";
import Model from "../components/3Dassets/3Dmodel";
import Header from "../components/header";

const Introduction = () => {
	return (
		<React.Fragment>
			<Header />
			<div className="introduction">
				<section className="introduction__text">
					<h1 className="introduction__text-title">
						Hello, I’m a junior <br /> frontend developer
					</h1>
					<p className="introduction__text-paragraph">
						"I am a passionate developer for <br/> design and learning, constantly <br/>
						striving to learn various technologies <br/> that significantly contribute
						to each <br/> of my jobs."
					</p>
				</section>
				<Model />
			</div>
		</React.Fragment>
	);
};

export default Introduction;
