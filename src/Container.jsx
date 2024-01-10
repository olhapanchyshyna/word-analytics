import { useState } from 'react'
import Stats from './Stats'
import Textarea from './Textarea'
import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from './constans'

export default function Container() {
	const [text, setText] = useState('')

	const numberOfCharasters = text.length

	const stat = {
		numberOfCharasters: numberOfCharasters,
		numbeOfWods: text.split(/\s/).filter(word => word !== '').length,
		instagramCharactersleft: INSTAGRAM_MAX_CHARACTERS - text.length,
		facebookCharactersleft: FACEBOOK_MAX_CHARACTERS - text.length,
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
