import React from 'react';
//@ts-ignore
// import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './HardCodedMainPage.module.css';
import { Parallax } from 'react-parallax';

type HardCodedMainPageProps = {
	a: () => void
}

// type HeaderCard = {
// 	header: string,
// 	image: string,
// 	blurb: string,
// 	link: string,
// 	x?: number,
// 	y?: number
// }

// const headerCards: HeaderCard[] = [
// 	{
// 		header: "Lorem Ipsum",
// 		image: "https://2019.igem.org/wiki/images/a/a9/T--Washington--Octet_Sensor_Setup.png",
// 		blurb: "Lorem ipsum",
// 		link: ""
// 	}
// ]

export const HardCodedMainPage: React.FC<HardCodedMainPageProps> = ({
	a
}) => {
	return <>
		{/* <Fade> */}
			{/* <div className="hcmp-bgdiv">
				<div className="hcmp-innerbgdiv"></div>
			</div> */}
			<section className={styles.heroContainer}>
				<Container className={styles.hero}>
					<Row>
						<Col md={5}>
							<h1>Arcenic Purification</h1>
							<p>Utilizes engineered rhizobacteria in plant roots to selectively accumulate heavy metals</p>
						</Col>
						<Col md={7}>
							{/** SIDE IMAGE GOES HERE */}
							<iframe className={styles.plantCube} src="https://2021.igem.org/Team:Washington/PlantCube" frameBorder="0"></iframe>
						</Col>
					</Row>
				</Container>
				<div className={styles.scrollDown}>
					<p>Scroll down for more info</p>
					<p>VVV</p>
				</div>
			</section>
			<section className={styles.problemContext}>
				<Container>
					<h1>Problem Context</h1>
					<Parallax strength={500} bgImage="https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg">
						<div className={styles.problemContextFactory}>
							<h2>SOME BIG TEXT HERE</h2>
						</div>
					</Parallax>
					<p>
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
					</p>
					<Container className={styles.problemContextStatistics}>
						<Row className={"gx-5"}>
							<Col md={3}>
								<div>
									Statistics 1
								</div>
							</Col>
							<Col md={6}>
								<div>
									Heavy Metal Accumulation Cubes in the Ground
								</div>
							</Col>
							<Col md={3}>
								<div>
									Statistics 2
								</div>
							</Col>
						</Row>
					</Container>
					<p>
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
					</p>
				</Container>
			</section>
			<section className={styles.ourSolution}>
				<Container>
					<h1>Our Solution</h1>
					<Container className={styles.ourSolutionGrid}>
						<Row className={"gx-5"}>
							<Col md={6}><p>IMAGE 1</p></Col>
							<Col md={6}><p>IMAGE 2</p></Col>
						</Row>
					</Container>
					<p>
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
						LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE. LOTS OF TEXT HERE.
					</p>
				</Container>
			</section>
		{/* </Fade> */}
	</>
}