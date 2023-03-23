import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import './BaseButton.scss';

interface IBaseButtonProps {
    text: string,
    click: (e: React.MouseEvent<HTMLButtonElement>)=>void,
    icon?: IconDefinition,
    isLight?: boolean,
    isCircle?: boolean
}

const BaseButton: React.FunctionComponent<IBaseButtonProps> = ({ text, click, icon, isLight, isCircle }) => {
    const classes = `base-button mb-2 me-5 ${isLight && 'light'} ${isCircle && 'circle'}`
    return (
        <button className={classes} onClick={click}>
            <span>{text}</span>
            {icon && <FontAwesomeIcon className='icon' icon={icon}/>}
        </button>
    );
};

export default BaseButton;
