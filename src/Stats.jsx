export default function Stats({numberOfCharasters, instagramCharactersleft, facebookCharactersleft, numbeOfWods}) {
	return (
		<section className='stats'>
			<Stat number={numberOfCharasters} title='Charasters'/>
			<Stat number={numbeOfWods} title='Words' />
			<Stat number={instagramCharactersleft > 0 ? instagramCharactersleft : 0 } title='Instagram' />
			<Stat number={facebookCharactersleft > 0 ? facebookCharactersleft : 0 } title='Facebook' />
		</section>
	)
}

function Stat({number, title}) {
	return (
		<section className='stat'>
			<span className='stat__number'>{number}</span>
			<h2 className='second-heading'>{title}</h2>
		</section>
	)
}
