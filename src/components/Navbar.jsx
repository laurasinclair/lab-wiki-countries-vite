import { Container, Row, Col, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function NavBar() {

	return (
		<Navbar expand="lg" className="bg-body-primary">
			<Container fluid>
				<Row>
					<Col className="m-0 p-0 d-flex align-items-center justify-content-between">
						<NavLink to='/'>
                            <h2>WikiCountries</h2>
						</NavLink>
					</Col>
				</Row>
			</Container>
		</Navbar>
	)
}