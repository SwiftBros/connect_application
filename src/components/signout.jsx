import React from 'react';
import { withFirebase } from './Firebase';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

// const SignOutButton = ({ firebase }) => (
// 	<button type="button" onClick={firebase.doSignOut}>
// 	Sign Out
// 	</button>
// 	);

// const properties = {firebase};

class SignOutButtonBase extends React.Component {
	constructor(props) {
		super(props);
	}
	onClicked = () => {
		this.props.firebase.doSignOut();
		this.props.history.push('/');
	}
	render() {
		return (
			<button type="button" onClick={this.onClicked}>
			Sign Out
			</button>
			);
	}
}

// const SingoutButton = SignOutButtonClass({ firebase })

const SignOutButton = compose(withRouter, withFirebase)(SignOutButtonBase); 
export default SignOutButton;