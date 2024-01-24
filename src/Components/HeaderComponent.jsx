import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap';
class HeaderComponent extends React.Component {
    constructor() {
    super();

    // space for decelearing var and object 
    this.state = {
         linkStyle : {
            marginRight: '50px',
            textDecoration: 'none', // Remove underline
            color: 'black',         // Set text color
            cursor: 'pointer' ,   // Show pointer cursor on hover
            marginTop : "20px",
            marginBottom : "20px" 
      }
    }
}
    // methods
    render() { 
        return (
            <div>
            <Navbar bg="transparent"  variant="blue" style={{ border: '1px solid',  borderRadius: '40px', marginTop : "1px"   }}className="justify-content-end">
               <Link to="/" style={this.state.linkStyle}>Home  </Link>
           <Nav>
              <Link to="/about" style={this.state.linkStyle}>About</Link>
              <Link to="/contact" style={this.state.linkStyle}>Contact</Link>
              <Link to="/login" style={this.state.linkStyle}>Login</Link>
           </Nav>
    </Navbar>

    </div>
          );


    }
}
 
export default HeaderComponent;