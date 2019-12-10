import React from 'react';
import { withFirebase } from './Firebase';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {Button} from 'react-bootstrap';

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
			<Button className="float-right" onClick={this.onClicked}>
			Sign Out
			</Button>
			);
	}
}

// const SingoutButton = SignOutButtonClass({ firebase })

const SignOutButton = compose(withRouter, withFirebase)(SignOutButtonBase);
export default SignOutButton;
