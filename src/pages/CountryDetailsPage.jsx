import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function HomePage() {
	const alpha3Code = useParams().countryId

	const urlCountry = `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`

	const [country, setCountry] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		axios
			.get(urlCountry)
			.then(function (data) {
				setCountry(data.data)
			})
			.catch(function (err) {
				console.log('oh no!', err)
			})
			.finally(function () {
				setLoading(false)
			})
	}, [urlCountry, alpha3Code])

	if (loading) return <div> loading... </div>

	return (
		<>
			<Container fluid>
				<Row>
					<Col>
						<h1>WikiCountries: Your Guide to the World</h1>
						<h2>Country Details</h2>
					</Col>
				</Row>

				<Row>
					<Col>
						<div className="countrydata">
							<h2>{country.name?.common}</h2>
							<p>{country.capital}</p>
							<p>{country.area} km</p>
							<p>
								{country.borders.map((border, i) => {
									return (
										<Link to={`/${border}`} key={i} className="d-flex flex-column py-2 border-2">
											{border}
										</Link>
									)
								})}
							</p>
							<p></p>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}
