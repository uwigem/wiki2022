import React from 'react';
//@ts-ignore
// import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import styles from './HardCodedMainPage.module.css';
import { Parallax } from 'react-parallax';
import { HomepageImpact } from './HomepageImpact/HomepageImpact';
import { homepageHowItWorksData, HowItWorksItem } from './HomepageData';

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
							<Col md={6}><img src="https://2021.igem.org/wiki/images/6/69/T--Washington--rhizomet.svg" alt="Rhizomet text in orange blob"/></Col>
							<Col md={6}><img src="https://2021.igem.org/wiki/images/4/44/T--Washington--homepageBacteria.svg" alt="bacteria" /></Col>
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
											<p>{slideData.caption}</p>
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
						<img src="https://2021.igem.org/wiki/images/3/3f/T--Washington--homepageProteinModel.svg" alt="protein model" />
					</div>
					<p>Explanation text goes here.Explanation text goes here.Explanation text goes here.Explanation text goes here.Explanation text goes here.</p>
				</Container>
			</section>
			<section>
				<Container>
					<h1>Impact</h1>
					<HomepageImpact
						card1Img="https://placekitten.com/200/200"
						card1Text="A short quote/explanation"
						card1Title="Scalablity"
						card2Img="https://placekitten.com/200/200"
						card2Text="A short quote/explanation"
						card2Title="Sustainability"
						card3Img="https://placekitten.com/200/200"
						card3Text="A short quote/explanation"
						card3Title="Feasibility"
					></HomepageImpact>
				</Container>
			</section>
		</article>
	</>
}