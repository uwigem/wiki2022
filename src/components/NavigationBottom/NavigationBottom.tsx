import React from 'react';
import NavbarData, { NavbarType } from '../_data/NavbarData/NavbarData';
import './NavigationBottom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from '../_data/Constants';

type NavBottomProps = {
	name: string,
	pageTitle: string,
	a: () => void
}

/**
 * NavigationBottom navigate to the previous and next pages based on the 
 * 
 * Last Modified
 * Jennifer Tao
 * October 4, 2019
 */
export const NavigationBottom: React.FC<NavBottomProps> = ({
	name, pageTitle, a
}) => {
	if (pageTitle === "") { //Home page
		return <></>;
	}

	let pageIndex = -1;
	let navItemData: NavbarType = NavbarData.getData()[0];
	NavbarData.getData().forEach((navItem: NavbarType) => {
		let i = navItem.links.indexOf(pageTitle)
		if (i > -1) {
			pageIndex = i;
			navItemData = navItem;
		}
	})

	if (pageIndex < 0) {
		return <></>;
	}

	return <div className="nav-bottom">
		<div className="nav-bottom-link">
			{(pageIndex > 0) &&
				<a
					href={name + navItemData.links[pageIndex - 1]}
					onClick={a}>
					<FontAwesomeIcon
						icon={faArrowCircleLeft}
						color={COLORS.PURPLE.PRIMARY}
						size="lg"></FontAwesomeIcon>
					{navItemData.names[pageIndex - 1]}
				</a>
			}
		</div>
		<div className="nav-bottom-link nav-bottom-right">
			{(pageIndex < (navItemData.links.length - 1)) &&
				<a
					href={name + navItemData.links[pageIndex + 1]}
					onClick={a}>
					{navItemData.names[pageIndex + 1]}
					<FontAwesomeIcon
						icon={faArrowCircleRight}
						color={COLORS.PURPLE.PRIMARY}
						size="lg"></FontAwesomeIcon>
				</a>
			}
		</div>
	</div>
}