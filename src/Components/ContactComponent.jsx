import React from "react";

class ContactComponent extends React.Component {
    constructor() {
        super();
        this.state = { 
            contactStyle : {
                fontSize : 20,
                fontFamily:'-moz-initial',
                color:"black"
            }
         }
    }
    
    render() { 
        return ( 
            <div style={{textAlign:"center"}}>
                <h2>contact me</h2>
                <a href="mailto:10.26.shreya@gmail.com" style={this.state.contactStyle}>Email at: 10.26.shreya@gmail.com</a><br></br>
                <a href="tel:9113943104" style={this.state.contactStyle}>phone at:(+91) 9113943104</a>
            </div>
         );
    }
}
 
export default ContactComponent;