import React from "react"
import Troll from "./Images/troll face.png"

function Nav() {
	return (
		<div className='Nav'>
			<img className='nav--img' src={Troll} alt='Troll face' />
			<h1 className='nav--tittle'>Meme Generator</h1>
			<h2 className='nav--project'>React Course-Project 3</h2>
		</div>
	)
}

export default Nav
