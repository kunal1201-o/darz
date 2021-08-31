import React from 'react'
import { FaUser } from 'react-icons/fa'


import {Link, useHistory} from 'react-router-dom'
import * as FaIcons from 'react-icons/io5';
import * as FaIcon from  'react-icons/md';
import * as FaIconi from 'react-icons/ai'
import Footer from './Footer';

const About = () => {
    let history= useHistory();
    return (
        <>
           <div className="navbars">
            <Link to="#" className="menu-bars"> <FaIcons.IoArrowBackOutline onClick={()=> {history.push("/");}} /></Link>
            <div className="name">
               About Us
            </div>
               
                 
                <div className="search">
                <FaIconi.AiOutlineSearch/>
                </div>
               <div className="cart">
               <FaIcon.MdShoppingCart/>
               </div>
       </div>
        <div className="pro">
            <div className="k">
            <FaUser/>
            </div>
           
            <p>About Derzi</p>
            <p>Derzi is free app to buy sell product to the user at best Price.</p>
        </div>
        <div className="v">
         
            <p>Privacy Polcies</p>
            <p>Refund Polcies</p>
            <p>Term and services</p>
        </div>
            <Footer/>
            
        </>
    )
}

export default About
