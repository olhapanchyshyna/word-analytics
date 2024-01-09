import { useState } from 'react'

export default function Textarea() {

	const[text, setText] = useState("")

	return (
		<textarea
			className='textarea'
			placeholder='Enter your text'
			spellCheck='false'
			value={text}
			onChange={(e) => {
				setText(e.target.value)
			}}
		/>
	)
}
