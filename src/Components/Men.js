import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import * as FaIcons from 'react-icons/bs';
import * as FaIcon from  'react-icons/md';
import * as FaIconi from 'react-icons/ai'

import 'bootstrap/dist/css/bootstrap.min.css';
const Men = () => {
    let history= useHistory();
    return (
        <>
             <div className="navbars">
            <Link to="#" className="menu-bars"> <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}}/></Link>
            <div className="name">
                    Men
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
          <div className="box" onClick={()=> {history.push("/Shop");}}>MEN POLO SHIRTS</div>
          <div className="box" onClick={()=> {history.push("/Shop");}}>MEN CASAUL SHIRTS</div>
      </div>
      <div className="block">
          <div className="box" onClick={()=> {history.push("/Shop");}}>MEN JEANS</div>
          <div className="box" onClick={()=> {history.push("/Shop");}}>MEN SHOES</div>
      </div>
      <div className="block">
          <div className="box" onClick={()=> {history.push("/Shop");}}>MEN SUNGLASSES</div>
          <div className="box" onClick={()=> {history.push("/Shop");}}></div>
      </div>
      </div>
        </>
    )
}

export default Men
