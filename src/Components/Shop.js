import React from 'react'

import {Link, useHistory} from 'react-router-dom'
import * as FaIcons from 'react-icons/bs';
import * as FaIcon from  'react-icons/md';
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import * as FaIconi from 'react-icons/ai'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFilter } from 'react-icons/fa';

const Shop = () => {
    let history= useHistory();
    return (
        <>
            <div className="navbars">
            <Link to="#" className="menu-bars"> <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}} /></Link>
            <div className="name">
               Shop
            </div>
               
                 
                <div className="search">
                <FaIconi.AiOutlineSearch/>
                </div>
               <div className="cart">
               <FaIcon.MdShoppingCart/>
               </div>
       </div>
       <Container>
            <Row className="upboxs">
    <Col className="red">All</Col>
    <Col className="red">MenPoloshirts</Col>
    <Col className="red">MenCasualShirts</Col>
    <Col className="red">MenJeans</Col>
    <Col className="red">MensShoes</Col>
    <Col className="red">Sunglasses</Col>
    <Col className="red">WomenDresses</Col>
    <Col className="red">WomenShirts</Col>
    <Col className="red">WomenJeans</Col>
    <Col className="red">WomenHandBags</Col>
    <Col className="red">NewBorn</Col>
    <Col className="red">BabyDresses</Col>
    <Col className="red">BabyDresses</Col>
    <Col className="red">BedRoom</Col>
    <Col className="red">BabyDresses</Col>
    <Col className="red">BabyDresses</Col>
  </Row>
</Container>
<div className="text">
    No Product Available
</div>
<div className="bt">
<button>Newest</button>
</div>
<div className="log">
<FaFilter/> <BsFillGrid3X3GapFill/>
</div>


        </>
    )
}

export default Shop
