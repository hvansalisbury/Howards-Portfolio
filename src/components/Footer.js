import React from 'react';
import githublogo from '../assets/images/github-mark.svg';
import linkedinlogo from '../assets/images/iconmonstr-linkedin-3.svg';
import youtubelogo from '../assets/images/youtube-svgrepo-com.svg';

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
            <a className='m-2' href="https://github.com/hvansalisbury"><img src="github-mark.svg" alt={githublogo} height="50" width="50"></img></a>
            <a className='m-2' href="https://www.linkedin.com/in/howard-salisbury-5a547998/"><img src={linkedinlogo} alt="linkedin-logo" height="50" width="50"></img></a>
            <a className='m-2' href="https://www.youtube.com/channel/UCtYCGStZXgJ9pHXe_r3B13w"><img src={youtubelogo} alt="youtube-logo" height="50" width="50"></img></a>
        </footer>
    )
}

export default Footer;