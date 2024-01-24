import React from "react";
import axios from "axios";

class RegisterComponent extends React.Component {
    constructor() {
        super();
        this.state = { 
            registerDetails : {
                firstName : "",
                lastName : "",
                mobileNumber : "",
                password : ""
            },
            res:""
         }
         this.handleInputChangeFormobileNumber = this.handleInputChangeFormobileNumber.bind(this);
         this.handleInputChangeForFirstName = this.handleInputChangeForFirstName.bind(this);
         this.handleInputChangeForlastName = this.handleInputChangeForlastName.bind(this);
         this.handleInputChangeForpassword = this.handleInputChangeForpassword.bind(this);
         this.sendRegisterRequest = this.sendRegisterRequest.bind(this); 
    }

    handleInputChangeForFirstName = (event) =>{
        this.state.registerDetails.firstName =  event.target.value ;
    }

    handleInputChangeForlastName = (event) =>{
        this.state.registerDetails.lastName =  event.target.value ;
    }

    handleInputChangeFormobileNumber = (event) =>{
        this.state.registerDetails.mobileNumber =  event.target.value ;
    }
    
    handleInputChangeForpassword = (event) =>
    {
        this.state.registerDetails.password = event.target.value;
    }

    sendRegisterRequest(event){
        event.preventDefault();
        console.log('Register API call start:');
        var RegisterReq = {
            firstName:  this.state.registerDetails.firstName,
            lastName : this.state.registerDetails.lastName,
            phoneNo : this.state.registerDetails.mobileNumber,
            password : this.state.registerDetails.password,

        }
        axios.post('http://localhost:8080/user/register',RegisterReq)
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
              <center><div className="container" style={ { padding : 10,border: '1px solid',  borderRadius: '40px', width:' 500px', marginTop:'50px' }} >   
                   <label>First Name : </label>   
                   <input type= "text" className="form-control" onChange={this.handleInputChangeForFirstName}  style={{width: "400px" ,height: "30px"}} />  
                   <br></br>
                   <label>Last Name : </label>   
                   <input type= "text" className="form-control"  onChange={this.handleInputChangeForlastName}  style={{width: "400px" ,height: "30px"}}/>  
                   <br></br>
                   <label>Mobile Number : </label>   
                   <input type= "text" className="form-control" onChange={this.handleInputChangeFormobileNumber}  style={{width: "400px" ,height: "30px"}} />  
                   <br></br>
                   <label>Password : </label>   
                   <input type="password" className="form-control" onChange={this.handleInputChangeForpassword}  style={{width: "400px" ,height: "30px"}}/>  
                   <br></br>
                   <button type="submit" className="btn btn-outline" style={{margin:"10px"}} onClick={this.sendRegisterRequest} >Register</button>     
                   <button type="button"  className="btn btn-outline" > Cancel</button>   
               </div></center>
            </form>   
       </div>
         );
    }
}
 
export default RegisterComponent;

