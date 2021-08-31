import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import * as FaIcons from 'react-icons/bs';
import * as FaIcon from  'react-icons/md';
import * as FaIconi from 'react-icons/ai'

const Home = () => {
    let history= useHistory();
    return (
        <div>
           <div className="navbars">
            <Link to="#" className="menu-bars"> <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}}/></Link>
                 
                <div className="name">
                    Home
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
          <div className="box" onClick={()=> {history.push("/Shop");}}>BEDSHEETS</div>
          <div className="box" onClick={()=> {history.push("/Shop");}}>CURTAIN</div>
      </div>
      <div className="block">
          <div className="box" onClick={()=> {history.push("/Shop");}}>PILLOW</div>
          <div className="box" onClick={()=> {history.push("/Shop");}}>BLANKET</div>
      </div> 
      </div>   
        </div>
    )
}

export default Home
