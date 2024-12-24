import React,{createContext, useReducer} from 'react'
const DispachContext=createContext()
const stateContext=createContext()

function AppProvider({children}) {
    const initalstate={
        cartItems : []
    }
    const reducer=(state,action)=>{
     
      
        switch (action.type){
          case 'add-to-cart':
            return{...state,cartItems:[...state.cartItems,action.payload],}
          default:{
            return state
          }

        }
    }
let[state,dispatch]=useReducer(reducer,initalstate)

  return (
    <DispachContext.Provider value={dispatch}>
        <stateContext.Provider value={state}>
          {children}
        </stateContext.Provider>
    </DispachContext.Provider>
  )
}

export{AppProvider,DispachContext,stateContext}