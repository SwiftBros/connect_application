

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem , Form, FormControl} from 'react-bootstrap';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Jobs }from './jobs';
import ConnectNavbar from './components/ConnectNavbar.js';

export default class App extends React.Component {
  render() {
    var navbarStyle = {
        // For navbar left-padding
        paddingInlineStart: 0,
    };
    return (
      <Router>
      <div>
        <div>
            <ul style={navbarStyle}>
                <ConnectNavbar />
            </ul>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/jobs">
            <Jobs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

// <link
// rel="stylesheet"
// href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
// integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
// crossorigin="anonymous"/>
class Home extends React.Component {
  componentDidMount() {
    console.log("JS CODE RUNNING ON HOME PAGE")
  }

  render() {
    return (
      <div>


      <h2>Home</h2>
      <Button variant="primary">Click</Button>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>HELLO WORLD</h1>
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
