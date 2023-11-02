import React, {useState, useEffect} from 'react';
import ThemeContext from './theme.js';

const internal_theme_list = {
	light: {
		background: "#EEEEEE",
		border: "#888888",
		accent: "#0c9302",
		element_background: "#CCCCCC",
		text: "#111111",
		pdf_filter: "none"
	},
	dark: {
		background: "#333333",
		border: "#888888",
		accent: "#0c9302",
		element_background: "#666666",
		text: "#CCCCCC",
		pdf_filter: "invert(75%)"
	}
};

const ThemeProvider = ({children}) => {
	const [theme_name, set_theme] = useState('light');
	const [theme, set_theme_data] = useState(internal_theme_list.light);

	const getThemeFromCookie = () => {
		const cookies = document.cookie.split(';');
		for (const cookie of cookies) {
			const [name, value] = cookie.trim().split('=');
			if (name === 'theme') {
				return value;
			}
		}
		return null;
	};

	useEffect(() => {
		const savedTheme = getThemeFromCookie();
		if (savedTheme && internal_theme_list[savedTheme]) {
			set_theme_data(internal_theme_list[savedTheme]);
			set_theme(savedTheme);
		} 
		else {
			set_theme_data(internal_theme_list.light);
			set_theme('light');
		}
	}, []);

	useEffect(() => {
		set_theme_data(internal_theme_list[theme_name]);
		const expirationDate = new Date();
		expirationDate.setDate(expirationDate.getDate()+365);
		const cookieOptions = {
			expires: expirationDate.toUTCString(),
			path:'/'
		};
		document.cookie = `theme=${theme_name}; expires=${cookieOptions.expires}; path=${cookieOptions.path}`;
	}, [theme_name]);
	return (
		<ThemeContext.Provider value={{theme,set_theme,theme_name}}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
