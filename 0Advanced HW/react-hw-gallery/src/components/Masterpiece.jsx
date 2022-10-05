import '../scss/Masterpiece.css'

const Masterpiece = (props) => {

	return (
		<div className="masterpiece-wrapper">
			<div className='masterpiece'>
				<h1 className='painting-name'>{props.painting}</h1>
				<p className='painter-name'>{props.date}</p>
				<img src={props.src} alt=""/>
			</div>
		</div>
	);
}

export default Masterpiece;