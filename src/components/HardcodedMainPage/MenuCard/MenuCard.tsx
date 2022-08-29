import React from 'react';
import './MenuCard.css';

export type MenuCardProps = {
	section: string
    image?: string
    x?: number
    y?: number
    // a: () => void
}

export const MenuCard: React.FC<MenuCardProps> = ({
	section,
	image,
    x,
    y
}) => {
	return <div className='menucard'>
        <div className='menucard-background'
                style={{
                    background: 'url(' + image + ') no-repeat',
                    backgroundPositionX: x + '%',
                    backgroundPositionY: y + '%'
                    }}>
                <h3 className='title'>{section}</h3>
        </div>
    </div>
}