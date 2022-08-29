import React from 'react';
//@ts-ignore
// import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { ArrowDown, ArrowBarDown, ArrowRightCircle } from 'react-bootstrap-icons'
import styles from './HardCodedMainPage.module.css';
import { Parallax } from 'react-parallax';
import { HomepageImpact } from './HomepageImpact/HomepageImpact';
import { homepageHowItWorksData, HowItWorksItem, menuItems, MenuItems} from './HomepageData';
import { HomepageCard } from './HomepageCard/HomepageCard';
import { MenuCard } from './MenuCard/MenuCard'

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
							{/* <iframe className={styles.plantCube} src="https://2021.igem.org/Team:Washington/PlantCube" frameBorder="0"></iframe> */}
						</Col>
					</Row>
				</Container>
				<div className={styles.scrollDown}>
					<p>scroll down for more information</p>
					<ArrowDown size={24} />
				</div>
			</section>
			<section className={styles.problemContext}>
				<div id={styles.problemScreen} />
				<div id={styles.problemContent}>
					<Container id={styles.factsContainer}>
						<div id={styles.problemHead}>
							<h1>MELANOMA</h1>
							<h2>what is it?</h2>
						</div>
						<div id={styles.melanomaImgs}>
							<img src={'https://static.vecteezy.com/system/resources/previews/005/020/205/original/melanoma-is-a-dangerous-birthmark-diagnostics-observation-and-inspection-image-for-skin-cancer-prevention-campaign-malignant-or-benign-tumor-illustration-flat-vector.jpg'}
								style={{
									gridRow: "2 / end",
									gridColumn: 1
								}}/>
							<img src={'https://i.pinimg.com/originals/9d/ab/89/9dab89bfe2d732e10a0ab8f488af7d86.gif'}
								style={{
									gridRow: "1 / 3",
									gridColumn: 2
								}}/>
						</div>
						<div id={styles.facts}>
							<div className={styles.factBox}
								style={{
									gridColumn: 1,
									gridRow: 1
								}}>
								<p style={{alignSelf: 'start'}}>a form of</p>
								<h2 style={{alignSelf: 'end'}}>Skin Cancer</h2>
							</div>
							<div className={styles.factBox}
								style={{
									gridColumn: 2,
									gridRow: 2
								}}>
								<p style={{alignSelf: 'start'}}>cause of</p>
								<h2>7650 deaths</h2>
								<p style={{alignSelf: 'end'}}>annually</p>
							</div>
							<div className={styles.factBox}
								style={{
									gridColumn: 3,
									gridRow: 3
								}}>
								<p style={{alignSelf: 'start'}}>caused by</p>
								<h2>UV Radiation</h2>
								<p style={{alignSelf: 'end'}}>exposure</p>
							</div>
						</div>
					</Container>
					<a href='#' target={"_blank"}>
						<div id={styles.moreFacts}>
							<p>More Information</p>
							<ArrowRightCircle size={24}/>
						</div>
					</a>
				</div>
			</section>
			<section className={styles.ourSolution}>
				<div id={styles.solutionScreen} />
				<div id={styles.solutionWhole}>
					<div id={styles.containerTop}>
						<div className={styles.topBar} style={{gridColumn: 1}} />
						<h1 style={{gridColumn: 2}}>Our Solution</h1>
						<div className={styles.topBar} style={{gridColumn: 3}} />
					</div>
					<div id={styles.solutionContainer}>
						<p>
							&emsp; &ensp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus faucibus ornare suspendisse sed nisi. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Viverra maecenas accumsan lacus vel facilisis. Rhoncus aenean vel elit scelerisque mauris pellentesque. Eget dolor morbi non arcu risus quis. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Cras sed felis eget velit. Risus pretium quam vulputate dignissim. Sem nulla pharetra diam sit amet nisl suscipit. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Faucibus interdum posuere lorem ipsum. Turpis egestas sed tempus urna et pharetra pharetra massa. Ut tortor pretium viverra suspendisse potenti nullam. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Facilisi etiam dignissim diam quis enim lobortis. In eu mi bibendum neque egestas congue.
						</p>
						<p>
							&emsp; &ensp; Arcu bibendum at varius vel pharetra. Sapien eget mi proin sed. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Pretium fusce id velit ut tortor pretium viverra. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Nunc lobortis mattis aliquam faucibus purus in. Congue mauris rhoncus aenean vel elit scelerisque mauris. Dui sapien eget mi proin sed. Nunc id cursus metus aliquam eleifend mi. Quisque id diam vel quam elementum pulvinar.
						</p>
						<p>
							&emsp; &ensp; Elit pellentesque habitant morbi tristique senectus et netus. In mollis nunc sed id semper risus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Odio facilisis mauris sit amet massa vitae tortor condimentum. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.
						</p>
					</div>
				</div>
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
			{/* <section className={styles.modeling}>
				<Container>
					<h1>Modeling</h1>
					<div className={styles.modelingProteinContainer}>
						<img src="https://2021.igem.org/wiki/images/6/64/T--Washington--MT_protein_blue.png" alt="protein model" />
					</div>
					<p>
						We modified Metallothionein to bind more specifically to As by using a program called Rosetta to change the Cd and Zn binding sites to As binding sites. The result is a custom design for a Metallothionein protein that sequesters 7 As III ions. We also developed mathematical models of the kinetics of As within an Ecoli cell in order to test the feasibility and efficacy of our proposed system of remediating As.
					</p>
				</Container>
			</section> */}
			<section className={styles.menu}>
					{
						[0,1,2].map(i => {
							return (
								<Row key={'row-' + i} className={styles.row}>
									{
										[0,1].map(j => {
											return (
												<MenuCard key={'card-' + (i*2 + j)}
														section={menuItems[i*2 + j].section}
														image={menuItems[i*2 + j].image}
														y={menuItems[i*2 + j].y}/>
											)
										})
									}
								</Row>
							)
						})
					}
			</section>
		</article>
	</>
}