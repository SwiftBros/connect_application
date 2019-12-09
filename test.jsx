class JobPosting extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		// const jobsRef = this.props.firebase.db.ref('jobs');
		//
		// jobsRef.on('value', snapshot => {
		// 	console.log("IN JOB POSTING COMPONENT")
		// 	console.log(snapshot.val())
		// });

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
			<Container className="bg-light border border-light rounded">
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
					<Col className="border-top border-secondary pt-2 pb-2">
						<LearnMore />
					</Col>
				</Row>
			</Container>
		);
	}
}

// matt-job-posting
// <Container className="bg-light border border-light rounded">
// 	<Row>
// 		<Col>
// 			<span style={ posterName }>{ this.state.currentUser }</span>
// 		</Col>
//
// 		<Col>
// 			<span style={ location }>
// 				{ job.jobLocation }
// 			</span>
// 		</Col>
// 	</Row>
//
// 	<Row>
// 		<Col>
// 			<span style={ jobTitle }>{ job.jobTitle }</span>
// 		</Col>
// 	</Row>
//
// 	<Row>
// 		<Col>
// 			<br />
// 			<span style={ jobSummary }>{ job.jobSummary }</span>
// 			<br /><br />
// 		</Col>
// 	</Row>
//
// 	<Row>
// 		<Col>
// 			<span style={ timestamp }>12/07/2019</span>
// 		</Col>
//
// 		<Col>
// 			<span style={ payRate }>{ job.payRate }</span>
// 		</Col>
// 	</Row>
//
// 	<Row>
// 		<Col className="border-top border-secondary pt-2 pb-2">
// 			<LearnMore />
// 		</Col>
// 	</Row>
// </Container>


// rageeb-job-posting
// <div>
// 	<li>
// 		<strong>{job.userId}</strong><br/>
// 		<strong>{job.jobTitle}</strong><br/>
// 		<strong>{job.jobLocation}</strong><br/>
// 		<strong>{job.jobSummary}</strong><br/>
// 		<strong>{job.jobDescription}</strong><br/>
// 		<strong>{job.payRate}</strong><br/>
// 		<strong>The person who posted this job is
// 		{
// 			' ' + this.state.currentUser
// 		}
// 		</strong>
//
// 		<button type="button" onClick={() => this.props.onRemoveMessage(this.props.message.uid)}>
// 			Delete
// 		</button>
//
// 		<form onSubmit={event => this.onApply(event, authUser)}>
// 			<input type="text" name="message" placeholder="Enter message" value={this.state.message} onChange={this.onChangeText} />
// 			<button type="submit">Send</button>
// 		</form>
// 	</li>
// </div>

<Container>
	<Row>
		<AuthUserContext.Consumer>
			{authUser => (
				<Col xs={4} className="mt-3">
					<Container className="bg-light border border-light rounded">
						<Row>
							<Col>
								<span style={ posterName }>{ this.state.currentUser }</span>
							</Col>

							<Col>
								<span style={ location }>
									{ job.jobLocation }
								</span>
							</Col>
						</Row>

						<Row>
							<Col>
								<span style={ jobTitle }>{ job.jobTitle }</span>
							</Col>
						</Row>

						<Row>
							<Col>
								<br />
								<span style={ jobSummary }>{ job.jobSummary }</span>
								<br /><br />
							</Col>
						</Row>

						<Row>
							<Col>
								<span style={ timestamp }>12/07/2019</span>
							</Col>

							<Col>
								<span style={ payRate }>{ job.payRate }</span>
							</Col>
						</Row>

						<Row>
							<Col className="border-top border-secondary pt-2 pb-2">
								<button type="button" onClick={() => this.props.onRemoveMessage(this.props.message.uid)}>
									Delete
								</button>
								<LearnMore />
							</Col>
						</Row>
					</Container>
				</Col>
			)}
		</ AuthUserContext.Consumer>
	</Row>
</Container>
