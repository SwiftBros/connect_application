import React from "react";
import { Row, Col, Form, FormControl, Button, Container, Modal } from 'react-bootstrap';

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
		
		// TODO: Make this dynamic using props and state
		function LearnMore() {
		  const [show, setShow] = React.useState(false);

		  const handleClose = () => setShow(false);
		  const handleShow = () => setShow(true);

		  return (
		    <>
		      <Button className="float-right" variant="outline-info" onClick={handleShow}>
		        Learn More
		      </Button>

		      <Modal show={show} onHide={handleClose}>
		        <Modal.Header closeButton>
		          <Modal.Title>Logo Design</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
							<div>Poster: <span>Rageeb Mahtab</span></div>
							<div>Location: <span>New York, NY</span></div>
							<div>Posted: <span>12/07/2019</span></div>
							<div>Pay Rate: <span>$100</span></div>

							<br />
							<p>
								Basically, I am creating a startup. We need an amazing logo designer for 1 day. For this job, you will be doing mockups, and helping us build our brand image. Message for further inquiry. Availability needed withint next two weeks.
							</p>
						</Modal.Body>
		        <Modal.Footer>
		          <Button variant="secondary" onClick={handleClose}>
		            Close
		          </Button>
		          <Button variant="primary" onClick={handleClose}>
		            Apply
		          </Button>
		        </Modal.Footer>
		      </Modal>
		    </>
		  );
		}

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

				<Row>
					<Col className="border-top border-light pt-2 pb-2">
						<LearnMore />
					</Col>
				</Row>
			</Container>
		);
	}
}


// TODO: Use for loop to populate <JobPosting />s inside Container
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
