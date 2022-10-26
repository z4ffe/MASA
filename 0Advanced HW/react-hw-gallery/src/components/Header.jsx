import '../scss/Header.css'

export const Header = (props) => {
	return (
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
};



Header.defaultProps = {
	title: 'Dutch Painters Gallery'
}

export default Header;