import React from 'react'
import { useHistory } from 'react-router-dom';

const LogIn = () => {
    let history= useHistory();
    return (
        <>
              <div className="navbars">
            <div to="#" className="menu-bars"onClick={()=> {history.push("/");}}  >+ Mobile Verfied otp</div>
            
                 
                 
               
       </div>
       <div className="imgLogo1">
                      <img src="Images/pic25.jpg" alt="" />
                  </div>
       <div className="in">
                  <input type="text" name="" id="" placeholder="Otp" />
                  <button>Verify</button>
                  <button>Resend</button>
                  </div>
        </>
    )
}

export default LogIn
