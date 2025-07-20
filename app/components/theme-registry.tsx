'use client';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { amber, grey } from '@mui/material/colors';

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: amber,
	},
});

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: amber,
		background: {
			default: grey[900],
			paper: grey[900],
		},
	},
});

export const ThemeModeContext = React.createContext({
	toggleThemeMode: () => {},
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
	const [mode, setMode] = React.useState<'light' | 'dark'>('dark');

	const themeMode = React.useMemo(
		() => ({
			toggleThemeMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[],
	);

	const theme = React.useMemo(
		() => (mode === 'light' ? lightTheme : darkTheme),
		[mode],
	);

	return (
		<ThemeModeContext.Provider value={themeMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ThemeModeContext.Provider>
	);
}
