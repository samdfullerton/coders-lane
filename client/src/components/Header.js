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
				className="header-logo"
				src="https://perrit.eu/wp-content/uploads/2015/10/JOIN-logo.png"
				alt=""
				
			/>

			<IconButton>
				<ForumIcon />
			</IconButton>
		</div>
	);
}
