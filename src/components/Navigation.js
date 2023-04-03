// imports react
import React from 'react';
// navigation function that highlights the active tab using props
import '../assets/css/style.css';
function Navigation(props) {
    const styles = {
        ul: {
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
        }
    };
    // destructures props
    const { currentTab, setCurrentTab } = props;
    // returns html for nav bar
    return (
        <nav className='p-2' >
            <ul style={styles.ul} className="d-flex">
                {/* conditional rendering that changes the active tab to have an active class attribute */}
                <li
                    style={currentTab === "about" ? styles.listactive : styles.list}
                    className={currentTab === "about" ? "active-tab list-group-item" : "list-group-item"}
                    // calls set current tab fuction when the tab is clicked
                    onClick={() => setCurrentTab("about")}>
                    about me
                </li>
                <li
                    style={currentTab === "portfolio" ? styles.listactive : styles.list}
                    className={currentTab === "portfolio" ? "active-tab list-group-item" : "list-group-item"}
                    onClick={() => setCurrentTab("portfolio")}>
                    portfolio
                </li>
                <li
                    style={currentTab === "contact" ? styles.listactive : styles.list}
                    className={currentTab === "contact" ? "active-tab list-group-item" : "list-group-item"}
                    onClick={() => setCurrentTab("contact")}>
                    contact
                </li>
                <li
                    style={currentTab === "resume" ? styles.listactive : styles.list} 
                    className={currentTab === "resume" ? "active-tab list-group-item" : "list-group-item"}
                    onClick={() => setCurrentTab("resume")}>
                    resume
                </li>
            </ul>
        </nav >
    );
};
// exports navigation function
export default Navigation;