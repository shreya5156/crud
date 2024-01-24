import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

class SellComponent extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }
    render() { 
        return (
            <div>
                 <form>  
              <center><div className="container" style={ { padding : 10,border: '1px solid',  borderRadius: '40px', width:' 500px', marginTop:'50px' }}>
                   <div className="dropdown" style={{ margin:"10px"}}>
                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Category</button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Kids</a></li>
                            <li><a className="dropdown-item" href="#">Men</a></li>
                            <li><a className="dropdown-item" href="#">Women</a></li>
                        </ul>
                    </div>
                   <label style={{ margin:"10px"}}>Kgs : </label>   
                   <input type= "number" className="form-control" style={{width: "400px" ,height: "30px"}}/>  
                   <label style={{ margin:"10px"}}>How many : </label>   
                   <input type= "number" className="form-control" style={{width: "400px" ,height: "30px"}} />  
                   <label style={{ margin:"10px"}}>Upload the photo : </label>   
                   <input type="file" className="form-control" accept=".jpg,.png"  />  
                   <button type="submit" classname="btn btn-outline" style={{margin:"10px"}} >See the price</button>     
                   <button type="button"  classname="btn btn-outline" style={{margin:"10px"}}> Cancel</button>   
               </div></center>
            </form>  
            </div>
          );
    }
}
 
export default SellComponent;