import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMailBulk, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/io5';
import * as FaIcon from  'react-icons/md';
import * as FaIconi from 'react-icons/ai'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
 
  static defaultProps = {
    center: {
      lat: 25.61,
      lng: 85.12
    },
    zoom: 11
  };
  
  render() {
    return (
      // Important! Always set the container height explicitly
      <>
       <div className="navbars">
            <Link to="#" className="menu-bars"> <FaIcons.IoArrowBackOutline  /></Link>
            <div className="name">
               Contact Us
            </div>
               
                 
                <div className="search">
                <FaIconi.AiOutlineSearch/>
                </div>
               <div className="cart">
               <FaIcon.MdShoppingCart/>
               </div>
       </div>
      <div style={{ height: '50vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDw4_V5otQ81Ri9p-rhQ5HA8gebzszP38Q" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={25.611832}
            lng={85.126351}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      <div className="form">
          <div className="v">
        <FaMapMarkedAlt/> Patna Bihar <br />
        <FaMailBulk/> darzi0133@gmail.com <br />
        <FaPhoneAlt/> 9508291198 <br />
        </div>
        <div className="input">

        
        <input type="text" placeholder="Name" /> <br />
        <input type="email" name="" id="" placeholder="Email" /> <br />
        <input type="text" name="" id="" placeholder="Your Message"/> <br />
        </div>
       
            <button className="btno">Send</button>
       
      </div>
      </>
    );
  }
}

export default Contact;