

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem , Form, FormControl, Button} from 'react-bootstrap';
import React, {Component} from "react";
import { withFirebase } from './components/Firebase';
import { AuthUserContext } from './components/Session';
import { withAuthentication } from './components/Session';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";
import Navigation from './components/Navigation.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authUser: null,
		};
	}
	componentDidMount() {
		this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
			authUser
			? this.setState({ authUser })
			: this.setState({ authUser: null });
		});
	}
	componentWillUnmount() {
		this.listener();
	}
	render() {
		return (
			<AuthUserContext.Provider value={this.state.authUser}>
			<Navigation />
			</AuthUserContext.Provider>
		);
	}
}

// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			authUser: null,
// 		};
// 	}
// 	componentDidMount() {
// 		this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
// 			authUser
// 			? this.setState({ authUser })
// 			: this.setState({ authUser: null });
// 		});
// 	}
// 	componentWillUnmount() {
// 		this.listener();
// 	}
// 	render() {
// 		return (
// 			<Navigation authUser={this.state.authUser} />
// 		);
// 	}
// }

// export default withFirebase(App);
export default withAuthentication(App);

// <link
// rel="stylesheet"
// href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
// integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
// crossorigin="anonymous"/>
