import React from 'react';
//@ts-ignore
// import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { ArrowDown, ArrowBarDown } from 'react-bootstrap-icons'
import styles from './HardCodedMainPage.module.css';
import { Parallax } from 'react-parallax';
import { HomepageImpact } from './HomepageImpact/HomepageImpact';
import { homepageHowItWorksData, HowItWorksItem } from './HomepageData';
import { HomepageCard } from './HomepageCard/HomepageCard';

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
		<article className={styles.homepage}>
			<div className={styles.heroScreen} />
			<div className={styles.heroImage} />
			<section className={styles.heroContainer}>
				<Container className={styles.hero}>
					<Row>
						<Col md={5}>
							<h1>ARSENIC PURIFICATION</h1>
							<p>Utilizes engineered rhizobacteria in plant roots to selectively accumulate heavy metals</p>
						</Col>
						<Col md={7}>
							{/** SIDE IMAGE GOES HERE */}
							<iframe className={styles.plantCube} src="https://2021.igem.org/Team:Washington/PlantCube" frameBorder="0"></iframe>
						</Col>
					</Row>
				</Container>
				<div className={styles.scrollDown}>
					<p>scroll down for more info</p>
					<ArrowDown size={24} />
				</div>
			</section>
			<section className={styles.problemContext}>
				<Container>
					<h1>Problem Context</h1>
					<Parallax
						strength={100}
						bgImage="https://2021.igem.org/wiki/images/8/85/T--Washington--HomepageParallaxFactory.svg"
						bgImageStyle={{ width: '100%', height: '110%' }}
					>
						<div className={styles.problemContextFactory}>

						</div>
						<img src="https://2021.igem.org/wiki/images/5/59/T--Washington--HomepageParallaxHeavyMetal.svg" alt="soil with heavy metals" />
					</Parallax>
					<p>
						To keep up with consumer and industrial demand, metal smelteries around the world release slag and emission byproducts that are harmful to people and the environment.
					</p>
					<Container className={styles.problemContextStatistics}>
						<Row className={"gx-5"}>
							<Col md={4}>
								<p>
									In the past year alone, over 30,000 metric tons of arsenic and 11 million metric tons of lead were produced worldwide.
								</p>
							</Col>
							<Col md={4}>
								<img className={styles.problemContextBeaker} src="https://2021.igem.org/wiki/images/e/ee/T--Washington--homepageBeaker.png" alt="Beaker with metals" />
							</Col>
							<Col md={4}>
								<p>
									The prevalence for Ulcerative Colitis, an inflammatory bowel disease, is 10-15x higher than expected.
								</p>
							</Col>
						</Row>
					</Container>
					<p>
						Heavy metal contamination by arsenic is a serious health and environmental concern worldwide.Heavy metal contamination by arsenic is a serious health and environmental concern worldwide.Heavy metal contamination by arsenic is a serious health and environmental concern.
					</p>
				</Container>
			</section>
			<section className={styles.ourSolution}>
				<Container>
					<h1>Our Solution</h1>
					<Container className={styles.ourSolutionGrid}>
						<Row className={"gx-5"}>
							<Col md={6}><img src="https://2021.igem.org/wiki/images/6/69/T--Washington--rhizomet.svg" alt="Rhizomet text in orange blob"/></Col>
							<Col md={6}><img src="https://2021.igem.org/wiki/images/thumb/4/44/T--Washington--homepageBacteria.svg/300px-T--Washington--homepageBacteria.svg.png" alt="bacteria" /></Col>
						</Row>
					</Container>
					<p>
						We modified the human metallothionein IA protein to have all its 7 binding sites be specific to arsenic. The modified protein can be expressed within bacteria to remediate arsenic from the environment.
					</p>
				</Container>
			</section>
			<section className={styles.howItWorks}>
				<Container>
					<h1>How it Works</h1>
					<Carousel>
						{homepageHowItWorksData.map((slideData: HowItWorksItem) => (
							<Carousel.Item
								key={slideData.title}
								interval={slideData.ms || 5000}
								className={styles.howItWorksItem}
								>
								<Container fluid={"md"}>
									<Row md={2} sm={1}>
										<Col md={8}>
											<img src={slideData.image} alt={slideData.title} />
										</Col>
										<Col md={4}>
											<h3>{slideData.title}</h3>
											<p className={styles.howItWorksCaption}>{slideData.caption}</p>
										</Col>
									</Row>
								</Container>
							</Carousel.Item>
						))}
					</Carousel>
				</Container>
			</section>
			<section className={styles.modeling}>
				<Container>
					<h1>Modeling</h1>
					<div className={styles.modelingProteinContainer}>
						<img src="https://2021.igem.org/wiki/images/6/64/T--Washington--MT_protein_blue.png" alt="protein model" />
					</div>
					<p>
						We modified Metallothionein to bind more specifically to As by using a program called Rosetta to change the Cd and Zn binding sites to As binding sites. The result is a custom design for a Metallothionein protein that sequesters 7 As III ions. We also developed mathematical models of the kinetics of As within an Ecoli cell in order to test the feasibility and efficacy of our proposed system of remediating As.
					</p>
				</Container>
			</section>
		</article>
	</>
}