import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import * as FaIcons from 'react-icons/bs';
import * as FaIcon from  'react-icons/md';


const Cart = () => {
    let history= useHistory();
    return (
        <div>
                 <div className="navbars">
            <Link to="#" className="menu-bars"> <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}}/></Link>
                 
            <div className="name">
                Cart
                </div>
              
               <div className="cart">
               <FaIcon.MdShoppingCart/>
               </div>
       </div>
       <div className="cartL">
           <div className="imgCa">
           <FaIcon.MdShoppingCart/>
           </div>
           
           <h4>Your Cart is empty</h4>
           <button onClick={()=> {history.push("/Shop");}}>Expore</button>
       </div>

        </div>
    )
}

export default Cart
