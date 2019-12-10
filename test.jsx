// class JobHeader extends React.Component {
// 	constructor(props) {
// 		super(props)
// 	}
//
// 	render() {
// 		// const jobsRef = this.props.firebase.db.ref('jobs');
// 		//
// 		// jobsRef.on('value', snapshot => {
// 		// 	console.log("Inside JobHeader");
// 		// 	console.log(snapshot.val());
// 		// });
//
// 		function PostAJob() {
// 		  const [show, setShow] = React.useState(false);
//
// 		  const handleClose = () => setShow(false);
// 		  const handleShow = () => setShow(true);
//
// 		  return (
// 		  	<>
// 					<Button className="ml-3" variant="primary" onClick={handleShow}>Create a job posting</Button>
//
// 		      <Modal show={show} onHide={handleClose}>
// 		        <Modal.Header closeButton>
// 		          <Modal.Title>Create a Job Posting</Modal.Title>
// 		        </Modal.Header>
// 		        <Modal.Body>
// 							<Form>
// 								<Form.Group controlId="formJobTitle">
// 									<Form.Label>Job Title</Form.Label>
// 									<Form.Control type="text" placeholder="Enter a job title"></Form.Control>
// 								</Form.Group>
//
// 								<Form.Group controlId="formJobLocation">
// 									<Form.Label>Job Location</Form.Label>
// 									<Form.Control type="text" placeholder="Where is this job located?"></Form.Control>
// 								</Form.Group>
//
// 								<Form.Group controlId="formJobSummary">
// 									<Form.Label>Job Summary</Form.Label>
// 									<Form.Control type="text" placeholder="Provide a short summary"></Form.Control>
// 								</Form.Group>
//
// 								<Form.Group controlId="formJobSummary">
// 									<Form.Label>Job Description</Form.Label>
// 									<Form.Control as="textarea" rows="8" placeholder="Provide the job description, requirements, etc."></Form.Control>
// 								</Form.Group>
//
// 								<Form.Group controlId="formPayRate">
// 									<Form.Label>Pay Rate ($)</Form.Label>
// 									<Form.Control type="text" placeholder="Enter the pay rate"></Form.Control>
// 								</Form.Group>
// 							</Form>
// 						</Modal.Body>
// 		        <Modal.Footer>
// 		          <Button variant="secondary" onClick={handleClose}>
// 		            Close
// 		          </Button>
// 		          <Button variant="primary" onClick={handleClose}>
// 		            Post Job
// 		          </Button>
// 		        </Modal.Footer>
// 		      </Modal>
// 		    </>
// 		  );
// 		}
// 		return (
// 			<div className="text-center">
// 				<h1>Job Board</h1>
// 				<div className="d-flex justify-content-center mr-3">
// 					<Form className="form-inline">
// 						<Form.Control type="text" placeholder="Search" />
// 						<Button className="ml-1" variant="outline-success">Search</Button>
// 					</Form>
// 					<PostAJob />
// 				</div>
// 				<hr />
// 			</div>
// 		);
// 	}
// }


<form onSubmit={event => this.onCreateMessage(event, authUser)}>
	<input
	type="text"
	name="jobTitle"
	placeholder="jobTitle"
	value={jobTitle}
	onChange={this.onChangeText}
	/>

	<input
	type="text"
	name="jobLocation"
	placeholder="jobLocation"
	value={jobLocation}
	onChange={this.onChangeText}
	/>

	<input
	type="text"
	name="jobSummary"
	placeholder="jobSummary"
	value={jobSummary}
	onChange={this.onChangeText}
	/>

	<input
	type="text"
	name="jobDescription"
	placeholder="jobDescription"
	value={jobDescription}
	onChange={this.onChangeText}
	/>

	<input
	type="text"
	name="payRate"
	placeholder="Pay Rate"
	value={payRate}
	onChange={this.onChangeText}
	/>

	<button type="submit">Send</button>
</form>

// class JobsBase extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			userId: '',
// 			jobTitle: '',
// 			jobLocation: '',
// 			jobSummary: '',
// 			jobDescription: '',
// 			timestamp: '',
// 			payRate: 15,
// 			loading: false,
// 			jobs: [],
// 		};
// 	}
// 	componentDidMount() {
// 		this.setState({ loading: true });
// 		this.props.firebase.jobs().on('value', snapshot => {
// 			const jobObject = snapshot.val();
// 			if (jobObject) {
// 			// convert messages list from snapshot
// 			const jobList = Object.keys(jobObject).map(key => ({ ...jobObject[key], uid: key,}));
// 			this.setState({ jobs: jobList, loading: false });
// 		} else {
// 			this.setState({ jobs: null, loading: false });
// 		}
// 	});
//
// 	}
// 	componentWillUnmount() {
// 		this.props.firebase.jobs().off();
// 	}
//
// 	onEditMessage = () => {
//
// 	};
//
// 	onRemoveMessage = uid => {
// 		// console.log(uid);
// 		// console.log(this.props.firebase.job(uid));
// 		this.props.firebase.job(uid).remove();
// 	};
//
// 	onChangeText = event => {
// 		console.log(this.state);
// 		this.setState({ [event.target.name]: event.target.value });
// 	};
//
// 	onCreateMessage = (event, authUser) => {
// 		var self = this;
// 		this.props.firebase.jobs().push({
// 			userId: authUser.uid,
// 			jobTitle: this.state.jobTitle,
// 			jobLocation: this.state.jobLocation,
// 			jobSummary: this.state.jobSummary,
// 			jobDescription: this.state.jobDescription,
// 			timestamp: Date.now(),
// 			payRate: this.state.payRate,
// 			messages: "Placeholder",
// 		});
// 		this.setState({ text: '' });
// 		event.preventDefault();
// 	};
//
// 	render() {
// 		const { userId, jobTitle, jobLocation, jobSummary, jobDescription, timestamp, payRate, loading, jobs} = this.state;
//
// 		var self = this;
//
// 		function PostAJob() {
// 			const [show, setShow] = React.useState(false);
//
// 		  const handleClose = () => setShow(false);
// 		  const handleShow = () => setShow(true);
//
// 		  return (
// 		  	<>
// 					<Button className="ml-3" variant="primary" onClick={handleShow}>Create a job posting</Button>
//
// 		      <Modal show={show} onHide={handleClose}>
// 		        <Modal.Header closeButton>
// 		          <Modal.Title>Create a Job Posting</Modal.Title>
// 		        </Modal.Header>
// 		        <Modal.Body>
// 							<Form onSubmit={event => self.onCreateMessage(event, self.authUser)}>
// 								<Form.Group controlId="formJobTitle">
// 									<Form.Label>Job Title</Form.Label>
// 									<Form.Control
// 										type="text"
// 										name="jobTitle"
// 										placeholder="Enter a job title"
// 										value={jobTitle}
// 										onChange={self.onChangeText}
// 									>
// 									</Form.Control>
// 								</Form.Group>
//
// 								<Form.Group controlId="formJobLocation">
// 									<Form.Label>Job Location</Form.Label>
// 									<Form.Control
// 										type="text"
// 										name="jobLocation"
// 										placeholder="Where is this job located?"
// 										value={jobLocation}
// 										onChange={self.onChangeText}
// 									>
// 									</Form.Control>
// 								</Form.Group>
//
// 								<Form.Group controlId="formJobSummary">
// 									<Form.Label>Job Summary</Form.Label>
// 									<Form.Control
// 										type="text"
// 										name="jobSummary"
// 										placeholder="Provide a short summary"
// 										value={jobSummary}
// 										onChange={self.onChangeText}
// 									>
// 									</Form.Control>
// 								</Form.Group>
//
// 								<Form.Group controlId="formJobDescription">
// 									<Form.Label>Job Description</Form.Label>
// 									<Form.Control
// 										as="textarea"
// 										rows="8"
// 										name="jobDescription"
// 										placeholder="Provide the job description, requirements, etc."
// 										value={jobDescription}
// 										onChange={self.onChangeText}
// 									>
// 									</Form.Control>
// 								</Form.Group>
//
// 								<Form.Group controlId="formPayRate">
// 									<Form.Label>Pay Rate ($)</Form.Label>
// 									<Form.Control
// 										type="text"
// 										name="payRate"
// 										placeholder="Enter the pay rate"
// 										value={payRate}
// 										onChange={self.onChangeText}
// 									>
// 									</Form.Control>
// 									<br />
// 									<div style={{float: 'right'}}>
// 										<Button variant="secondary" onClick={handleClose}>
// 					            Close
// 					          </Button>
// 										<Button type="submit" variant="success" className="ml-1">
// 					            Post Job
// 					          </Button>
// 									</div>
// 								</Form.Group>
// 							</Form>
// 						</Modal.Body>
// 		      </Modal>
// 		    </>
// 		  );
// 		}
//
// 		function JobsPageHeader() {
// 			return (
// 				<div className="text-center">
// 					<h1>Job Board</h1>
// 					<div className="d-flex justify-content-center mr-3">
// 						<Form className="form-inline">
// 							<Form.Control type="text" placeholder="Search" />
// 							<Button className="ml-1" variant="outline-success">Search</Button>
// 						</Form>
// 						<PostAJob />
// 					</div>
//
// 					<hr />
// 				</div>
// 			)
// 		}
//
// 		return (
// 			<AuthUserContext.Consumer>
// 			{authUser => (
// 			<div>
// 				<JobsPageHeader />
// 				{loading && <div>Loading ...</div>}
//
// 				{jobs ? (
// 						<MessageList onRemoveMessage={this.onRemoveMessage}
// 						onEditMessage={this.onEditMessage} messages={jobs} firebase={this.props.firebase}/>
// 					) : (
// 						<div>There are no messages ...</div>
// 				)}
// 				<br />
// 			</div>
// 			)}
// 			</AuthUserContext.Consumer>
// 		);
// 	}
// }
