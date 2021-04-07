import React from 'react'
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
function Result({ result, openPopup }) {
	return (
		<div className="result" onClick={() => openPopup(result.id)}>
			<img src={IMGPATH + result.poster_path} />
			<h3>{result.title}</h3>
		</div>
	)
}

export default Result
