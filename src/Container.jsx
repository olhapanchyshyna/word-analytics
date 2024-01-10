import { useState } from 'react'
import Stats from './Stats'
import Textarea from './Textarea'

export default function Container() {
	const [text, setText] = useState('')

	const numberOfCharasters = text.length

	const stat = {
		numberOfCharasters: numberOfCharasters,
		numbeOfWods: text.split(/\s/).filter(word => word !== '').length,
		instagramCharactersleft: 280 - text.length,
		facebookCharactersleft: 2200 - text.length,
	}

	return (
		<section className='container'>
			<Textarea
				text={text}
				setText={setText}
				numberOfCharasters={numberOfCharasters}
			/>
			<Stats stat={stat} />
		</section>
	)
}
