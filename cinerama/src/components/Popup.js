import React from 'react'
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.title } <span>({ selected.release_date })</span></h2>
				<p className="score">Score: {selected.vote_average}</p>
				<div className="overview">
					<img src={IMGPATH + selected.poster_path} />
					<p>{selected.overview}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup
