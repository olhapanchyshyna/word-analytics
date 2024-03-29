import { useState } from 'react'
import Warning from './Warning'

export default function Textarea({text, setText, numberOfCharasters}) {
	
	const [warningText, setWarningText ] = useState('')

	// eslint-disable-next-line no-unused-vars
	numberOfCharasters = text.length

	const handleChange = e => {
		if (e.target.value.includes('<script>')) {
			setWarningText('No script tag allowed')
			setText(e.target.value.replace('<script>', ''))
		}else if(e.target.value.includes('@')){
			setWarningText('No @ tag allowed')
			setText(e.target.value.replace('@', ''))
		}else {
			setText(e.target.value)
			setWarningText('')
		}
	}

	return (
		<>
			<textarea
				className='textarea'
				placeholder='Enter your text'
				spellCheck='false'
				value={text}
				onChange={handleChange}
			/>

			{warningText ? <Warning warningText={warningText}/> : null}
			

		</>
	)
}
