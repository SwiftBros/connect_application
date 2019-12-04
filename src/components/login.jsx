/* Do not remove the below comment from the file */
/* global gapi */

/* global gapi */
import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';


export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: false,
      user: '',
    }
    
  }

  loadGapiAndAfterwardsInitAuth() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
    script.defer = true;
    script.onload=this.initAuth;
    const meta = document.createElement("meta");
    meta.name="371285410561-otenjs002su6ilqa668goh68fjmcmped.apps.googleusercontent.com";
    // meta.content="%REACT_APP_GOOGLE_ID_OF_WEB_CLIENT%";
    document.head.appendChild(meta);
    document.head.appendChild(script);
}

  componentDidMount() {

    const successCallback = this.onSuccess.bind(this);
    this.loadGapiAndAfterwardsInitAuth();
    
    window.gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '371285410561-otenjs002su6ilqa668goh68fjmcmped.apps.googleusercontent.com',
      })

      // this.auth2.attachClickHandler(document.querySelector('#loginButton'), {}, this.onLoginSuccessful.bind(this))
		
      this.auth2.then(() => {
        console.log('on init');
        this.setState({
          isSignedIn: this.auth2.isSignedIn.get(),
        });
        var auth2 = window.gapi.auth2.getAuthInstance();
		if (auth2.isSignedIn.get()) {
		  var profile = auth2.currentUser.get().getBasicProfile();
		  var currProfile = profile.getName();
		  console.log('ID: ' + profile.getId());
		  console.log('Full Name: ' + profile.getName());
		  console.log('Given Name: ' + profile.getGivenName());
		  console.log('Family Name: ' + profile.getFamilyName());
		  console.log('Image URL: ' + profile.getImageUrl());
		  console.log('Email: ' + profile.getEmail());
		  this.setState({ user: currProfile});
		} else {
			console.log("failed");
		}
      });
    });    

    window.gapi.load('signin2', function() {
      // Method 3: render a sign in button
      // using this method will show Signed In if the user is already signed in
      var opts = {
        width: 200,
        height: 50,
        client_id: '371285410561-otenjs002su6ilqa668goh68fjmcmped.apps.googleusercontent.com',
        onSuccess: successCallback
      }
      gapi.signin2.render('loginButton', opts)
    })
  }

  componentDidUpdate() {
  	
  }

  onSuccess() {
    console.log('on success')
    this.setState({
      isSignedIn: true,
      err: null
    })
  }

  onLoginFailed(err) {
    this.setState({
      isSignedIn: false,
      error: err,
    })
  }

  getContent() {
    if (this.state.isSignedIn) {
      return <p>hello {this.state.user}, you're signed in </p>
    } else {
      return (
        <div>
          <p>You are not signed in. Click here to sign in.</p>
          <button id="loginButton">Login with Google</button>
        </div>
      )
    }
    
  }
  
  render() {
    return (      
      <div className="App">
        <header className="App-header">
          <h2>Sample App.</h2>
          {this.getContent()}           
        </header>
      </div>
    );
  }
}



// import React from 'react';
// import ReactDOM from 'react-dom';
// // import GoogleLogin from 'react-google-login';
// // or
// import { GoogleLogin } from 'react-google-login';


// const responseGoogle = (response) => {
//   console.log(response);
// }


// export class Login extends React.Component {
// 	constructor(props) {
// 	    super(props);
// 	    this.state = {
// 	        isSignedIn: false,
// 	    }
// 	}
// 	componentDidMount() {
// 		var self = this;
// 		window.gapi.load('auth2', () => {
// 		    this.auth2 = gapi.auth2.init({
// 		      client_id: '371285410561-otenjs002su6ilqa668goh68fjmcmped.apps.googleusercontent.com',
// 		    })
// 		})

// 		this.auth2.then(() => {
// 		    this.setState({
// 		      isSignedIn: this.auth2.isSignedIn.get(),
// 		    });
// 		});

// 		window.gapi.load('signin2', function() {
// 	      // render a sign in button
// 	      // using this method will show Signed In if the user is already signed in
// 	      var opts = {
// 	        width: 200,
// 	        height: 50,
// 	        onSuccess: self.onSuccess.bind(self),
// 	      }
// 	      gapi.signin2.render('loginButton', opts)
// 	    })
// 	}

// 	onSuccess() {
// 	  this.setState({
// 	    isSignedIn: true
// 	  })
// 	}

// 	getContent() {
// 	  if (this.state.isSignedIn) {
// 	    return <p>hello user, you're signed in </p>
// 	  } else {
// 	    return (
// 	      <div>
// 	        <p>You are not signed in. Click here to sign in.</p>
// 	        <button id="loginButton">Login with Google</button>
// 	      </div>
// 	    );
// 	  }
  
// 	}
// 	// render() {
// 	//     return (
// 	//       <div>
// 	// 	   <GoogleLogin
// 	// 	    clientId="371285410561-otenjs002su6ilqa668goh68fjmcmped.apps.googleusercontent.com"
// 	// 	    buttonText="Login"
// 	// 	    onSuccess={responseGoogle}
// 	// 	    onFailure={responseGoogle}
// 	// 	    cookiePolicy={'single_host_origin'}
// 	// 	  	/>
// 	//       </div>
// 	//     );
// 	// }
// 	render() {
// 		  return (
// 		    <div className="App">
// 		        <header className="App-header">
		    
// 		           {this.getContent()} 
// 		        </header>
// 		      </div>
// 		  );
// 	}

// }
