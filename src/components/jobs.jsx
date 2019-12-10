import React, {Component} from "react";
import { Row, Col, Form, FormControl, Button, Container, Modal } from 'react-bootstrap';
import { withAuthentication, AuthUserContext } from './Session';
import { compose } from 'recompose';
import { FirebaseContext, withFirebase } from './Firebase';

// Hello

class AllJobs extends Component {
	render() {
		return (
			<div>
			<JobHeader/>
			<JobOuter />
			</div>
			);
	}
}


class JobsBase extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: '',
			jobTitle: '',
			jobLocation: '',
			jobSummary: '',
			jobDescription: '',
			timestamp: '',
			payRate: 15,
			loading: false,
			jobs: [],
		};
	}
	componentDidMount() {
		this.setState({ loading: true });
		this.props.firebase.jobs().on('value', snapshot => {
			const jobObject = snapshot.val();
			if (jobObject) {
			// convert messages list from snapshot
			const jobList = Object.keys(jobObject).map(key => ({ ...jobObject[key], uid: key,}));
			this.setState({ jobs: jobList, loading: false });
		} else {
			this.setState({ jobs: null, loading: false });
		}
	});
	}
	componentWillUnmount() {
		this.props.firebase.jobs().off();
	}

	onEditMessage = () => {

	};

	onRemoveMessage = uid => {
		// console.log(uid);
		// console.log(this.props.firebase.job(uid));
		this.props.firebase.job(uid).remove();
	};

	onChangeText = event => {
		console.log(this.state);
		this.setState({ [event.target.name]: event.target.value });
	};

	onCreateMessage = (event, authUser) => {
		var self = this;
		this.props.firebase.jobs().push({
			userId: authUser.uid,
			jobTitle: this.state.jobTitle,
			jobLocation: this.state.jobLocation,
			jobSummary: this.state.jobSummary,
			jobDescription: this.state.jobDescription,
			timestamp: 'timestamp',
			payRate: this.state.payRate,
			messages: "Placeholder",
		});
		this.setState({ text: '' });
		event.preventDefault();
	};

	render() {
		const { userId, jobTitle, jobLocation, jobSummary, jobDescription, timestamp, payRate, loading, jobs} = this.state;
		return (
			<AuthUserContext.Consumer>
			{authUser => (
			<div>
				{loading && <div>Loading ...</div>}

				{jobs ? (
						<MessageList onRemoveMessage={this.onRemoveMessage}
						onEditMessage={this.onEditMessage} messages={jobs} firebase={this.props.firebase}/>
					) : (
						<div>There are no messages ...</div>
				)}
				<br />
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
			</div>
			)}
			</AuthUserContext.Consumer>
		);

	}
}

const JobOuter = withFirebase(JobsBase);

const MessageList = ({ messages, firebase, onRemoveMessage }) => (
	<div>
		<Container><Row>
		{messages.map(message => (
			<Col xs={4} className="mt-3">
				<MessageItemWithFirebase key={message.uid} message={message} firebase={firebase} onRemoveMessage={onRemoveMessage}/>
			</Col>
		))}
		</Row></Container>
	</div>
	);

class MessageItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: '',
			message: '',
			currentUserId: '',
		}
	}
	componentDidMount() {
		var firebase = this.props.firebase;
		var job = this.props.message;
		console.log("this is firebase " + firebase);
		console.log(job.userId);
		var nice = '';
	 	firebase.user(job.userId).on('value', snapshot => {
			const userObject = snapshot.val();
			this.setState({currentUserId: !userObject? '' : job.userId, currentUser:  userObject["username"] });
			return !userObject ? '' : userObject["username"];
		})
		console.log(this.state.currentUser);
	}
	onApply = (event, authUser) => {
		console.log(this.state.message);
		var currentJob = this.props.message;
		// this.props.firebase.jobs().on('value', snapshot => {
		// 	const job = snapshot.val().key;
		// 	console.log(job);
		// })
		// var self = this;
		this.props.firebase.messages().push({
			from: authUser.uid,
			to: this.state.currentUserId,
			text: this.state.message,
			timestamp: Date.now(),
		});
		// console.log();
		// this.props.firebase.jobs().child('messages').push({
		// 		from: authUser.uid,
		// 		to: this.state.currentUser,
		// 		text: this.state.message,
		// 		timestamp: this.props.firebase.database.ServerValue.TIMESTAMP,
		// })
		// this.props.firebase.jobs().child('messages').push().setValue({
		// 			from: authUser.uid,
		// 			to: this.state.currentUser,
		// 			text: this.state.message,
		// 			timestamp:this.props.firebase.database.ServerValue.TIMESTAMP,
		// })
		// this.props.firebase.jobs().push({
		// 	messages:
		// })
		// console.log(this.props.firebase.jobs().child('messages').push({
		// 	from: authUser.uid,
		// }));
		// this.props.firebase.jobs().child('messages').push({
		// 	to: "rageeb",
		// });
		alert('Your Application has been submitted!');

		event.preventDefault();
	}
	onChangeText = (event) => {
		this.setState({message: event.target.value });
		console.log(this.state.message);
	}

	render() {
		var firebase = this.props.firebase;
		var job = this.props.message;

		// CSS-Stylings
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
		          <Modal.Title>{ job.jobTitle }</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
							<div>
								<span className="font-weight-bold">Poster: </span>
								<span>{ job.userId }</span>
							</div>

							<div>
								<span className="font-weight-bold">Location: </span>
								<span>{ job.jobLocation }</span>
							</div>

							<div>
								<span className="font-weight-bold">Posted: </span>
								<span>12/07/2019</span>
							</div>

							<div>
								<span className="font-weight-bold">Pay Rate: </span>
								<span>{ job.payRate }</span>
							</div>

							<div>
								<span className="font-weight-bold">Job Summary: </span>
								<span>{ job.jobSummary }</span>
							</div>

							<br />
							<p>
								<span className="font-weight-bold">Job Description: </span>
								<br />
								{ job.jobDescription }
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
			<AuthUserContext.Consumer>
				{authUser => (
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
								<span style={ payRate }>${ job.payRate }</span>
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
				)}
			</ AuthUserContext.Consumer>
		);
	}
}


			// from: authUser.uid,
			// to: this.state.currentUser,
			// text: this.state.message,
			// sentAt: this.props.firebase.serverValue.TIMESTAMP,

const MessageItemWithFirebase = withFirebase(MessageItem);

export default compose(
	withFirebase,
	withAuthentication,
	)(AllJobs);

/// Matthew Code

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

// TODO: Make this dynamic using props and state
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


// TODO: Use for loop to populate <JobPosting />s inside Container
export class Jobs extends React.Component {
	constructor(props){
		super(props);
	}
	render() {


		var items = [];
		for (var i = 0; i < 2; i++) {
			items.push(
				<Col xs={4} className="mt-3">
					<JobPosting />
				</Col>
			)
		}
		return (
			<div>
				<AllJobs />
				<JobHeader />

				<Container>
					<Row>
						{ items }
					</Row>
				</Container>
			</div>
		);
	}
}
