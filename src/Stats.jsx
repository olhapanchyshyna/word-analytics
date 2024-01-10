export default function Stats({stat}) {
	return (
		<section className='stats'>
			<Stat number={stat.numberOfCharasters} title='Charasters'/>
			<Stat number={stat.numbeOfWods} title='Words' />
			<Stat number={stat.instagramCharactersleft > 0 ? stat.instagramCharactersleft : 0 } title='Instagram' />
			<Stat number={stat.facebookCharactersleft > 0 ? stat.facebookCharactersleft : 0 } title='Facebook' />
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
