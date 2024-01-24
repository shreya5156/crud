import React from "react";
import image1 from "../Resources/Kids-1.jpg";
class KidsComponent extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }
    
    render() { 
        const numberOfImages = 15;  // Change this value to the desired number of images
        const images = [];
    
        for (let i = 0; i < numberOfImages; i++) {
          images.push(
            <div key={i} className="col-md-4">
              <img
                src={image1}
                alt={`Image ${i + 1}`}
                className="img-fluid rounded"
                width="400"
                height="auto"
                style={{marginBottom:"20px",marginTop:"20px",marginLeft:"5px",marginRight:"5px"}}
              />
            </div>
          );
        }
    
        return (
          <div className="container">
            <h2>Kids Images</h2>
            <div className="row">
              {images}
            </div>
          </div>
        );
    }
}
 
export default KidsComponent;