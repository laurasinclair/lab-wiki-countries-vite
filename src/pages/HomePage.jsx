import { Container, Row, Col, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function HomePage() {
	const [countries, setCountries] = useState([])

	useEffect(() => {
		axios
			.get('https://ih-countries-api.herokuapp.com/countries')
			.then(function (data) {
				setCountries(data.data)
			})
			.catch(function (err) {
				console.log('oh no!', err)
			})
			.finally(function () {})
	}, [])

	return (
		<>
			<Container fluid>
				<Row>
					<Col>
						<h1>WikiCountries: Your Guide to the World</h1>
					</Col>
				</Row>

				<Row>
					<Col>
						{countries.map((country) => {
							const alpha2Code = country.alpha2Code
							const flagUrl = `https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`

							return (
								<Link key={country._id} to={`/${country.alpha3Code}`}>
									<Card className="mb-4">
										<Card.Img className="p-4" variant="top" src={flagUrl} alt={country.name.common} style={{ width: '100%', height: '150px', objectFit: 'contain', backgroundColor: '#ebedf9' }} />
										<Card.Body>
											<Card.Title>{country.name?.common}</Card.Title>
										</Card.Body>
									</Card>
								</Link>
							)
						})}
					</Col>
				</Row>
			</Container>
		</>
	)
}
