import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import * as FaIcons from 'react-icons/bs';
import * as FaIcon from  'react-icons/md';
import * as FaIconi from 'react-icons/ai'
import Footer from './Footer';
const Mutiple = () => {
    let history= useHistory();
    return (
        <div>
               <div className="navbars">
            <Link to="#" className="menu-bars"> <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}} /></Link>
            <div className="name">
                    Category
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
          <div className="box" onClick={()=> {history.push("/Men");}}>MEN </div>
          <div className="box"onClick={()=> {history.push("/Women");}}>WOMEN</div>
      </div>
      <div className="block">
          <div className="box" onClick={()=> {history.push("/Boy");}}>BOY</div>
          <div className="box"onClick={()=> {history.push("/Girl");}}>GIRL</div>
      </div> 
      <div className="block" >
          <div className="box"onClick={()=> {history.push("/Baby");}}>BABY</div>
          <div className="box"onClick={()=> {history.push("/Home");}}>HOME</div>
      </div> 
      </div>
      <Footer/>
        </div>
    )
}

export default Mutiple
