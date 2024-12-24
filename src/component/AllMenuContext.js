import React, { useEffect, useState } from "react"
import Loding from "./Loding"

export const AllMenuContext=React.createContext()

 export const AllMenus = (props)=>{
    let[menus,setMenus]=useState([])
     let[loding,setLoding]=useState(false)
    

    async function getMeansData(){
        setLoding(true)
        let API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let respones= await fetch(API_URL)
        let data=await respones.json()
      setMenus(data.meals)
        setLoding(false)
        
      
    }
    
    
        useEffect(()=>{
            getMeansData()
        
        },[])
    return(
        <AllMenuContext.Provider value={menus}>
             {!loding ?  props.children : <Loding/>}
           
        </AllMenuContext.Provider>
    )
}