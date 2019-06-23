import React from 'react';
import './AddNewWidgetButton.css';

type AddNewWidgetButtonProps = {
    onClick: () => void
}

/**
 * AddNewWidgetButton is the + button that appears for the user to add a widget. It will 
 */
export const AddNewWidgetButton: React.FC<AddNewWidgetButtonProps> = ({ onClick }) => {
    return <div className="content-add-new-widget-container">
        <button className="content-add-new-widget" onClick={onClick}>+</button>
    </div>
}