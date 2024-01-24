import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../Resources/bg-5.jpg'

class MainComponent extends React.Component{
    constructor() {
        super();
        this.state = { 
                floatStyle : {
                    margin: '0 auto',
                 marginBottom: '10px',
                 fontSize : '100',
                 width : '200',
                 fontSize : '500%',
                 textAlign : "center"
               },

               containerStyle: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              },
              buttonStyle: {
                marginBottom: '10px',
                fontSize: '200%', 
              }
         }
    }
     
render() {

return (
    <div style={this.state.containerStyle}>
        <p style={{textAlign : "center",fontSize : "250%", fontFamily:'serif'}}> 
    You can buy and sell clothes here!</p>
    <Link to="/buy" style={this.state.buttonStyle}>
  <button variant="outline-light">Buy</button>
  {/* img src={image1} style={{tabSize:'200'}}></img> */}
  </Link>
  <Link to="/sell" style={this.state.buttonStyle}>
  <button variant="outline-light" >Sell</button>
</Link>
    </div>
  );
    }
} 

export default MainComponent;