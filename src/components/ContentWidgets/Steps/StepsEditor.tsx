import React, { useState } from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import './Steps.css';
import { Button, TextField } from '@material-ui/core';
import { StepsProps } from './Steps';

/**
 * Diplays an editor to create/edit a step widget
 *
 * Last Modified
 * Oviya Muralidharan
 * August, 2022
 */
export const StepsEditor: React.FC<WidgetEditorProps> = ({
    editedContent,
    setEditedContentOnChange
}) => {
    const [stepCaptionText, changeStepCaptionText] = useState("");
    const [stepNumText, changeStepNumText] = useState(0);
    const [emptyCaptionSubmitted, switchEmptyCaptionSubmitted] = useState(false);
    let pictureCaptionPairs: StepsProps[] = editedContent.steps_props || [];

    const addStep = (stepCaptionText: string, stepNumText: number) => {
        if (stepCaptionText !== "" || stepNumText !== 0) {
            pictureCaptionPairs.push({
                stepCaption: stepCaptionText,
                stepNum: stepNumText,
            });
            setEditedContentOnChange("steps_props", pictureCaptionPairs);
            changeStepCaptionText("");
            changeStepNumText(0);
        }
    }

    const renderEmptyCaption = () => {
        return <>
            <h4 className="error-message">
                Caption must not be empty
            </h4>
            {/** caption text field following invalid input */}
			<TextField
                error
                fullWidth
                label="Caption"
                className="text-field"
                value={stepCaptionText}
                onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                        changeStepCaptionText(e.target.value);
                    }}
                variant="outlined"
                margin="dense"
                multiline
            />
        </>
    }


    if (!pictureCaptionPairs) {
        return <></>;
    }
    return <>
        <h3> Add New Step </h3>
        <TextField
            fullWidth
            label="Step Number"
            className="text-field"
            value={stepNumText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                changeStepNumText(Number(e.target.value));
            }}
            variant="outlined"
            margin="dense"
            multiline
        />
        {<>
                {/** default caption text field */}
				<TextField
                    fullWidth
                    label="Caption"
                    className="text-field"
                    value={stepCaptionText}
                    onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => {
                            changeStepCaptionText(e.target.value);
                        }}
                    variant="outlined"
                    margin="dense"
                    multiline
                />
            </>
        }
        
        <Button
            variant="outlined"
            color="primary"
            onClick={e => {
                // switchEmptyStepNumSubmitted(stepNumLink === 0);
                switchEmptyCaptionSubmitted(stepCaptionText === "");
                addStep(stepCaptionText, stepNumText);
				changeStepNumText(stepNumText + 1);
            }}
        >
            Add Step
        </Button>
        <h3> Preview </h3>
        <div className="steps">
            {pictureCaptionPairs.map((pair: StepsProps, index: number) => (
                <div className="step" key={index}>
                    <button className= "step-button">
						{pair.stepNum}
					</button>
        	            <div className="step-caption">{pair.stepCaption}</div>
                        
                    <Button
                        id="delete-button"
                        variant="outlined"
                        onClick={() => {
                            pictureCaptionPairs.splice(index, 1);
                            setEditedContentOnChange(
                                "steps_props",
                                pictureCaptionPairs
                            );
                        }}
                    >
                        Delete
                    </Button>
                </div>
            ))}
        </div>
    </>
};
