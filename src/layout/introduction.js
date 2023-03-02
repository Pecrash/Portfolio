import React from "react";
import { FormattedMessage } from "react-intl";
import Model from "../components/3Dassets/3Dmodel";
import Header from "../components/header";
import LanguageBtn from "../components/languageBtn";


const Introduction = () => {

	return (
		<React.Fragment>
			<Header />
			<div className="introduction">
				<section className="introduction__text">
					<h1 className="introduction__text-title" >
						<FormattedMessage 
							id="introduction.title"
							defaultMessage={"Hello, I’m a junior\n\nfrontend developer"}
						/>
					</h1>
					<p className="introduction__text-paragraph" >
					<FormattedMessage 
							id="introduction.paragraph"
							defaultMessage={"I am a passionate developer for <br/> design and learning, constantly striving to learn various technologies that significantly contributeto each of my jobs."}
						/>
					</p>
					<LanguageBtn />
				</section>
				<Model />
			</div>
		</React.Fragment>
	);
};

export default Introduction;
