import { useContext } from "react"
import { stateContext } from "../context/AppProvider"


const AddToCard=({addtocartState})=>{

    const cartPackage=useContext(stateContext)
   

    let cartItemsAre=cartPackage.cartItems.map((items)=>{
       console.log('cartpakage',items)  
        return(
            <div>
                  <img src={items.img} alt=""  />
                  <h6>{items.title} </h6>
            </div>
            
        )
    })

    let addToCartResult=addtocartState.map((item)=>{
        return(
                <div>
                {/* <img src={item.img} alt=""  />
                <h6>{item.title} </h6> */}
            </div>
        )
    })
    return(
        <div className="add-to-cart-wrapper">
            <div  className="add-to-cart-items">
                <h5>Your Cart</h5>
              {cartItemsAre}
        </div>
 </div>
           

    )
}
export default AddToCard