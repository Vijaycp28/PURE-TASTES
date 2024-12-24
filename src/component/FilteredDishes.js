import React, { useContext, useState,useEffect } from 'react'
import Cards from './Cards'
import { AllMenuContext } from './AllMenuContext'
import Popup from './Popup'
function FilteredDishes() {
  let[menuCategory,setMenuCategory]=useState([])
  let[singleDish,setSingleDish]=useState([])
  let [filteredDishes,setFilteredDishes]=useState([])
  let [activeDish,setActiveDish]=useState()

  const allMenus=useContext(AllMenuContext)


  async function getMeansCategories(){
      let API_URL="https://www.themealdb.com/api/json/v1/1/categories.php"
     let respones= await fetch(API_URL)
     let categorie=await respones.json()
  setMenuCategory(categorie.categories)
 }
 async function getOnlyOneDesh(){
  let API_URL="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
 let respones= await fetch(API_URL)
 let singleDish=await respones.json()
 setSingleDish(singleDish.meals) 

}

  useEffect(()=>{
      getMeansCategories()
      getOnlyOneDesh()
  },[])
  

//popup
let [showPopup,setShowPopu]=useState(false)
let [currnetDish,setCurrentDish]=useState('')

function showPopupHandler(dishName){
 
  setCurrentDish(dishName)
  setShowPopu(true)
}
function closePopupHandler(){
  setShowPopu(false)
}


// show dishes on click
function showFilterDishesHandlers(categories){
setSingleDish([])
 
  setActiveDish(categories)
   const filteredDishesAre=allMenus.filter((items)=>{
  return items.strCategory === categories
}).map((items)=>{
  return(
  <Cards items={items}
  showPopup={showPopupHandler}/>
  )
})
setFilteredDishes(filteredDishesAre)
}



   let allcategoryData=menuCategory.map((item)=>{
        return(
            <li class={item.strCategory == activeDish  ? "active":""}>
            <h1 onClick={(()=>{
              showFilterDishesHandlers(item.strCategory)
            })}>{item.strCategory}</h1>
            </li>
        )
    })
    

  return (
    <div className='filtered-dishes'>
      {showPopup && <Popup 
       currnetDish={currnetDish}
      closePopup={closePopupHandler}/>}
      
      <div className="filtered-dishes-content text-center center">
                 <h2>Choose your dishes</h2>
                <p>From our exclusive selection of special recipes, each designed to delight your taste buds.</p>
            </div>
             <div className="container ">
                <div className="filtered-dishes-list  ">
                    <ul className='flex flex-wrap'>
                        {allcategoryData}
                    </ul>
                </div>
                
        </div>
        <div className="container ">
           <div className="filter-dishes">
             <ul className="flex flex-wrap gap-30">
                  {/* Render singleDishData first */}
                 
                  {filteredDishes.length !=1 ? filteredDishes :  
                  <div className="alert text-center">
                        <h2>Sorry, No items found</h2>
                        <h4>Please try another dishes</h4>
                      </div>
                 }
                </ul>
         
        </div>
    </div>
    </div>
  )
}

export default FilteredDishes