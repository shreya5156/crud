import React from "react";
import { Link } from "react-router-dom";

class BuyComponent extends React.Component {
    constructor() {
        super();
        this.state = { 
            LinkStyle : {
                marginTop:"70px" ,
                marginRight:"20px",
                fontSize:"150%",
                background:"transparent",
                color:'black',
                fontFamily:'cursive'
            }
         }
    }
    render() { 
        return ( 
        <div className="d-flex justify-content-around" style={this.state.LinkStyle}>
            <div><Link to="/kids" style={this.state.LinkStyle}>KIDS</Link></div>
            <div><Link to="/men" style={this.state.LinkStyle}>MEN</Link></div>
            <div><Link to="/women" style={this.state.LinkStyle}>WOMEN</Link></div>
      </div>
         );
    }
}
 
export default BuyComponent;