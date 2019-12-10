class JobHeader extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		// const jobsRef = this.props.firebase.db.ref('jobs');
		//
		// jobsRef.on('value', snapshot => {
		// 	console.log("Inside JobHeader");
		// 	console.log(snapshot.val());
		// });

		function PostAJob() {
		  const [show, setShow] = React.useState(false);

		  const handleClose = () => setShow(false);
		  const handleShow = () => setShow(true);

		  return (
		  	<>
					<Button className="ml-3" variant="primary" onClick={handleShow}>Create a job posting</Button>

		      <Modal show={show} onHide={handleClose}>
		        <Modal.Header closeButton>
		          <Modal.Title>Create a Job Posting</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
							<Form>
								<Form.Group controlId="formJobTitle">
									<Form.Label>Job Title</Form.Label>
									<Form.Control type="text" placeholder="Enter a job title"></Form.Control>
								</Form.Group>

								<Form.Group controlId="formJobLocation">
									<Form.Label>Job Location</Form.Label>
									<Form.Control type="text" placeholder="Where is this job located?"></Form.Control>
								</Form.Group>

								<Form.Group controlId="formJobSummary">
									<Form.Label>Job Summary</Form.Label>
									<Form.Control type="text" placeholder="Provide a short summary"></Form.Control>
								</Form.Group>

								<Form.Group controlId="formJobSummary">
									<Form.Label>Job Description</Form.Label>
									<Form.Control as="textarea" rows="8" placeholder="Provide the job description, requirements, etc."></Form.Control>
								</Form.Group>

								<Form.Group controlId="formPayRate">
									<Form.Label>Pay Rate ($)</Form.Label>
									<Form.Control type="text" placeholder="Enter the pay rate"></Form.Control>
								</Form.Group>
							</Form>
						</Modal.Body>
		        <Modal.Footer>
		          <Button variant="secondary" onClick={handleClose}>
		            Close
		          </Button>
		          <Button variant="primary" onClick={handleClose}>
		            Post Job
		          </Button>
		        </Modal.Footer>
		      </Modal>
		    </>
		  );
		}
		return (
			<div className="text-center">
				<h1>Job Board</h1>
				<div className="d-flex justify-content-center mr-3">
					<Form className="form-inline">
						<Form.Control type="text" placeholder="Search" />
						<Button className="ml-1" variant="outline-success">Search</Button>
					</Form>
					<PostAJob />
				</div>
				<hr />
			</div>
		);
	}
}
