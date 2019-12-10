import React, { Component } from 'react';
import { Row, Col, Form, FormControl, Button, Container } from 'react-bootstrap';
import { FirebaseContext, withFirebase } from './Firebase';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
// import { Link } from 'react-router-dom';
// import * as ROUTES from '../../constants/routes';

// -----
class AdminPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			users:  [],
		};
	}
	componentDidMount() {

		// this.setState({ loading: true });
		// this.props.firebase.users().on('value', snapshot => {
		// 	this.setState({
		// 		users: snapshot.val(),
		// 		loading: false,
		// 	});
		// });
		this.setState({ loading: true });
		this.props.firebase.users().on('value', snapshot => {
			const usersObject = snapshot.val();
			const usersList = Object.keys(usersObject).map(key => ({
				...usersObject[key],
				uid: key,
			}));
			this.setState({
				users: usersList,
				loading: false,
			});
		});
	}
	componentWillUnmount() {
		this.props.firebase.users().off();
	}
	render() {
		const { users, loading } = this.state;
		return (
			<div>
			<h1>Admin</h1>
			{loading && <div>Loading ...</div>}
			<UserList users={users} />
			</div>
			);
	}
}


const UserList = ({ users }) => (
	<ul>
	{users.map(user => (
		<li key={user.uid}>
		<span>
		<strong>ID:</strong> {user.uid}
		</span>
		<span>
		<strong>E-Mail:</strong> {user.email}
		</span>
		<span>
		<strong>Username:</strong> {user.username}
		</span>
		<span>
		<strong>Usertype:</strong> {user.usertype}
		</span>
		<span>
		<strong>Messages:</strong> {user.messages}
		</span>
		</li>
		))}
	</ul>
);

const Admin = withFirebase(AdminPage);

	// -------

	const INITIAL_STATE = {
		username: '',
		email: '',
		passwordOne: '',
		passwordTwo: '',
		messages: [],
		usertype: 'Youth',
		error: null,
	};


	class SignUpPage extends Component {
		render() {
			return (
				<div>
				<h1 className="text-center">Sign Up</h1>
				<SignUpForm />
				</div>
				);
		}
	};

	// class SignUpFormBase extends Component {
// 	onSubmit = (event) => {
// 		const { username, email, passwordOne } = this.state;
// 		this.props.firebase
// 		.doCreateUserWithEmailAndPassword(email, passwordOne)
// 		.then(authUser => {
// 			this.setState({ ...INITIAL_STATE });
// 			this.props.history.push(ROUTES.HOME);
// 		})
// 		.catch(error => {
// 			this.setState({ error });
// 		});
// 		event.preventDefault();
// 	}
// }



class SignUpFormBase extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
	}
	onSubmit = event => {
		const { username, email, passwordOne, messages, usertype } = this.state;
		this.props.firebase
		.doCreateUserWithEmailAndPassword(email, passwordOne)
		.then(authUser => {
			// Create a user in your Firebase realtime database
			return this.props.firebase
			.user(authUser.user.uid)
			.set({
				username,
				email,
				usertype,
				messages,
			});
			this.props.history.push('/');
		})
		.then(() => {
			this.setState({ ...INITIAL_STATE });
			this.props.history.push('/');
		})
		.catch(error => {
			this.setState({ error });
		});
		event.preventDefault();
	}
	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}
	setUserType = (event) => {
		this.setState({usertype: event.target.value});
	}
	render() {
		console.log(this.state.usertype);
		const {
			username,
			email,
			passwordOne,
			passwordTwo,
			error,
			messages
		} = this.state;

		const isInvalid =
		passwordOne !== passwordTwo ||
		passwordOne === '' ||
		email === '' ||
		username === '';

		return (

			<Container>
				<Row>
					<Col xs={4}>
					</Col>

					<Col xs={4}>
					<Form onSubmit={this.onSubmit}>
						<Form.Group controlId="formUsername">
							<Form.Label>Username</Form.Label>
							<Form.Control
								name="username"
								value={username}
								onChange={this.onChange}
								type="text"
								placeholder="Full Name"
							>
							</Form.Control>
						</Form.Group>

						<Form.Group controlId="formEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								name="email"
								value={email}
								onChange={this.onChange}
								type="text"
								placeholder="Email Address"
							>
							</Form.Control>
						</Form.Group>

						<Form.Group controlId="formPasswordOne">
							<Form.Label>Password</Form.Label>
							<Form.Control
								name="passwordOne"
								value={passwordOne}
								onChange={this.onChange}
								type="password"
								placeholder="password"
							>
							</Form.Control>
						</Form.Group>

						<Form.Group controlId="formPasswordTwo">
							<Form.Label>Confirm password</Form.Label>
							<Form.Control
								name="passwordTwo"
								value={passwordTwo}
								onChange={this.onChange}
								type="password"
								placeholder="Confirm password"
							>
							</Form.Control>
						</Form.Group>

						<p>User Type:</p>
						<div onChange={this.setUserType}>
							<input type="radio" id="Youth" name="usertype" value="Youth" checked />
							<label for="Youth">&nbsp;Youth</label>
							<input className="ml-2" type="radio" id="Client" name="usertype" value="Client" />
							<label for="Client">&nbsp;Client</label>
						</div>
						<Button disabled={isInvalid} type="submit">Sign Up</Button>
						{error && <p>{error.message}</p>}
					</Form>
					</Col>

					<Col xs={4}>
					</Col>
				</Row>
			</Container>
			);
	}
}
// const SignUpLink = () => (
// 	<p>
// 	Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
// 	</p>
// 	);

// const SignUpForm = withRouter(withFirebase(SignUpFormBase));
const SignUpForm = compose(
	withRouter,
	withFirebase,
	)(SignUpFormBase);


	export default SignUpPage;
	export { SignUpForm };
