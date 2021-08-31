import React from 'react'
import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

import {AiFillCheckCircle} from 'react-icons/ai'
import {useHistory } from 'react-router-dom';
import img from './Images/pic3.jpg'


const Categories = () => {
  let history= useHistory();
    return (
      
         
               <>
             
               <h3>Categories</h3>
               <Container  >
                 <Row className="downbox" >
    <Col   className="r"><img src="Images/pic3.jpg" alt="" onClick={()=> {history.push("/Men");}}/> <p>Men</p></Col>
    <Col   className="r"><img src="Images/pic15.jpg" alt="" onClick={()=> {history.push("/Women");}}/><p>WOMEN</p></Col>
    <Col   className="r"><img src="Images/pic18.jpg" alt="" onClick={()=> {history.push("/Girl");}}/><p>GIRL</p></Col>
    <Col   className="r"><img src="Images/pic7.jpg" alt="" onClick={()=> {history.push("/Boy");}}/><p>BOY</p></Col>
    <Col   className="r"><img src="Images/pic17.jpg" alt="" onClick={()=> {history.push("/Baby");}}/><p>BABY</p></Col>
    <Col  className="r"><img src="Images/pic11.jpg" alt="" onClick={()=> {history.push("/Home");}}/><p>HOME</p></Col>
   
   
    
  </Row>
  </Container>
  <h5>Brands</h5>
  <h5>Special</h5>
  <Container>
  <Row className="sbox">
    <Col className="redv"><AiFillCheckCircle/> <br /> View All</Col>
    </Row>
 
</Container>
  <h5>Most Like</h5>
  <Container>
  <Row className="sbox">
    <Col className="redv"><AiFillCheckCircle/> <br /> View All</Col>
    </Row>
 

</Container>

               </>
           

    )    

           
       
}

export default Categories
