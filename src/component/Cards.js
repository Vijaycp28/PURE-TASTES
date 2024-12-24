import React from 'react'

function Cards(props) {
  return (
       <li>
        <a className='card-items'  onClick={()=>{props.showPopup(props.items.strMeal)}}>
                <img src={props.items.strMealThumb} alt='' className='bd'/>
                <h1 className='text-center'>{props.items.strMeal}</h1>
      
                </a>
            </li>
             
 
  )
}

export default Cards