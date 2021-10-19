import React from 'react';
import './HomepageImpact.css';
import { HomepageImpactCard } from './HomepageImpactCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export type HomepageImpactProps = {
  card1Img: string,
	card1Text: string,
  card1Title: string,
  card2Img: string,
	card2Text: string,
  card2Title: string,
  card3Img: string,
	card3Text: string,
  card3Title: string,
}

export const HomepageImpact: React.FC<HomepageImpactProps> = ({
  card1Img,
	card1Text,
  card1Title,
  card2Img,
	card2Text,
  card2Title,
  card3Img,
	card3Text,
  card3Title,
}) => {
  return <div className="homepage-impact">
    <Row className="justify-content-md-center">
      <Col md={4}>
        <HomepageImpactCard image={card1Img} text={card1Text} title={card1Title}></HomepageImpactCard>
      </Col>
      <Col md={4}>
        <HomepageImpactCard image={card2Img} text={card2Text} title={card2Title}></HomepageImpactCard>
      </Col>
      <Col md={4}>
      <HomepageImpactCard image={card3Img} text={card3Text} title={card3Title}></HomepageImpactCard>
      </Col>
    </Row>
  </div>
}