import React, {Component} from 'react';
import '../css/Header.css';
import Nav from "./Nav";

class Header extends Component {
	render() {
		return (
			<div className="header">
				<img className="header__logo" src="https://logos-download.com/wp-content/uploads/2016/06/NASA_Logo_1975.svg" alt="logo"/>
				<Nav />
			</div>
		);
	}
}

export default Header;