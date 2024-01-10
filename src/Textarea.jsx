import { useState } from 'react'
import Warning from './Warning'

export default function Textarea() {
	const [text, setText] = useState('')
	const [warningText, setWarningText ] = useState('')


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
