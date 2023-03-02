import React, { useState } from "react";
import English from "../languages/en.json";
import Español from "../languages/es.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
	const [messages, setMessages] = useState(English);

	const changeLanguage = (count) => {
		switch (count) {
			case 0:
				setMessages(Español);
				break;
			case 1:
				setMessages(English);
				break;
			default:
				setMessages(English);
		}
	};

	return (
		<langContext.Provider value={{ changeLanguage: changeLanguage }}>
			<IntlProvider locale="es-MX" messages={messages}>{children}</IntlProvider>
		</langContext.Provider>
	);
};

export { LangProvider, langContext };
