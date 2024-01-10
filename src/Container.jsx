import Stats from './Stats'
import { useState } from 'react'
import Textarea from './Textarea'

export default function Container() {

	const [text, setText] = useState('')
	
	let numberOfCharasters = text.length
	let numbeOfWods = text.split(/\s/).filter((word) => word !== "").length
	let instagramCharactersleft = 280 - text.length;
	let facebookCharactersleft = 2200 - text.length;

	return (
		<section className='container'>
				<Textarea text={text} setText={setText} numberOfCharasters={numberOfCharasters}/>
				<Stats numberOfCharasters={numberOfCharasters} instagramCharactersleft={instagramCharactersleft} facebookCharactersleft={facebookCharactersleft} numbeOfWods={numbeOfWods}/>
		</section>
	)
}
