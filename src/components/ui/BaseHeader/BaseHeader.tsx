import React from 'react';
import './BaseHeader.scss';

interface IBaseHeaderProps {
    title: string,
}

const BaseHeader: React.FunctionComponent<IBaseHeaderProps> = ({ title }) => {
    const keys = title.split(' ');
    const classes = `${keys[0]} base-header`
    return (
        <header className={classes}>
            <h2 className='text-capitalize'>{title}</h2>
            <div className='gradient'/>
        </header>
    );
};

export default BaseHeader;
