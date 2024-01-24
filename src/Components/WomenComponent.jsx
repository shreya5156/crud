import React from "react";
import image1 from "../Resources/image-1.jpg";
class WomenComponent extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }
    render() { 
        const numberOfImages = 15;
        const images = [];
    
        for (let i = 0; i < numberOfImages; i++) {
          images.push(
            <div key={i} className="col-md-4">
              <img
                src={image1}
                alt={`Image ${i + 1}`}
                className="img-fluid rounded"
                width="200"
                height="auto"
                style={{marginBottom:"10px",marginTop:"10px",marginLeft:"1px",marginRight:"1px", paddingRight:"10px"}}
              />
            </div>
          );
        }
    
        return (
          <div className="container">
            <h2>Women Images</h2>
            <div className="row">
              {images}
            </div>
          </div>
        );
    }
}
 
export default WomenComponent;