import React from "react"; 

class HomeComponent extends React.Component {
    constructor() {
        super();
    }
    state = {  
        imageStyle : {
            marginRight: '50px',
            textDecoration: 'none', // Remove underline
            color: 'black',         // Set text color
            cursor: 'pointer' ,   // Show pointer cursor on hover
            marginTop : "20px",
            marginBottom : "20px",
        
          }
    }
    render() { 
        return ( 
            <div>
                {/* <img style={{ height: '300px', width: '500px'  }} src={BackgroundImage}/> */}
            </div>
         );
    }
}
 
export default HomeComponent;