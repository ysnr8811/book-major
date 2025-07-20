'use client';
import * as React from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeModeContext } from './theme-registry';
import { useTheme } from '@mui/material/styles';

export default function DarkModeSwitch() {
	const theme = useTheme();
	const { toggleThemeMode } = React.useContext(ThemeModeContext);

	return (
		<IconButton sx={{ ml: 1 }} onClick={toggleThemeMode} color="inherit">
			{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
		</IconButton>
	);
}
