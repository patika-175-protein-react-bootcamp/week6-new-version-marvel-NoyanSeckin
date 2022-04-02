import { render } from '@testing-library/react';
import React from 'react'

export default function Pagination({page, setPage}) {
  const changePage = (action) => {
    if(typeof action === 'number'){
      console.log("action iz num");
    }
    else if(typeof action === 'string'){
      action === "backward" && setPage(page - 1);  
      action === "forward" && setPage(page + 1) ;
    }
  }
  const checkActiveClass = (num, arr) => {
    // arr.forEach(number => {
    //   if(num)
    // })
  }
  const renderPaginator = () => {
    let pages = [];
    for(let i=0; i <= 200; i++){
      pages.push(i);
    }
    if(page < 5){
      return(
       <div className={"navigation-container"}>
          <p className='number'>{pages.at(1)}</p>
          <p onClick={(e)=> console.log(e) } className='number'>2</p>
          <p className='number'>3</p>
          <p className='number'>4</p>
          <p className='number'>...</p>
          <p className='number'>{pages.at(-1)}</p>
          <img className='arrow' src={require('./images/arrow-right.png')} alt="arrow-left" onClick={()=> changePage("forward")}/>
      </div>
      )
    }
    if(page >= 5){
      return(
       <div className={"navigation-container"}>
          <img className='arrow' src={require('./images/arrow-left.png')} alt="arrow-left" onClick={()=> changePage("backward")}/>
          <p className='number'>{pages.at(1)}</p>
          <p className='number'>...</p>
          <p className='number'>{page-1}</p>
          <p className='number active-number'>{page}</p>
          <p className='number'>{page + 1}</p>
          <p className='number'>...</p>
          <p className='number'>{pages.at(-1)}</p>
          <img className='arrow' src={require('./images/arrow-right.png')} alt="arrow-left" onClick={()=> changePage("forward")}/>
       </div>
      )
    }
   return pages.map(page => {
     return (<p>{page}</p>)
      
    }

  )
  }
  return (
    <div className={"nav-wrapper"}> 
      {renderPaginator()}
    </div>
  )
}
