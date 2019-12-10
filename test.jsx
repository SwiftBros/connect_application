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
  <Route path="/profile" component={test} />
  <Route path="/jobs" component={Jobs} />
  <Route path="/login" component={SignInPage} />
  <Route path="/signup" component={SignUpPage} />
  </Switch>
  </div>
  </Router>

  );
