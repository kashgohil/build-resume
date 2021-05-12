import React from 'react';
import {LinkedInIcon, GithubIcon} from 'icons';
import './footer.scss';

const Footer = () => {
	return (
		<footer className='footer'>
            <span className='footer-main-text'>
            Developed by Kashyap Gohil
            </span>
            <span className='footer-social'>
                <GithubIcon />
                <LinkedInIcon />
            </span>
		</footer>
	);
};

export default Footer;
