import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import './AppBarLogo.css';
import { HomeLink } from '../../_data/NavbarData/NavbarData';
import { LOGO, NAVBAR_MIN_WIDTH } from '../../_data/Constants';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext/EnvironmentContext';

/**
 * AppBarLogo is (currently) the W logo on the top left for the App Bar
 * 
 * Last Modified
 * William Kwok
 * June 16, 2019
 */
export const AppBarLogo: React.FC = () => {
	const { windowWidth } = useContext(EnvironmentContext);
	let minimized = windowWidth < NAVBAR_MIN_WIDTH
	return <Typography className={"appbar-logo"} color="primary">
		<a href={HomeLink}>
			<img src={LOGO.IMAGE_LINK} alt="Team Washington Logo" height={minimized ? LOGO.MIN_HEIGHT : LOGO.HEIGHT} width="auto" />

			{/* <svg className={"appbar-logo-bounding"} height={logoHeight} viewBox="0 0 116.25 80">
                <g>
                    <path className={"appbar-logo-path"} d="M84.384,3.819c0,0.858,0,12.238,0,13.098c0.856,0,9.206,0,9.206,0
                        L83.311,55.168c0,0-12.577-50.636-12.756-51.349c-0.687,0-12.626,0-13.303,0c-0.188,0.696-13.796,51.352-13.796,51.352
                        l-9.466-38.254c0,0,8.726,0,9.585,0c0-0.859,0-12.239,0-13.098c-0.919,0-37.532,0-38.451,0c0,0.858,0,12.238,0,13.098
                        c0.851,0,8.52,0,8.52,0s14.703,58.809,14.88,59.523c0.708,0,19.942,0,20.639,0c0.183-0.697,9.852-37.454,9.852-37.454
                        s9.187,36.747,9.364,37.454c0.707,0,19.941,0,20.639,0c0.186-0.702,15.656-59.523,15.656-59.523s7.6,0,8.449,0
                        c0-0.859,0-12.239,0-13.098C112.217,3.819,85.292,3.819,84.384,3.819z"/>
                </g>
            </svg> */}
		</a>
	</Typography>
}