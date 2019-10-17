import React, { useState } from 'react';
import { Sidebar } from './LegacySidebar/Sidebar';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

type AppBarSideDrawerProps = {
	name: string,
	pageTitle: string,
	a: () => void
}

// TODO: 
export const AppBarSideDrawer: React.FC<AppBarSideDrawerProps> = ({
	name,
	pageTitle,
	a
}) => {
	const [drawerState, setDrawerState] = useState(false);
	return <>
		<IconButton
			color="inherit"
			aria-label="open drawer"
			onClick={() => setDrawerState(!drawerState)}
		><MenuIcon /></IconButton>
		<Sidebar
			toggleDrawer={() => setDrawerState(!drawerState)}
			drawerOpen={drawerState}
			side="right"
			name={name}
			pageTitle={pageTitle}
			a={a}
		/>
	</>
}