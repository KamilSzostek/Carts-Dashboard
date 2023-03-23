import React from 'react';
import './InnerContainer.scss';

interface IInnerContainerProps {
    children: React.ReactNode
}

const InnerContainer: React.FunctionComponent<IInnerContainerProps> = ({ children }) => (
    <div className='inner-container row'>
        {children}
    </div>
)

export default InnerContainer;
