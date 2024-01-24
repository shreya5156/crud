import React from "react";
import image1 from "../Resources/image-1.jpg";

class ImagesComponent extends React.Component {
    constructor() {
        super();
    }
    state = {  }
    render() { 
        const numberOfImages = 9;  // Change this value to the desired number of images
        const images = [];
    
        for (let i = 0; i < numberOfImages; i++) {
          images.push(
            <div key={i} className="col-md-4">
              <img
                src={image1}
                alt={`Image ${i + 1}`}
                className="img-fluid rounded"
                width="300"
                height="200"
                style={{marginBottom:"20px",marginTop:"20px",marginLeft:"5px",marginRight:"5px"}}
              />
            </div>
          );
        }
    
        return (
          <div className="container">
            <h2>Men Images</h2>
            <div className="row">
              {images}
            </div>
          </div>
        );
    }
}
 
export default ImagesComponent;