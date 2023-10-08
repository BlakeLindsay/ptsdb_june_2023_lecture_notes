// jsx expressions must have only one parent element
function AboutMe() {
	let styles = {
		ul: {
			textAlign: 'left',
			color: 'lightgrey'
		},
		p: {
			fontSize: '20pt'
		}
	};

	let firstName = 'Bat';
	let lastName = 'man';
	let locations = ['Gotham City', 'Bat Cave', "I'm Batman"];

	return(
		<div>
			<p style={styles.p}>{firstName}{lastName}</p>
			<ul style={styles.ul}>
				{
					locations.map((location, index) => {
						return <li key={index}>{location}</li>
					})
				}
			</ul>
		</div>
	)
}

export default AboutMe;