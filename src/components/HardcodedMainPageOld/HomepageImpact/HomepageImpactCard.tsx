import React from 'react';
import styles from './HomepageImpactCard.module.css';

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
  return <div className={styles.div}>
    <div className={styles.impactCard}>
      <img src={image} className={styles.impactLogo}></img>
      <p className={styles.impactTitle}>{title}</p>
      <p className={styles.impactQuote}>{text}</p>
    </div>
  </div>
}