import React from "react";
class AboutComponent extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
              <p style={{textAlign : "center", background : "transparent", fontSize: "30px", fontFamily:"cursive"}}>
                    Hi! Myself Shreya.<br/>I am developing this project to practice Full stack 
                    which included Spring Boot, ReactJS and MongoDB.
                </p> 
            </div>
         );
    }
}
 
export default AboutComponent;