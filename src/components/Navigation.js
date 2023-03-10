// imports react
import React from 'react';
// navigation function that highlights the active tab using props
function Navigation(props) {
    // destructures props
    const { currentTab, setCurrentTab } = props;
    // returns html for nav bar
    return (
        <nav className='p-2'>
            <ul className="d-flex">
                {/* conditional rendering that changes the active tab to have an active class attribute */}
                <li className={currentTab === "about" ? "active list-group-item" : "list-group-item"}
                    // calls set current tab fuction when the tab is clicked
                    onClick={() => setCurrentTab("about")}>
                    about me
                </li>
                <li className={currentTab === "portfolio" ? "active list-group-item" : "list-group-item"}
                    onClick={() => setCurrentTab("portfolio")}>
                    portfolio
                </li>
                <li className={currentTab === "contact" ? "active list-group-item" : "list-group-item"}
                    onClick={() => setCurrentTab("contact")}>
                    contact
                </li>
                <li className={currentTab === "resume" ? "active list-group-item" : "list-group-item"}
                    onClick={() => setCurrentTab("resume")}>
                    resume
                </li>
            </ul>
        </nav>
    );
};
// exports navigation function
export default Navigation;