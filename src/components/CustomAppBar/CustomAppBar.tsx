import React, { useContext, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './CustomAppBar.css';
import { EnvironmentContext } from '../../contexts/EnvironmentContext/EnvironmentContext';
import { AppBarLogo } from './AppBarLogo/AppBarLogo';
import { AppBarDropdowns } from './AppBarDropdowns/AppBarDropdowns';
import { AppBarSideDrawer } from './AppBarSideDrawer/AppBarSideDrawer';
import { NAVBAR_MIN_WIDTH, NAVBAR_MIN_HEIGHT } from '../_data/Constants';

type CustomAppBarProps = {
	name: string,
	pageTitle: string,
	a: () => void
}

/**
 * CustomAppBar is the application bar that (currently) uses MaterialUI
 *
 * Last Modified
 * Jaden Stetler
 * July 17, 2019
 */
export const CustomAppBar: React.FC<CustomAppBarProps> = ({ name, pageTitle, a }) => {
	const { windowWidth } = useContext(EnvironmentContext);
	let minimized = windowWidth < NAVBAR_MIN_WIDTH;

	const [lastScrollPos, setLastScrollPos] = useState(window.scrollY);
	const [scrollUp, setScrollUp] = useState(true);
	let ticking: boolean = false;


	const handleScroll = (e: any) => {
		if (!ticking) {
			window.requestAnimationFrame(() => {
				setScrollUp(window.scrollY < lastScrollPos);
				setLastScrollPos(window.scrollY);
			})

			ticking = true;
		}
	}
	
	document.addEventListener('scroll', handleScroll);

	return <>
		<div className={"appbar"}
			style={{visibility: (scrollUp) ? 'visible' : 'hidden',
					opacity: (scrollUp) ? 1 : 0}}
			>
			<AppBar className={"mui-appbar"}
				style={{ minHeight: NAVBAR_MIN_HEIGHT}}
				color="secondary">
				<Toolbar style={{ minHeight: NAVBAR_MIN_HEIGHT }}>
					<AppBarLogo />
					{!minimized && <AppBarDropdowns name={name} pageTitle={pageTitle} a={a} />}
					{minimized && <AppBarSideDrawer
						name={name}
						pageTitle={pageTitle}
						a={a}
					/>}
				</Toolbar>
			</AppBar>
		</div>
	</>
}