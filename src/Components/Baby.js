import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import * as FaIcons from 'react-icons/bs';
import * as FaIcon from  'react-icons/md';
import * as FaIconi from 'react-icons/ai'
const Baby = () => {
    let history= useHistory();
    return (
        <>
           <div className="navbars">
            <Link to="#" className="menu-bars"> <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}} /></Link>
            <div className="name">
                    Baby
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
          <div className="box" onClick={()=> {history.push("/Shop");}}>BABY PAINT </div>
          <div className="box" onClick={()=> {history.push("/Shop");}}>BABY NET</div>
      </div>
      <div className="block">
          <div className="box" onClick={()=> {history.push("/Shop");}}>BABY CLOTHS</div>
          <div className="box" onClick={()=> {history.push("/Shop");}}>BABY BANKET</div>
      </div> 
      </div>
        </>
    )
}

export default Baby
