import React from "react";

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
	const requestJson = await fetch(`/languages/${language}.json`);
	const texts = await requestJson.json();

	for (const textToChange of textsToChange) {
		const section = textToChange.dataset.section;
		const value = textToChange.dataset.value;

		textToChange.innerHTML = texts[section][value];

		console.log(textToChange);
        console.log(texts[section][value]);
	}

	console.log("aqui toy");
};

const language = (e) => {
	changeLanguage(e.target.dataset.language);
    console.log(e.target.dataset)
};

const LanguageBtn = () => {
	return (
		<div>
			<button onClick={language} data-language="en">
				en
			</button>
			<button onClick={language} data-language="es">
				es
			</button>
		</div>
	);
};

export default LanguageBtn;
