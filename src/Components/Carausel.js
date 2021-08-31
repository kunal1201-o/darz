import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './Images/pic3.jpg'

const Carausel = () => {
    return (
        <div>
            <Carousel >
  <Carousel.Item>
  <img className="d-block w-100" src="Images/pic5.jpg" alt=""/>
     <Carousel.Caption>
      <h3>BACK-TO-SCHOOL COOL</h3>
      <p>Get them ready for the first day with casual shirts,jeans, sweaters and more</p>
      <button className="btni">SHOP NOW</button>
    </Carousel.Caption>
    
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src="Images/pic11.jpg"alt="" />
       <Carousel.Caption>
       <h3>LIGHT AND BRIGHT</h3>
      <p>Seasonal essentials perfect for enteraining indoors and out-in-cool white and rich cobalt hues</p>
      <button className="btni">Shop Bedding</button>
    </Carousel.Caption>

  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src="Images/pic16.jpg" alt="" />
 <Carousel.Caption>
 <h3>SUNNY DAY STAPLES</h3>
      <p>Mini must have for summer's picture-perfect moments</p>
      <button className="btni">Explore</button>
    </Carousel.Caption>
  
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Carausel
