import React from "react"
import Data from "../Data"

function Meme() {
	function getImage() {
		const memeArray = Data.data.memes
		const randomNumber = Math.floor(Math.random * memeArray.length)
		const width = memeArray[randomNumber].width
	}
	return (
		<main>
			<div className='form' action='Post'>
				<input type='text' className='form--input' placeholder='Top Text' />
				<input type='text' className='form--input' placeholder='Bottom Text' />
				<button onClick={getImage} className='form--button'>
					Get me an Image
				</button>
			</div>
		</main>
	)
}

export default Meme
