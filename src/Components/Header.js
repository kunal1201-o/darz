import React,{useState} from 'react'
import * as FaIcons from 'react-icons/bs';
import * as FaIcon from  'react-icons/md';
import * as FaIconi from 'react-icons/ai'

import * as FaIconin from 'react-icons/io5'
import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SidebarData } from './SidebarData';
import {Link, useHistory} from 'react-router-dom'

import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const [sidebar , setSidebar] = useState(false);
    const showSidebar =()=>setSidebar(!sidebar);
    const logo= ()=>{
        document.querySelector('.bg-model').style.display='flex';
    }
    const Register=()=>{
        document.querySelector('.bg-box').style.display='flex';
    }
    const close=()=>{
        document.querySelector(".bg-model").style.display="none";
    }
    const closeo=()=>{
        document.querySelector(".bg-box").style.display="none";
    }
    let history=useHistory();
    
    return (
        <>
        <div className="navbars">
            <Link to="#" className="menu-bars"> <FaIcons.BsList onClick={showSidebar} /></Link>
                 
                 
                <div className="search">
                <FaIconi.AiOutlineSearch onClick={()=> {history.push("/Search");}}/>
                </div>
               <div className="cart">
               <FaIcon.MdShoppingCart onClick={()=> {history.push("/Cart");}}/>
               </div>
       </div>
       <nav className={sidebar ? 'nav-menu active' :'nav-menu'}>
               <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className="navbar-toggle">
                      
                 <div className="menu">
                 <h5>Menu </h5>
                 </div>
                 <div className="earth">
                 <FaIconin.IoEarth/>
                 </div>
                     
                
                     
                      
                  </li>
                  <div className="profile" >
                     <div className="pic">
                        <FaUserCircle onClick={logo}/>
                     </div>
                     <div className="des">
                         <h6>Login and Register</h6>
                         <p>Please Login and create account for free</p>
                     </div>
                 </div>
        
                 {SidebarData.map((item,index)=>{
                     return(
                         <>
                         <li key={index} className={item.cName}>
                             <Link to={item.path}  >
                                <span className="icon">{item.icon}</span> 
                                 <span>{item.title}</span>
                             </Link>
                         
                         </li>
                         </>
                     );
                 })}
                 </ul>
                 </nav>
                 <div className="bg-model">
               <div className="model-content">
               <div className="navbarsl">
            <div className="menu-bars"> 
            <div className="close" onClick={close}>
                + LogIn
            </div>
            
            </div>
           

                  </div>
                  <div className="imgLogo">
                      <img src="Images/pic25.jpg" alt="" />
                  </div>
                  <div className="in">
                  <input type="text" placeholder="Mobile Number" />
            <input type="password" name="" id="" placeholder="Password"/>
          <button>LogIn</button>
           <p>Forget-Password</p>
           <button onClick={Register}>Register Now</button>
            </div>
               </div>
            </div> 

            <div className="bg-box">
                <div className="bg-block">
                <div className="navbarsl">
            <div to="#" className=" menu-bars" >
                <div className="close" onClick={closeo}>
                  + Register
                </div>
                
                </div>
            </div>
            <div className="user">
            <FaUserCircle/>
            </div>
              
               <div className="in">
               <input type="text" placeholder="First Name" />
               <input type="text" placeholder="Last Name" />
               <input type="text" placeholder="Mobile" />
               <input type="email" placeholder="Email" />
               <input type="password" placeholder="Password" />
               <button onClick={()=> {history.push("/LogIn");}}>Register</button>
              
                </div>
            </div>
           </div>
            <Container>
            <Row className="upbox">
    <Col className="red" onClick={()=> {history.push("/");}}>READYMADE</Col>
    <Col className="red" onClick={()=> {history.push("/DryClean");}} >DRY CLEAN</Col>
    <Col className="red"onClick={()=> {history.push("/Tailor");}} >TAILOR</Col>
  </Row>
</Container>

        </>
    )
}

export default Header
