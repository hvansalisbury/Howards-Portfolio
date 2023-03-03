import React from 'react';
import Navigation from './Navigation';

function Header(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <header className='d-flex justify-content-between align-items-center bg-secondary py-5'>
            <div className='ps-2'>
                <h1>Howard's Portfolio</h1>
            </div>
            <Navigation
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}>
            </Navigation>
        </header>
    )
}

export default Header;