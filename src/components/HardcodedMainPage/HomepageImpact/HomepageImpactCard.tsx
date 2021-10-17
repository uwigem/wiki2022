import React from 'react';
import './HomepageImpactCard.css';

export type HomepageImpactCardProps = {
	image: string,
	text: string,
  title: string
}

export const HomepageImpactCard: React.FC<HomepageImpactCardProps> = ({
	image,
  text,
  title
}) => {
  return <div className="impact-card-container">
    <div className="impact-card">
      <img src={image} className="impact-logo"></img>
      <p className="impact-title">{title}</p>
      <p className="impact-quote">{text}</p>
    </div>
  </div>
}