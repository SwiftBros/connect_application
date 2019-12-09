import React, { Component } from 'react';
import { compose } from 'recompose';
import { withAuthentication, AuthUserContext } from './Session';
import { withFirebase } from './Firebase';

var currUser = '';

class Messages extends Component {
	render() {
		return (
			<div>
			<h1>Messages Section</h1>
			<AllMessages />
			</div>
			);
	}
}


class MessagesBase extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			loading: false,
			messages: [],
			currentUser: '',
		};
	}
	componentDidMount() {
		var self = this;
		currUser = this.props.firebase.auth["W"];
		this.setState({currentUser: self.props.firebase.auth["W"]});
		console.log(this.props.firebase.auth["W"]);
		console.log(currUser);
		this.setState({ loading: true, currentUser: currUser });
		console.log(this.state);
		var items = [];
		// console.log(authUser.uid);
		this.props.firebase.messages().on('value', snapshot => {
			// items.push(snapshot.val()) ? snapshot.val().child('from') == authUser.uid : console.log("not it");
			const messageObject = snapshot.val();
			if (messageObject) {
			// convert messages list from snapshot
			const messageList = Object.keys(messageObject).map(key => ({ ...messageObject[key], uid: key,}));
			this.setState({ messages: messageList, loading: false });
		} else {
			this.setState({ messages: null, loading: false });
		}
	});
	console.log(items);
	}
	componentWillUnmount() {
		this.props.firebase.messages().off();
	}

	onEditMessage = (message, text) => {
		const { uid, ...messageSnapshot } = message;
		this.props.firebase.message(message.uid).set({
		...messageSnapshot,
		text,
		});
	};

	onRemoveMessage = uid => {
		this.props.firebase.message(uid).remove();
	};

	onChangeText = event => {
		this.setState({ text: event.target.value });
	};
	onCreateMessage = (event, authUser) => {
		this.props.firebase.messages().push({
			text: this.state.text,
			userId: authUser.uid,
		});
		this.setState({ text: '', currentUser: authUser.uid });
		event.preventDefault();
	};
	// setCurrentUser = (authUser) => {
	// 	this.setState({
	// 		currentUser: authUser.uid,
	// 	})
	// }

	render() {
		console.log(this.state);
		const { text, messages, loading, currentUser } = this.state;
		return (
			<AuthUserContext.Consumer>
			{authUser => (
				// currUser = authUser.uid,
			<div>
			{ loading && <div>Loading ...</div>}
			{messages ? (
				<MessageList messages={messages} onEditMessage={this.onEditMessage} onRemoveMessage={this.onRemoveMessage}/>
				) : (
				<div>There are no messages ...</div>
				)}
				<form onSubmit={event => this.onCreateMessage(event, authUser)}>
				<input
				type="text"
				value={text}
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

const MessageList = ({ messages, onRemoveMessage, onEditMessage }) => (
	<ul>
	{messages.map(message => (
		<MessageItem key={message.uid} message={message} onEditMessage={onEditMessage} onRemoveMessage={onRemoveMessage} />
		))}
	</ul>
	);

// const MessageItem = ({ message, onRemoveMessage }) => (
//
// 	<li>
// 	<strong>{message.userId}</strong> {message.text}
// 	<button
// 		type="button"
// 		onClick={() => onRemoveMessage(message.uid)}
// 		>
// 		Delete
// 	</button>
// 	</li>
// 	);

class MessageItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: false,
			editText: this.props.message.text,
		};
	}

	onToggleEditMode = () => {
		this.setState(state => ({
		editMode: !state.editMode,
		editText: this.props.message.text,
		}));
	};
	onChangeEditText = event => {
		this.setState({ editText: event.target.value });
	};

	onSaveEditText = () => {
		this.props.onEditMessage(this.props.message, this.state.editText);
		this.setState({ editMode: false });
	};
	render() {
		const { message, onRemoveMessage } = this.props;
		const { editMode, editText } = this.state;
		return (
		<li>
		{editMode ? (
			<input
			type="text"
			value={editText}
			onChange={this.onChangeEditText}
			/>
			) : (
			<span>
			<strong>{message.userId}</strong> {message.text}
			</span>
		)}
		<span>
		<strong>{message.userId}</strong> {message.text}
		</span>
		{editMode ? (
				<span>
				<button onClick={this.onSaveEditText}>Save</button>
				<button onClick={this.onToggleEditMode}>Reset</button>
				</span>
				) : (
				<button onClick={this.onToggleEditMode}>Edit</button>
		)}
		{!editMode && (
		<button
		type="button"
		onClick={() => onRemoveMessage(message.uid)}
		>
		Delete
		</button>
		)}
		</li>
		);
	}
}

const AllMessages = withFirebase(MessagesBase);


export default compose(
	withFirebase,
	withAuthentication,
	)(Messages);
