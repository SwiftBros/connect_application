

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem , Form, FormControl, Button} from 'react-bootstrap';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";
import RouterNavbar from './components/RouterNavbar.js';

export default class App extends React.Component {
  render() {
    return (
      <RouterNavbar />
    );
  }
}

// <link
// rel="stylesheet"
// href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
// integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
// crossorigin="anonymous"/>
