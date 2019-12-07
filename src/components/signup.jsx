import React, { Component } from 'react';
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
		usertype: 'Youth',
		error: null,
	};


	class SignUpPage extends Component {
		render() {
			return (
				<div>
				<h1>SignUp</h1>
				<SignUpForm />
				<Admin />
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
		const { username, email, passwordOne, usertype } = this.state;
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
		} = this.state;

		const isInvalid =
		passwordOne !== passwordTwo ||
		passwordOne === '' ||
		email === '' ||
		username === '';

		return (

			<form onSubmit={this.onSubmit}>
			<input
			name="username"
			value={username}
			onChange={this.onChange}
			type="text"
			placeholder="Full Name"
			/>
			<input
			name="email"
			value={email}
			onChange={this.onChange}
			type="text"
			placeholder="Email Address"
			/>
			<input
			name="passwordOne"
			value={passwordOne}
			onChange={this.onChange}
			type="password"
			placeholder="Password"
			/>
			<input
			name="passwordTwo"
			value={passwordTwo}
			onChange={this.onChange}
			type="password"
			placeholder="Confirm Password"
			/>
			<p>User Type:</p>
			<div onChange={this.setUserType}>
			  <input type="radio" id="Youth" name="usertype" value="Youth" checked />
			  <label for="Youth">Youth</label>
			  <input type="radio" id="Client" name="usertype" value="Client" />
			  <label for="Client">Client</label>
			</div>
			<button  disabled={isInvalid} type="submit">Sign Up</button>
			{error && <p>{error.message}</p>}
			</form>
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