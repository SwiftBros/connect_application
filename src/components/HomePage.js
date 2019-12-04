import React from "react";
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem , Form, FormControl} from 'react-bootstrap';
import { Jumbotron, ButtonToolbar, Button, Container, Image } from 'react-bootstrap';
import Background from './images/front_cover.png';

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
      <div className="jumbotron jumbotron-fluid text-center text-white rounded-0" style={jumboImgBackground}>
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

// <div style={ jumboImgBackground }>
//   <Jumbotron fluid>
//     <Container>
//       <h1>Fluid jumbotron</h1>
//       <p>
//         This is a modified jumbotron that occupies the entire horizontal space of
//         its parent.
//       </p>
//     </Container>
//   </Jumbotron>
// </div>
// <Image src={require("./front_cover.png")} fluid />

export class HomePage extends React.Component {
	render() {
		return (
      <BannerJumbotron />
		);
	}
}
