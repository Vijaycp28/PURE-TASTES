import SpecialDishes from "./SpecialDishes"
import Hero from "./Hero"
import FilteredDishes from "./FilteredDishes"
import {AllMenus} from './AllMenuContext'

import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Checkout from "./Checkout"
import {AppProvider} from "../context/AppProvider"
import Footer from "./Footer"



function Menu (){
return(
    <div>
<Router>
<AppProvider>
    <Hero/>  
<Switch>
<Route exact path="/">
    <AllMenus>      
       <SpecialDishes/> 
       <FilteredDishes/>  
    </AllMenus>
</Route>
<Route path="/checkout">
     <Checkout/>
</Route>
</Switch>
</AppProvider>
<Footer/>
</Router>

    </div>
)
}
export default Menu