import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import {Link, useHistory} from 'react-router-dom'
import * as FaIcons from 'react-icons/bs';
import * as FaIcon from  'react-icons/md';
import * as FaIconi from 'react-icons/ai'
import Footer from './Footer';
const Profile = () => {
    let history= useHistory();
    return (
        <> 
          <div className="navbars">
            <Link to="#" className="menu-bars"> <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}}/></Link>
            <div className="name">
               Setting
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
            <FaUserCircle/>
            </div>
           
            <p>Login and Resgister</p>
            <p>Please Login or create account for free</p>
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

export default Profile
