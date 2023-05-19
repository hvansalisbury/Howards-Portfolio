import React from 'react';
import '../assets/css/style.css';
function Navigation(props) {
    const styles = {
       list: {
        },
        listactive: {
            color: 'royalblue',
            backgroundColor: 'whitesmoke',
            borderRadius: '10px',
        }
    };
    const { currentTab, setCurrentTab } = props;
    return (
        <nav>
            <ul>
                <li
                    style={currentTab === "about" ? styles.listactive : styles.list}
                    className={currentTab === "about" ? "active-tab list-group-item" : "list-group-item"}
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
export default Navigation;