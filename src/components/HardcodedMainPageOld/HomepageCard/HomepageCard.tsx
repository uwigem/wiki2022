import React from 'react';
import './HomepageCard.css';

export type HomepageCardProps = {
	header: string,
	image: string,
	blurb: string,
	link: string,
	x?: number,
	y?: number,
	a: () => void
}

export const HomepageCard: React.FC<HomepageCardProps> = ({
	header,
	image,
	blurb,
	link,
	x = 50,
	y = 50,
	a
}) => {
	return <div className="homepage-card-wrapper">
		<div className="homepage-card-header"><h3>{header}</h3></div>
		<div className="homepage-card-info">
			<div className="homepage-card-image" style={{
				background: `url(${image}) ${x}% ${y}% no-repeat`
			}}>
			</div>
			<div className="homepage-card-blurb">
				<p>
					{blurb}
				</p>
				<div className="wi-caption-2 hcmp-desclink">
					<a onClick={a} href={link}>Learn more &gt;</a>
				</div>
			</div>
		</div>
	</div>
}