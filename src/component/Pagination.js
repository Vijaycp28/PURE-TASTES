import React from 'react'

function Pagination(props) {
    let numberOfPage=[]
    for(let i=1;i <=props.filteredDishess.lenght; i++){
      numberOfPage.push(i)
    }
    let page=numberOfPage.map((item)=>{
      return(
        <li>{item}</li>
      )
    })
  return (
    <section>
      <ul>
        {page}
        
      </ul>
    </section>
  )
}

export default Pagination