import React from 'react';

function Navigation(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <nav className='p-2'>
            <ul className="d-flex">
                <li className={currentTab === "about" ? "active list-group-item" : "list-group-item"}
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
    )
}

export default Navigation;