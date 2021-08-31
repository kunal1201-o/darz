import React from 'react'
import { TiHome } from "react-icons/ti";
import { MdShoppingBasket } from "react-icons/md";
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {IoSettingsSharp}from 'react-icons/io5'
import { useHistory } from 'react-router-dom';
const Footer = () => {
  let history= useHistory();
    return (
        <>
        <div className="navbarf">
                  <div className="menu-bars-h">
                  <TiHome onClick={()=> {history.push("/");}}/>
                  </div>
                <div className="menu-bars-h">
                <MdShoppingBasket onClick={()=> {history.push("/Shop");}}/>
                </div>
               <div className="menu-bars-h">
               <BsFillGrid3X3GapFill onClick={()=> {history.push("/Mutiple");}}/>
               </div>
               <div className="menu-bars-h">
               <IoSettingsSharp onClick={()=> {history.push("/Profile");}}/>
               </div>
            </div>
        </>
    )
}

export default Footer