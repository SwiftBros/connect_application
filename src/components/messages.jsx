import React, { Component } from 'react';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';
import { withFirebase } from '../Firebase';

class Messages extends Component {
	render() {
		return (
			<h1>Messages Section</h1>
		);
	}
} 