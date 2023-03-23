import React, { useContext } from 'react';
import { StoreContext } from '../../../store/StoreProvider';
import BaseSpinner from '../BaseSpinner/BaseSpinner';
import './LoadingAlert.scss'

const LoadingAlert: React.FunctionComponent = () => {
    const { error } = useContext(StoreContext)
    const headerClasses = error === '' ? 'pt-3 text-center' : 'pt-3 text-center error'
    return (
        <div className='loading-alert'>
            <header className={headerClasses}>
                <h3 className='text-light'>{error !== '' ? 'Error!!' : 'Loading Data...'}</h3>
                <hr />
            </header>
            <main>
                {error === '' ? <BaseSpinner /> : (<p className='pt-5 fs-2 text-center '>{error}</p>)}
            </main>
        </div>
    );
};

export default LoadingAlert;