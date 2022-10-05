import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './Steps.css';

export type StepsProps = {
    stepNum: number;
    stepCaption: string;
}

/**
 * Displays a series of steps with captions
 *
 * Last Modified
 * Oviya Muralidharan
 * August 22, 2022
 */

export const Steps: React.FC<ContentSingularData> = ({
    steps_props
}) => {
    if (!steps_props) {
        return <></>;
    }
    return <>
        <div className="steps">
            {steps_props.map((pair: StepsProps, index: number) => (
                <div className="step" key={index}>
					<button
						className="step-button"
					>{pair.stepNum}</button>
					<div className="step-caption">
						{pair.stepCaption}
					</div>
				</div>  
			))}
        </div>
    </>
};
