import React from "react";
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem , Form, FormControl} from 'react-bootstrap';
import { Jumbotron, ButtonToolbar, Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import Background from './images/front_cover.png';
import Network from './images/network.png';
import Security from './images/security.png';
import ProfessionalDev from './images/prof_dev.png';
import Partner from './images/partner.png';
import { Link, withRouter } from 'react-router-dom';


class BannerJumbotron extends React.Component {
  constructor(props) {
      super(props);
  }

  redirect = () => {
      this.props.history.push('/signup');
  }
  render() {
    var jumboImgBackground = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundAttachment: "fixed",
        width: "100%",
        height: "700px",
    };

    return (
      <div className="jumbotron jumbotron-fluid text-center text-white rounded-0 mb-0" style={jumboImgBackground}>
        <h1 style={{textShadow: '3px 3px #000000', fontSize: '50px'}} className="mt-4 pt-4">Giving youths a headstart on career development</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <ButtonToolbar>
            <Button variant="info" onClick={this.redirect} className="mt-3 mr-5">I'm a Youth</Button>
            <Button variant="info" onClick={this.redirect} className="mt-3 ml-5">I'm a Client</Button>
          </ButtonToolbar>
        </div>
      </div>
    )
  }
}

const BannerJumbotronRouter = withRouter(BannerJumbotron)

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

        <Row className="mt-3">
          <Col xs={12} md={4}>
            <Card border="white" style={{ height: '500px' }}>
              <div class='img-fluid mx-auto'>
                <Image src={Network} style={{ width: 'auto', height: '200px'}}fluid />
              </div>
              <Card.Body>
                <Card.Title style={{ fontSize: '26px' }} className="text-info mt-5">Network Opportunities</Card.Title>
                <Card.Text>
                  A platform for teenagers to connect to professionals in their industries of interest
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card border="white" style={{ height: '500px' }}>
            <div class='img-fluid mx-auto'>
              <Image src={Security} style={{ width: 'auto', height: '200px'}}fluid />
            </div>
              <Card.Body>
                <Card.Title style={{ fontSize: '26px' }} className="text-info mt-5">Security</Card.Title>
                <Card.Text>
                  We take authentication
                  seriously. Each recruiter
                  submitting a post must be
                  verified and go through a
                  background check.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card border="white" style={{ height: '500px' }}>
            <div class='img-fluid mx-auto'>
              <Image src={ProfessionalDev} style={{ width: 'auto', height: '200px'}}fluid />
            </div>
              <Card.Body>
                <Card.Title style={{ fontSize: '26px' }} className="text-info mt-5">Professional Development</Card.Title>
                <Card.Text>
                  As a student, we want you
                  to explore different fields
                  and get paid for what you
                  love doing.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

class CallToAction extends React.Component {
  render() {
    return (
      <Jumbotron className="bg-info mb-0" fluid>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <Image src={Partner} fluid />
            </Col>

            <Col xs={12} md={4}>
              <Container className="bg-white">
                <Row>
                  <Col className="text-center">
                    <h1>Partner with us</h1>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p style={{ fontSize: '20px' }}>
                      Are you a recruiter or business owner
                      looking for talent? We want to work
                      with you so that you could leverage
                      Connect to its full potential and hire the
                      talent you need.
                    </p>
                  </Col>
                </Row>

                <Row className="text-center">
                  <Col>
                    <Button className="mb-4" variant="primary">GET INVOLVED</Button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="bg-light mt-0 pt-0">
        <footer className="footer">
          <Container style={{fontSize: '9px'}} fluid>
            <Row className="">
              <Col xs={10}>
                <div className="font-weight-bold text-info" style={{fontSize: '18px'}}>CONNECT</div>
              </Col>

              <Col xs={1}>
                <span>CONTACT US</span><br/>
                <span>+1 800 000 100</span><br/>
                <span>Help@Connect.com</span>
              </Col>

              <Col xs={1}>
                <span>ABOUT CONNECT</span><br/>
                <span>TERMS & CONDITIONS</span><br/>
                <span>PRESS INQUIRIES</span>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    )
  }
}

export class HomePage extends React.Component {
	render() {
		return (
      <div>
        <BannerJumbotronRouter />
        <Mission />
        <ValuePropositions />
        <CallToAction />
        <Footer />
      </div>
		);
	}
}
