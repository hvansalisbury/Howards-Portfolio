// imports react
import React from 'react';
// imports navigation function from navigation.js
import Navigation from './Navigation';
// header function that renders the header with the nav bar
function Header(props) {
    const styles = {
        header: {
            margin: '0',
        },
        list: {
            padding: '0 1em',
        },
        listactive: {
            padding: '0 1em',
            color: 'navy',
            backgroundColor: 'white',
            borderRadius: '10px',
        },
        background: {
            backgroundColor: 'grey',
        },
    };
    // establishes the props that will be used in the navigation function
    const { currentTab, setCurrentTab } = props;
    // returns header html includes props for navigation function
    return (
        <header  style={styles.background} className='d-flex justify-content-between align-items-center py-3'>
            <div className='ps-2'>
                <h1>Howard's Portfolio</h1>
            </div>
            <Navigation
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}>
            </Navigation>
        </header>
    );
};
// exports header function
export default Header;