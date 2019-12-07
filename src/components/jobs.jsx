import React from "react";
import { Row, Col, Form, FormControl, Button, Container } from 'react-bootstrap';

class JobHeader extends React.Component {
	render() {
		return (
			<div className="text-center">
				<h1>Job Board</h1>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<Form className="form-inline">
						<Form.Control type="text" placeholder="Search" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</div>
			</div>
		);
	}
}

class JobPosting extends React.Component {
	render() {
		var posterName = {
			fontSize: '12px',
			color: 'gray',
			fontWeight: 'bold'
		};

		var location = {
			float: 'right',
			fontSize: '12px'
		}

		var jobTitle = {
			fontSize: '28px',
			fontWeight: 'bold'
		}

		var jobSummary = {

		};

		var timestamp = {
			fontSize: '11px',
			color: 'gray'
		};

		var payRate = {
			float: 'right',
			fontSize: '18px',
			fontWeight:'bold'
		};

		return (
			<Container className="border border-light rounded">
				<Row>
					<Col>
						<span style={ posterName }>Rageeb Mahtab</span>
					</Col>

					<Col>
						<span style={ location }>
							New York, NY
						</span>
					</Col>
				</Row>

				<Row>
					<Col>
						<span style={ jobTitle }>Logo Design</span>
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
						<span style={ jobSummary }>Need a logo designer for 1 day. Will pay well.</span>
						<br /><br />
					</Col>
				</Row>

				<Row>
					<Col>
						<span style={ timestamp }>12/07/2019</span>
					</Col>

					<Col>
						<span style={ payRate }>$100</span>
					</Col>
				</Row>
			</Container>
		);
	}
}


export class Jobs extends React.Component {
	render() {
		return (
			<div>
				<JobHeader />

				<Container>
					<Row>
						<Col xs={4} className="mt-3">
							<JobPosting />
						</Col>
						<Col xs={4} className="mt-3">
							<JobPosting />
						</Col>
						<Col xs={4} className="mt-3">
							<JobPosting />
						</Col>

						<Col xs={4} className="mt-3">
							<JobPosting/>
						</Col>

						<Col xs={4} className="mt-3">
							<JobPosting />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
