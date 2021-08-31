import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import * as FaIcons from 'react-icons/bs';
import * as FaIcon from  'react-icons/md';
import * as FaIconi from 'react-icons/ai'

const Girl = () => {
    let history= useHistory();
    return (
        <>
         <div className="navbars">
            <Link to="#" className="menu-bars"> <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}}/></Link>
            <div className="name">
                    Girl
                </div>
                 
                <div className="search">
                <FaIconi.AiOutlineSearch/>
                </div>
               <div className="cart">
               <FaIcon.MdShoppingCart/>
               </div>
       </div>
            
            <div className="bigblock">

          
      <div className="block">
          <div className="box" onClick={()=> {history.push("/Shop");}}>GIRL SHIRTS</div>
          <div className="box" onClick={()=> {history.push("/Shop");}}>GIRL SHORTS</div>
      </div>
      <div className="block">
          <div className="box" onClick={()=> {history.push("/Shop");}}>GIRL JEANS</div>
          <div className="box" onClick={()=> {history.push("/Shop");}}>GIRL SANDLE</div>
      </div> 
      </div>
        </>
    )
}

export default Girl
