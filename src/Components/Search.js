import React from 'react'
import { FaSearch } from 'react-icons/fa';
import {Link, useHistory,} from 'react-router-dom'
import * as FaIcons from 'react-icons/bs';
import * as FaIcon from  'react-icons/md';
import * as FaIconi from 'react-icons/ai'
const Search = () => {
    let history= useHistory();
    return (
        <>
        <div>
                <div className="navbars">
            <Link to="#" className="menu-bars"> <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}} /></Link>
            <div className="name">
                    Search
                </div>
                 
                <div className="search">
                <FaIconi.AiOutlineSearch/>
                </div>
               <div className="cart">
               <FaIcon.MdShoppingCart/>
               </div>
       </div>
        </div>
        <div className="find">
            <div className="Fa">
            <FaSearch/>
            </div>
        
            <input type="text" placeholder="Search"/>
        </div>
        <div className="se1">
            <div className="so1">
                <img src="Images/pic3.jpg" alt="" />
                <div className="polo">
                <h4>Men Blazer</h4> 
                <p>0 Products</p>
                </div>
               
            </div>
            <div className="so1">
                <img src="Images/pic12.jpg" alt="" />
                <div className="polo">
                <h4>Girl</h4> 
                <p>0 Products</p>
                </div>
               
            </div>
            <div className="so1">
                <img src="Images/pic4.jpg" alt="" />
                <div className="polo">
                <h4>Men shirts</h4> 
                <p>0 Products</p>
                </div>
               
            </div>
            <div className="so1">
                <img src="Images/pic16.jpg" alt="" />
                <div className="polo">
                <h4>Men shoes</h4> 
                <p>0 Products</p>
                </div>
               
            </div>
            <div className="so1">
                <img src="Images/pic15.jpg" alt="" />
                <div className="polo">
                <h4>Girl shirts</h4> 
                <p>0 Products</p>
                </div>
               
            </div>
            <div className="so1">
                <img src="Images/pic11.jpg" alt="" />
                <div className="polo">
                <h4>Bedsheets</h4> 
                <p>0 Products</p>
                </div>
               
            </div>
            <div className="so1">
                <img src="Images/pic9.jpg" alt="" />
                <div className="polo">
                <h4>Women shirts</h4> 
                <p>0 Products</p>
                </div>
               
            </div>
            <div className="so1">
                <img src="Images/pic8.jpg" alt="" />
                <div className="polo">
                <h4>Men Jeans</h4> 
                <p>0 Products</p>
                </div>
               
            </div>
            <div className="so1">
                <img src="Images/pic7.jpg" alt="" />
                <div className="polo">
                <h4>Boy Polo shirts</h4> 
                <p>0 Products</p>
                </div>
               
            </div>
            <div className="so1">
                <img src="Images/pic18.jpg" alt="" />
                <div className="polo">
                <h4>Baby cloths</h4> 
                <p>0 Products</p>
                </div>
               
            </div>
        </div>
        </>
    )
}

export default Search
