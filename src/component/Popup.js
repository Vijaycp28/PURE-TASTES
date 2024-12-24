import React, { useContext } from 'react'
import { AllMenuContext } from './AllMenuContext'
import { DispachContext } from '../context/AppProvider'

function Popup({closePopup,currnetDish,AddToCardHandler}) {
  const allMenus=useContext(AllMenuContext)
  const dispach=useContext(DispachContext)


let dishDetail=allMenus.filter((menuItem)=>{
  return menuItem.strMeal == currnetDish
}).map((item)=>{
  return(
    <div className="popup-content-inner">
      <div className="popup-header">
      <img src={item.strMealThumb} alt=''/>
     <h5 className='popup-header-category'>{item.strCategory}</h5>
     <h2>{currnetDish}</h2>
     
       </div> 
       
      <h1>{item.strMeal}</h1>
      <p className='dish-instruction'>{item.strInstructions}</p>
      <ul className='dish-ingredients flex'>
        <li>{item.strIngredient1}</li>
        <li>{item.strIngredient2}</li>
        <li>{item.strIngredient3}</li>
      </ul>
      <div className="price">
             <h3 className='popup-price'>Rs : 6,00.00</h3>
             <div className="order-now">
               {/* <button onClick={()=>{AddToCardHandler(item.strMealThumb,item.strMeal)}}>Order Now</button> */}
               <button onClick={()=>{dispach({type:"add-to-cart",payload:{img:item.strMealThumb,title:item.strMeal}})}}>Add to cart</button>
             </div>
          </div>
   
    </div>
  )
})
  return (
    <div className='popup'>
        <div className="popup-content">
          {dishDetail}

       
            <h5 className='popup-close' onClick={closePopup}>Close</h5>
        </div>


    </div>
  )
}

export default Popup