import React, { useContext, useState } from 'react'
import Cards from './Cards'
import Popup from './Popup'
import { AllMenuContext } from './AllMenuContext'
import AddToCard from './AddToCart'

function SpecialDishes() {
let [showPopup,setShowPopu]=useState(false)
let [currnetDish,setCurrentDish]=useState('')
let [addtocartState,setAddToCart]=useState([])

// user context
const allMenus=useContext(AllMenuContext)
// popup card items
function showPopupHandler(dishName){
    setCurrentDish(dishName)
    setShowPopu(true)
}
//close popup handler
function closePopupHandler(){
    setShowPopu(false)
}
  
let SpecialDishesList=8
    let meals=allMenus.map((items,index)=>{
        
        if(index < SpecialDishesList){
                return(
             <Cards items={items}
             showPopup={showPopupHandler}/>
        ) 
        }
        
   
    })

    //Add to cart
    function AddToCardHandler(strMealThumb,strCategory){
        setAddToCart([
            ...addtocartState,
            {
            "img":strMealThumb,
            "title":strCategory
        }])
    }
    console.log(addtocartState)
  return (
    
    <section className='special-dishes'>
    {showPopup && <Popup
                    closePopup={closePopupHandler}
                    currnetDish={currnetDish}
                    AddToCardHandler={AddToCardHandler}
                    />}
                
        <div className="container">
            <AddToCard
            addtocartState={addtocartState}/>
            <div className="special-dishes-content text-center">
                 <h2>Our Special Dishes</h2>
                <p>Our Special Dishes category features a unique selection of flavorful and expertly prepared meals, each one crafted with the finest ingredients</p>
            </div>
            <div className="special-dishes-list">
                <ul className='flex flex-wrap gap-30'>
                     {meals}
                </ul>
            </div>
        </div>


        
    </section>
  )
}

export default SpecialDishes