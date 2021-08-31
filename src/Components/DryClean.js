import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import * as FaIcons from 'react-icons/bs';
import * as FaIcon from  'react-icons/md';
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import * as FaIconi from 'react-icons/ai'


import { FaFilter } from 'react-icons/fa';

const DryClean = () => {
    let history = useHistory();
    return (
        <div>
            <div className="navbars">
            <Link to="#" className="menu-bars"> <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}} /></Link>
            <div className="name">
               Dry Clean
            </div>
               
                 
                <div className="search">
                <FaIconi.AiOutlineSearch/>
                </div>
               <div className="cart">
               <FaIcon.MdShoppingCart/>
               </div>
       </div>
       <div className="text">
    No Product Available
</div>
            <div className="bt">
<button>Newest</button>
</div>
<div className="log">
<FaFilter/> <BsFillGrid3X3GapFill/>
</div>
        </div>
    )
}

export default DryClean
