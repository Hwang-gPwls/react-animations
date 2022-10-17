import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/global-style";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			hello
		</ThemeProvider>
	);
}

export default App;
