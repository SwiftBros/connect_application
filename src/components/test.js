import React, { Component } from 'react';
import { FirebaseContext, withFirebase } from './Firebase';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  	console.log(this.props.firebase.db.ref('jobs').on('value', snapshot => {console.log(snapshot.val())}));
  	return (
  		<div>
  		<p>Testing Heavy</p>
  		</div>
  		);
  }
}

export const test = withFirebase(SignInFormBase);