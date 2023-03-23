import React from 'react';
import './BaseContainer.scss';

interface IBaseContainerProps {
    children: React.ReactNode
}

const BaseContainer: React.FunctionComponent<IBaseContainerProps> = ({ children }) => (
    <div className='base-container'>
        {children}
    </div>
)

export default BaseContainer;
