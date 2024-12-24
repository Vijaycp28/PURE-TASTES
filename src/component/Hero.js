
import React from 'react'
import  {Link} from 'react-router-dom'
function Hero() {
  return (
    
    <div className='hero'> 
    <div className="nav-bar">
   
      <div className="nav-left">
      <ul className='flex'>
        <li>
          <h3>PURE TASTES</h3>
        </li>
      </ul>
      </div>
      <div className="nav-right">
        <ul className='flex'>
        <li><Link to="/PURE-TASTES">Home</Link></li>
        <li><Link to="/PURE-TASTES/checkout">checkout</Link> </li>  
        </ul>
      </div>
    </div>
        <img src='https://media.istockphoto.com/id/1390256994/photo/cooking-and-seasoning-ingredients-frame-on-dark-background-copy-space.jpg?s=2048x2048&w=is&k=20&c=ymuzayBdaHPO9Hj1I3jQFADmehabIDBG2rXw3Nyh7xk='alt=''/>
    <div className="hero-content">
    <h2>Its all about good food & taste</h2>
    <p> choose from our special dishes and experience a culinary journey like no other.</p>
    </div>
   </div>
  )
}

export default Hero