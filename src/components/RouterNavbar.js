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

class RouterNavbar extends React.Component {
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
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">
            <li>
            <Link to="/">Home</Link>
            </li>
            </Nav.Link>
            <Nav.Link href="#link">
            <li>
            <Link to="/about">About</Link>
            </li>
            </Nav.Link>
            <Nav.Link href="#link">
            <li>
            <Link to="/jobs">Jobs</Link>
            </li>
            </Nav.Link>
            <Nav.Link href="#link">
            <li>
            <Link to="/topics">Topics</Link>
            </li>
            </Nav.Link>
            <Nav.Link href="#link">
            <li>
            <Link to="/topics">Login</Link>
            </li>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
            </Navbar>
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

export default RouterNavbar;
