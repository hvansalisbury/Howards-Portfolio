import React from 'react';

const styles = {
    footer: {
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
    }
}

function Footer() {
    // const { currentTab, setCurrentTab } = props;

    return (
        <footer style={styles.footer} className='d-flex justify-content-center align-items-center bg-secondary'>
            <a className='m-2' href="https://github.com/hvansalisbury"><img src="github-mark.svg" alt="github-logo" height="50" width="50"></img></a>
            <a className='m-2' href="https://www.linkedin.com/in/howard-salisbury-5a547998/"><img src="iconmonstr-linkedin-3.svg" alt="linkedin-logo" height="50" width="50"></img></a>
            <a className='m-2' href="https://www.youtube.com/channel/UCtYCGStZXgJ9pHXe_r3B13w"><img src="youtube-svgrepo-com.svg" alt="youtube-logo" height="50" width="50"></img></a>
        </footer>
    )
}

export default Footer;