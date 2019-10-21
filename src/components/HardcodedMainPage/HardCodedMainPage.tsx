import React from 'react';
//@ts-ignore
import Fade from 'react-reveal/Fade';
import './HardCodedMainPage.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { HomepageCard } from './HomepageCard/HomepageCard';

type HardCodedMainPageProps = {
	a: () => void
}

type HeaderCard = {
	header: string,
	image: string,
	blurb: string,
	link: string,
	x?: number,
	y?: number
}

const headerCards: HeaderCard[] = [
	{
		header: "Lorem Ipsum",
		image: "https://2019.igem.org/wiki/images/a/a9/T--Washington--Octet_Sensor_Setup.png",
		blurb: "Lorem ipsum",
		link: ""
	}
]

export const HardCodedMainPage: React.FC<HardCodedMainPageProps> = ({
	a
}) => {
	return <>
		<Fade>
			<div className="hcmp-bgdiv">
				<div className="hcmp-innerbgdiv"></div>
			</div>
			<div className="hcmp-titlewrapper">
				<Grid>
					<Row>
						<Col md={6}>
							<p>Detecting small molecules using a chemically-induced dimerization system.</p>
							<div className="wi-title">Welcome to</div>
							<div className="wi-title hcmp-titlename">Immunosense</div>
							<div className="wi-caption-2 hcmp-desclink">
								<a onClick={a} href={`https://2019.igem.org/Team:Washington/Description`}>Project Description &gt;</a>
							</div>
						</Col>
						<Col md={6}>
							{/** SIDE IMAGE GOES HERE */}
						</Col>
					</Row>
				</Grid>
			</div>
			<div className="hcmp-abstractwrapper">
				<Grid>
					<Row>
						<Col>
							<h1>Abstract</h1>
							<div className="hcmp-sep"></div>
							<p>
								Although biosensors are commonly used to detect many different molecules of interest, they cannot effectively detect small hydrophobic molecules in biological systems. We propose combining chemically induced dimerization (CID), in which two proteins dimerize only in the presence of a ligand, with a traditional luciferase assay to create a biosensor that luminesces when the desired molecule is introduced. Using molecule-specific nanobodies, we can design the two CID binders to attach to a wide variety of small molecules, even those that are challenging for conventional biosensors to detect. Through its specificity and ability to bind to small or hydrophobic molecules, the CID system overcomes problems that other biosensors face. As a proof-of-concept, we implemented an in vivo CID biosensor to detect the presence of cannabidiol. With the nanobody CID system, we hope to introduce a novel biosensor that can detect a variety of important small molecules across research, biotechnology, and medicine.
							</p>
						</Col>
					</Row>
				</Grid>
			</div>
			<div className="hcmp-learn-more-wrapper">
				<Grid>
					<Row>
						{headerCards.map(headerCard => {
							return <Col md={6}>
								<Fade>
									<HomepageCard
										{...headerCard}
										a={a}
									/>
								</Fade>
							</Col>
						})}
					</Row>
				</Grid>
			</div>
		</Fade>
	</>
}