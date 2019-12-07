import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const devConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};



// const prodConfig = {
// 	apiKey: "AIzaSyBuaxz_RYGYU6LGYd4K84jcRn2Qr80M-2g",
//     authDomain: "connect-app-final-261019.firebaseapp.com",
//     databaseURL: "https://connect-app-final-261019.firebaseio.com",
//     projectId: "connect-app-final-261019",
//     storageBucket: "connect-app-final-261019.appspot.com",
//     messagingSenderId: "371285410561",
// };
// const devConfig = {
// 	apiKey: "AIzaSyBuaxz_RYGYU6LGYd4K84jcRn2Qr80M-2g",
//     authDomain: "connect-app-final-261019.firebaseapp.com",
//     databaseURL: "https://connect-app-final-261019.firebaseio.com",
//     projectId: "connect-app-final-261019",
//     storageBucket: "connect-app-final-261019.appspot.com",
//     messagingSenderId: "371285410561",
// };
// const prodConfig = {
// 	apiKey: "AIzaSyBuaxz_RYGYU6LGYd4K84jcRn2Qr80M-2g",
//     authDomain: "connect-app-final-261019.firebaseapp.com",
//     databaseURL: "https://connect-app-final-261019.firebaseio.com",
//     projectId: "connect-app-final-261019",
//     storageBucket: "connect-app-final-261019.appspot.com",
//     messagingSenderId: "371285410561",
// };

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;


class Firebase {
	constructor() {
		app.initializeApp(config);
		this.auth = app.auth();
		this.db = app.database();
	}
	// *** Auth API ***
	doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
	doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
	doSignOut = () => this.auth.signOut();
	doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
	doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
	// *** User API ***
	user = uid => this.db.ref(`users/${uid}`);
	users = () => this.db.ref('users');
}

// firebase.initializeApp(config);
// const dbRef = firebase.database().ref();
// export const jobsRef = dbRef.child("jobs/");

export default Firebase;
