import LoginComponent  from "./Components/LoginComponent";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import RegisterComponent from "./Components/RegisterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import AboutComponent from "./Components/AboutComponent";
import ContactComponent from "./Components/ContactComponent";
import MainComponent from "./Components/MainComponent";
import KidsComponent from "./Components/KidsComponent";
import MenComponent from "./Components/MenComponent";
import WomenComponent from "./Components/WomenComponent";
import HomeComponent from "./Components/HomeComponent";
import BackgroundImage from "./Resources/bg-6.jpg"; 
import ImagesComponent from "./Components/ImagesComponent";
import BuyComponent from "./Components/BuyComponent";
import SellComponent from "./Components/SellComponent";


function App() {

  const customStyles = {
    width: 300, 
    color: 'black',
    padding: '10px',
    borderRadius: '5px',
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${BackgroundImage})`,  // Replace with the path to your image
    backgroundSize: 'cover',
    // backgroundColor: 'rgba(255,255,255,0.1)',
    backgroundPosition: 'top',
    height: '300vh',
   // marginTop : '10px',
    // filter: 'brightness(1)'
    position:"relative"
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adjust the alpha value for opacity
  };

  return (
    <div>
    <div style={backgroundImageStyle} class ="opacity-50"></div>
    <div style={overlayStyle}>
    <BrowserRouter>   
    <HeaderComponent />
      <Routes>
          < Route path="/" element={<MainComponent />}/>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/contact" element={<ContactComponent/>} />
          <Route path="/register" element={<RegisterComponent/>} />
          <Route path="/kids" element={<KidsComponent/>} />
          <Route path="/men" element={<MenComponent/>} />
          <Route path="/women" element={<WomenComponent/>} />
          <Route path="/images" element={<ImagesComponent/>}/>
          <Route path="/buy" element={<BuyComponent/>}/>
          <Route path="/sell" element={<SellComponent/>}/>
      </Routes>   
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
