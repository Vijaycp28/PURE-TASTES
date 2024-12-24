import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../context/AppProvider'
function Checkout() {
  const cartPackage=useContext(stateContext)
  let cartItemsAre=cartPackage.cartItems.map((items)=>{
    console.log('cartpakage',items)  
     return(
      <li>
        <li className='img'>
             <img src={items.img} alt="" /> </li>
               <li className='h6'><h6>{items.title} </h6></li>
              <li className='button'> <button>CLick To Order</button></li></li>
              
        

         
     )
 })
  return (
    <div>
 <h1 style={{textAlign:"center",fontSize: "35px"}}>Check Out Page</h1>

    <div className='check-out-header'>
   <ul>
        {cartItemsAre}
        </ul>
    </div></div>
  )    
}

export default Checkout