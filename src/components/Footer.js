import React from 'react';
import githublogo from '../assets/images/github-mark.svg';
import linkedinlogo from '../assets/images/iconmonstr-linkedin-3.svg';
import youtubelogo from '../assets/images/youtube-svgrepo-com.svg';
function Footer() {
    return (
        <footer>
            <a href="https://github.com/hvansalisbury" target='_blank' rel="noopener noreferrer"><img src={githublogo} alt="github-logo" height="50" width="50" className="image-link"/></a>
            <a href="https://www.linkedin.com/in/howard-van-salisbury-5a547998/" target='_blank' rel="noopener noreferrer"><img src={linkedinlogo} alt="linkedin-logo" height="50" width="50" className="image-link"/></a>
            <a href="https://www.youtube.com/channel/UCtYCGStZXgJ9pHXe_r3B13w" target='_blank' rel="noopener noreferrer"><img src={youtubelogo} alt="youtube-logo" height="50" width="50" className="image-link"/></a>
        </footer>
    );
};
export default Footer;