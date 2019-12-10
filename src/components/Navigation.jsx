import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem , Form, FormControl, Button} from 'react-bootstrap';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Jobs } from './jobs.jsx';
import SignInPage from './login.jsx';
import { HomePage } from './HomePage.js';
import SignUpPage from './signup.jsx';
import SignOutButton from './signout.jsx';
import Messages from './messages.jsx';
import { AuthUserContext } from './Session';
import {test} from './test.js'

const Navigation = () => (
  <AuthUserContext.Consumer>
  {authUser =>
    authUser ? <NavigationAuth /> : <NavigationNonAuth />
  }
  </AuthUserContext.Consumer>
);

// const Navigation = ({ authUser }) => (
//   <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
//   );

class NavigationAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    }
  }

  onLoggedIn() {

  }
  render() {
      var navbarStyle = {
          // For navbar left-padding
          paddingInlineStart: 0,
        };
    return (
          <Router>
          <div>
          <div className="">
          <ul style={navbarStyle} className="mb-0">
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
          <Link className="text-info font-weight-bold" to="/">CONNECT</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link href="#link">
          <li>
          <Link className="text-dark" to="/profile">Profile</Link>
          </li>
          </Nav.Link>
          <Nav.Link href="#link">
          <li>
          <Link className="text-dark" to="/jobs">Jobs</Link>
          </li>
          </Nav.Link>
          <Nav.Link href="#link">
          <li>
          <Link className="text-dark" to="/messages">Messages</Link>
          </li>
          </Nav.Link>
          <Nav.Link className="btn btn-info ml-2" href="#link">
          <li>
          <Link className="text-light" to="/signout">Sign Out</Link>
          </li>
          </Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </Navbar>
          </ul>
          </div>

          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={test} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/messages" component={Messages} />
          <Route path="/signout" component={SignOutButton} />
          </Switch>
          </div>
          </Router>
    );
  }
}

      class NavigationNonAuth extends React.Component {

        render() {
        var navbarStyle = {
          // For navbar left-padding
          paddingInlineStart: 0,
        };
        return (
          <Router>
          <div>
          <div className="">
          <ul style={navbarStyle} className="mb-0">
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
          <Link className="text-info font-weight-bold" to="/">CONNECT</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

          <Nav.Link className="btn btn-primary" href="#link">
          <li>
          <Link className="text-light" to="/login">Login</Link>
          </li>
          </Nav.Link>
          <Nav.Link className="btn btn-info ml-2" href="#link">
          <li>
          <Link className="text-light" to="/signup">Sign Up</Link>
          </li>
          </Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </Navbar>
          </ul>
          </div>

          <Switch>
          <Route exact path="/" component={Home} />
          
          <Route path="/login" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          </Switch>
          </div>
          </Router>

          );
        }
    }
// const NavigationAuth = NavigationAuthClass();
// const NavigationNonAuth = NavigationNonAuthClass();

 // class NavigationAuth extends React.Component {
 //  render() {
 //    var navbarStyle = {
 //          // For navbar left-padding
 //          paddingInlineStart: 0,
 //        };
 //        return (
 //          <Router>
 //          <div>
 //          <div className="">
 //          <ul style={navbarStyle} className="mb-0">
 //          <Navbar bg="light" expand="lg">
 //          <Navbar.Brand href="#home">
 //          <Link className="text-info font-weight-bold" to="/">CONNECT</Link>
 //          </Navbar.Brand>
 //          <Navbar.Toggle aria-controls="basic-navbar-nav" />
 //          <Navbar.Collapse id="basic-navbar-nav">
 //          <Nav className="ml-auto">
 //          <Nav.Link href="#link">
 //          <li>
 //          <Link className="text-dark" to="/about">About</Link>
 //          </li>
 //          </Nav.Link>
 //          <Nav.Link href="#link">
 //          <li>
 //          <Link className="text-dark" to="/jobs">Jobs</Link>
 //          </li>
 //          </Nav.Link>
 //          <Nav.Link href="#link">
 //          <li>
 //          <Link className="text-dark" to="/topics">Topics</Link>
 //          </li>
 //          </Nav.Link>
 //          <Nav.Link className="btn btn-info ml-2" href="#link">
 //          <li>
 //          <Link className="text-light" to="/signout">Sign Out</Link>
 //          </li>
 //          </Nav.Link>
 //          </Nav>
 //          </Navbar.Collapse>
 //          </Navbar>
 //          </ul>
 //          </div>

 //          <Switch>
 //          <Route exact path="/" component={Home} />
 //          <Route path="/about" component={About} />
 //          <Route path="/jobs" component={Jobs} />
 //          <Route path="/topics" component={Topics} />
 //          <Route path="/signout" component={SignOutButton} />
 //          </Switch>
 //          </div>
 //          </Router>

 //          );
 //      }
 //    }

  // class NavigationNonAuth extends React.Component {
  // render() {
  //   var navbarStyle = {
  //         // For navbar left-padding
  //         paddingInlineStart: 0,
  //       };
  //       return (
  //         <Router>
  //         <div>
  //         <div className="">
  //         <ul style={navbarStyle} className="mb-0">
  //         <Navbar bg="light" expand="lg">
  //         <Navbar.Brand href="#home">
  //         <Link className="text-info font-weight-bold" to="/">CONNECT</Link>
  //         </Navbar.Brand>
  //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //         <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="ml-auto">
  //         <Nav.Link href="#link">
  //         <li>
  //         <Link className="text-dark" to="/about">About</Link>
  //         </li>
  //         </Nav.Link>
  //         <Nav.Link href="#link">
  //         <li>
  //         <Link className="text-dark" to="/jobs">Jobs</Link>
  //         </li>
  //         </Nav.Link>
  //         <Nav.Link href="#link">
  //         <li>
  //         <Link className="text-dark" to="/topics">Topics</Link>
  //         </li>
  //         </Nav.Link>
  //         <Nav.Link className="btn btn-primary" href="#link">
  //         <li>
  //         <Link className="text-light" to="/login">Login</Link>
  //         </li>
  //         </Nav.Link>
  //         <Nav.Link className="btn btn-info ml-2" href="#link">
  //         <li>
  //         <Link className="text-light" to="/signup">Sign Up</Link>
  //         </li>
  //         </Nav.Link>
  //         </Nav>
  //         </Navbar.Collapse>
  //         </Navbar>
  //         </ul>
  //         </div>

  //         <Switch>
  //         <Route exact path="/" component={Home} />
  //         <Route path="/about" component={About} />
  //         <Route path="/jobs" component={Jobs} />
  //         <Route path="/topics" component={Topics} />
  //         <Route path="/login" component={SignInPage} />
  //         <Route path="/signup" component={SignUpPage} />
  //         </Switch>
  //         </div>
  //         </Router>

  //         );
  //     }
  //   }

// <NavDropdown title="Dropdown" id="basic-nav-dropdown">
// <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
// <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
// <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
// <NavDropdown.Divider />
// <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
// </NavDropdown>
// </Nav>
// <Form inline>
// <FormControl type="text" placeholder="Search" className="mr-sm-2" />
// <Button variant="outline-success">Search</Button>
// </Form>
// </Navbar.Collapse>
// </Navbar>
// </ul>

// <Switch>
//   <Route exact path="/">
//     <Home />
//   </Route>
//   <Route path="/about">
//     <About />
//   </Route>
//   <Route path="/topics">
//     <Topics />
//   </Route>
//   <Route path="/jobs">
//     <Jobs />
//   </Route>
//   <Route path="/login">
//     <Login />
//   </Route>
// </Switch>
class Home extends React.Component {
  componentDidMount() {
    console.log("JS CODE RUNNING ON HOME PAGE")
  }

  render() {
    return (
      <HomePage />
      );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
      <h1>ABOUT PAGE</h1>
      </div>
      );
  }
}

// export class Jobs extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>This is the jobs page.</h1>
//         fadsf
//       </div>
//     );
//   }
// }

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
    <h2>Topics</h2>

    <ul>
    <li>
    <Link to={`${match.url}/components`}>Components</Link>
    </li>
    <li>
    <Link to={`${match.url}/props-v-state`}>
    Props v. State
    </Link>
    </li>
    </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
        the page that is shown when no topic is selected */}
        <Switch>
        <Route path={`${match.path}/:topicId`}>
        <Topic />
        </Route>
        <Route path={match.path}>
        <h3>Please select a topic.</h3>
        </Route>
        </Switch>
        </div>
        );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default Navigation;
