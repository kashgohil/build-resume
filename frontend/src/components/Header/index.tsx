import React, {useState} from 'react';
import {UserIcon, MoonIcon, SunIcon} from 'icons';
import './header.scss';

const Header = () => {
	const [nightMode, setNightMode] = useState<boolean>(false);

	const handleNightModeToggle = () => setNightMode(!nightMode);

	return (
		<header className='header'>
			<span className='header-logo'>Build Resume</span>
			<span className='header-menu'>
				<span className='header-menu-login'>
					<UserIcon />
				</span>
				<span className='header-menu-mode' onClick={handleNightModeToggle}>
					{nightMode ? <SunIcon /> : <MoonIcon />}
				</span>
			</span>
		</header>
	);
};

export default Header;
