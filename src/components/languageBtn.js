import React, { useContext, useState } from "react";
import { langContext } from "../context/langContext";
import { FormattedMessage } from "react-intl";

const LanguageBtn = () => {
	const language = useContext(langContext);
	const [count, setCount] = useState(0);

	const change = () => {
		setCount(count + 1);
		language.changeLanguage(count % 2);
		console.log(count);
	};

	return (
		<button className="btn" onClick={change} data-language="en">
			<FormattedMessage id="btn.text" defaultMessage={"Change Language"} />
		</button>
	);
};

export default LanguageBtn;
