import React, {Component} from 'react';
import '../css/Nav.css'

class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<ul className="nav__list">
					<li><a href="#">Main</a></li>
					<li><a href="#">Information</a></li>
					<li><a href="#">Delivery</a></li>
					<li><a href="#">About Us</a></li>
				</ul>
			</div>
		);
	}
}

export default Nav;