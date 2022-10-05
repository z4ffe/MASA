import {painters} from "../js/painters";
import Painter from "./Painter";
import '../scss/Gallery.css'


export default function Gallery(props) {

	const allPainters = painters.map((painter, id) => <Painter painter={painter.painter} bio={painter.bio}
															   paintings={painter.paintings} id={id}>
	</Painter>)

	return (
		<div id='gallery' className="gallery">
			<div className="gallery-wrapper">
				{allPainters}
			</div>
		</div>
	)
}