import React from "react";
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem , Form, FormControl} from 'react-bootstrap';
import { Jumbotron, ButtonToolbar, Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import Background from './images/front_cover.png';
import Network from './images/network.png';
import Security from './images/security.png';
import ProfessionalDev from './images/prof_dev.png';
import Partner from './images/partner.png';


class BannerJumbotron extends React.Component {
  render() {
    var jumboImgBackground = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundAttachment: "fixed",
        width: "100%",
        height: "800px",
    };

    return (
      <div className="jumbotron jumbotron-fluid text-center text-white rounded-0 mb-0" style={jumboImgBackground}>
        <h1 style={{textShadow: '3px 3px #000000'}} className="mt-5 pt-5">Giving youths a headstart on career development</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <ButtonToolbar>
            <Button variant="info" className="mt-3 mr-5">I'm a Youth</Button>
            <Button variant="info" className="mt-3 ml-5">I'm a Client</Button>
          </ButtonToolbar>
        </div>
      </div>
    )
  }
}

class Mission extends React.Component {
  render() {
    return (
      <Jumbotron fluid className="text-center">
        <Container>
          <h1 className="text-info">We believe in investing in the younger generation</h1>
        </Container>
      </Jumbotron>
    )

  }
}

// <Card.Img variant="top" src={Network} fluid/>
// <Card.Img variant="top" src={Security} fluid/>

class ValuePropositions extends React.Component {
  render() {
    return (
      <Container className="justify-content-center">
        <Row>
          <Col xs={12}>
            <h1 className="text-center">What We Offer</h1>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <Card style={{ width: '100%', height: '500px' }}>
              <div className='img-fluid'>
                <Image src={Network} fluid />
              </div>
              <Card.Body>
                <Card.Title>Network Opportunities</Card.Title>
                <Card.Text>
                  A platform for teenagers to connect to professionals in their industries of interest
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: '100%', height: '500px' }}>
            <div className='img-fluid'>
              <Image src={Security} fluid />
            </div>
              <Card.Body>
                <Card.Title>Security</Card.Title>
                <Card.Text>
                  We take authentication
                  seriously. Each recruiter
                  submitting a post must be
                  verified and go through a
                  background check.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: '100%', height: '500px' }}>
            <div className='img-fluid'>
              <Image src={ProfessionalDev} fluid />
            </div>
              <Card.Body>
                <Card.Title>Professional Development</Card.Title>
                <Card.Text>
                  As a student, we want you
                  to explore different fields
                  and get paid for what you
                  love doing.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export class HomePage extends React.Component {
	render() {
		return (
      <div>
        <BannerJumbotron />
        <Mission />
        <ValuePropositions />
      </div>
		);
	}
}
