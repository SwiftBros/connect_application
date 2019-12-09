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
		this.props.firebase.messages().push({
			from: authUser.uid,
			to: this.state.currentUserId,
			text: this.state.message,
			timestamp: Date.now(),
		});
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
		return (
			<AuthUserContext.Consumer>
			{authUser => (
			<div>
			<li>
			<strong>{job.userId}</strong>-
			<strong>{job.jobTitle}</strong>-
			<strong>{job.jobLocation}</strong>-
			<strong>{job.jobSummary}</strong>-
			<strong>{job.jobDescription}</strong>-
			<strong>{job.payRate}</strong>-
			<strong>The person who posted this job is
			{
				' ' + this.state.currentUser
			}
			</strong>
			<button
			type="button"
			onClick={() => this.props.onRemoveMessage(this.props.message.uid)}
			>
			Delete
			</button>
			<form onSubmit={event => this.onApply(event, authUser)}>
			<input
			type="text"
			name="message"
			placeholder="Enter message"
			value={this.state.message}
			onChange={this.onChangeText}
			/>
			<button type="submit">Send</button>
			</form>
			</li>
			</div>
		)}
			</ AuthUserContext.Consumer>
		);
	}
}
