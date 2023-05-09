import React from 'react';
import Navigation from './Navigation';
function Header(props) {
    const { currentTab, setCurrentTab } = props;
    return (
        <header>
            <h1>Howard's Portfolio</h1>
            <Navigation
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}>
            </Navigation>
        </header>
    );
};
export default Header;