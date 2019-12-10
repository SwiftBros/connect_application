class JobHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			uid: '',
			username: '',
			jobTitle: '',
			jobSummary: '',
			jobDes: '',
			timestamp: '',
			payRate: 0,
			show: false,
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
	}
	componentWillUnmount() {
	}

	onCreateJob = event => {
		this.props.firebase.jobs().push({
			uid: this.state.uid,
			username: this.state.username,
			jobTitle: this.state.jobTitle,
			jobLocation: this.state.jobLocation,
			jobSummary: this.state.jobSummary,
			jobDescription: this.state.jobDes,
			timestamp: this.state.timestamp,
			payRate: this.state.payRate,
		});
		this.setState({ text: '' });
		event.preventDefault();
	};

	handleChange = (event) => {
		this.setState(
			{
				[event.target.name]: event.target.value
			}
		);
		console.log(this.state.jobTitle);
	}



	render() {
		var self = this;

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
							<Form onSubmit={self.onCreateJob}>
								<Form.Group controlId="formJobTitle">
									<Form.Label>Job Title</Form.Label>
									<Form.Control type="text" name="jobTitle" onChange={self.handleChange} name="jobTitle" >
									</Form.Control>
								</Form.Group>

								<Form.Group controlId="formJobLocation">
									<Form.Label>Job Location</Form.Label>
									<Form.Control></Form.Control>
								</Form.Group>

								<Form.Group controlId="formJobSummary">
									<Form.Label>Job Summary</Form.Label>
									<Form.Control type="text" name="jobSummary" placeholder="Provide a short summary"></Form.Control>
								</Form.Group>

								<Form.Group controlId="formJobSummary">
									<Form.Label>Job Description</Form.Label>
									<Form.Control as="textarea" rows="8" placeholder="Provide the job description  requirements, etc."></Form.Control>
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
