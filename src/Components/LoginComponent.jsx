import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
class LoginComponent extends React.Component {
    constructor() {
    super();

    // space for decelearing var and object 
    this.state = {
          loginDetails : {
            mobileNumber : "",
            password : ""
          },
          res:"",
          loginstyle:{
            border: '1px solid',
            borderRadius: '40px',
            width:' 500px', 
            marginTop:'50px',
            padding:'10px'
          },
            inputstyle:{
              width: "400px",
              height: "30px"
            }
      }
        
      this.handleInputChangeForpassword = this.handleInputChangeForpassword.bind(this);
      this.handleInputChangeFormobilenumber = this.handleInputChangeFormobilenumber.bind(this);
      this.sendLoginRequest = this.sendLoginRequest.bind(this); 
    }

// space for writing methods
handleInputChangeFormobilenumber = (event) =>{
    this.state.loginDetails.mobileNumber =  event.target.value ;
}

handleInputChangeForpassword = (event) =>
{
    this.state.loginDetails.password = event.target.value;
}

sendLoginRequest(){

  console.log('API call start:');
  var LoginReq = {
    phNo : this.state.loginDetails.mobileNumber,
    pwd : this.state.loginDetails.password
  }
  axios.post('http://localhost:8080/user/login',LoginReq)
  .then(response => {
    console.log('Data from API:', response.data , response.status);
    this.state.res = response.data;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  })
}

    render() { 
        return (
            <div>
                 <form>  
                   <center><div  className="form-group" style={this.state.loginstyle}>   
                        <label style={{margin:"10px"}}>Mobile Number : </label>   
                        <input className="form-control" type= "text" onChange={this.handleInputChangeFormobilenumber} style={this.state.inputstyle} />  
                        <label style={{margin:"10px"}}>Password : </label>   
                        <input type="password" className="form-control" onChange={this.handleInputChangeForpassword} style={this.state.inputstyle}/> 
                        <button type="button" classname="btn btn-outline" style={{margin:"10px"}} onClick={this.sendLoginRequest}>Login</button>  
                        <button type="button" classname="btn btn-outline" style={{margin:"10px"}} > Cancel</button><br/>
                        <span style={{margin:"10px"}} >New User?</span><Link to="/register" textDecoration = "none" cursor= "pointer">Register here!</Link>
                        <p>{this.state.res}</p>
                    </div></center>
                 </form>
            </div>
          );
    }
}
 
export default LoginComponent;