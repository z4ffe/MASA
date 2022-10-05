import React from 'react';
import '../scss/Painter.css'
import Masterpiece from "./Masterpiece";


const Painter = (props) => {

	const allMasterpieces = props.paintings.map((paintings, id) => <Masterpiece painting={paintings.name}
																				date={paintings.date}
																				src={paintings.src}
																				id={id}></Masterpiece>)

	return (
		<div className="painter">
			<h1 className="painter__name">&#10001; {props.painter}</h1>
			<p className="painter__desc">{props.bio}</p>
			<div className="painter__masterpieces">
				{allMasterpieces}
			</div>
		</div>
	)
};

export default Painter;