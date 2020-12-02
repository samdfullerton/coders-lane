import React from 'react';

import '../App.css';
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

export default function Header() {
	return (
		<div className="header">
			<IconButton>
				<PersonIcon fontSize="large" className="header__icon" />
			</IconButton>

			<img
				className="header__logo"
				src="https://image.shutterstock.com/image-photo/image-150nw-379920718.jpg"
				alt=""
			/>

			<IconButton>
				<ForumIcon />
			</IconButton>
		</div>
	);
}
