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
          <p onClick={() => setPage(1)} className={`number ${page === pages.at(1) && "active-number"}`}>{pages.at(1)}</p>
          <p onClick={() => setPage(2)} className={`number ${page === pages.at(2) && "active-number"}`}>2</p>
          <p onClick={() => setPage(3)} className={`number ${page === pages.at(3) && "active-number"}`}>3</p>
          <p onClick={() => setPage(4)} className={`number ${page === pages.at(4) && "active-number"}`}>4</p>
          <p className={`number`}>...</p>
          <p onClick={() => setPage(200)} className={`number`}>{pages.at(-1)}</p>
          <img className='arrow' src={require('./images/arrow-right.png')} alt="arrow-left" onClick={()=> changePage("forward")}/>
       </div>
      )
    }
    
    if(page >= 5 && page < 197){
      return(
       <div className={"navigation-container"}>
          <img className='arrow' src={require('./images/arrow-left.png')} alt="arrow-left" onClick={()=> changePage("backward")}/>
          <p onClick={() => setPage(1)}  className='number'>{pages.at(1)}</p>
          <p className='number'>...</p>
          <p onClick={() => setPage(page - 1)}  className='number'>{page-1}</p>
          <p className='number active-number'>{page}</p>
          <p onClick={() => setPage(page + 1)}  className='number'>{page + 1}</p>
          <p className='number'>...</p>
          <p onClick={() => setPage(200)}  className='number'>{pages.at(-1)}</p>
          <img className='arrow' src={require('./images/arrow-right.png')} alt="arrow-left" onClick={()=> changePage("forward")}/>
       </div>
      )
    }
    if(page <= 197 && page < 199){
      return(
        <div className={"navigation-container"}>
          <img className='arrow' src={require('./images/arrow-left.png')} alt="arrow-left" onClick={()=> changePage("backward")}/>
          <p onClick={() => setPage(1)} className={`number ${page === pages.at(1) && "active-number"}`}>1</p>
          <p className={`number`}>...</p>
          <p onClick={() => setPage(196)} className={`number ${page === pages.at(196) && "active-number"}`}>196</p>
          <p onClick={() => setPage(197)} className={`number ${page === pages.at(197) && "active-number"}`}>197</p>
          <p onClick={() => setPage(198)} className={`number ${page === pages.at(198) && "active-number"}`}>198</p>
          <p onClick={() => setPage(199)} className={`number ${page === pages.at(199) && "active-number"}`}>199</p>
          <p onClick={() => setPage(200)} className={`number ${page === pages.at(200) && "active-number"}`}>200</p>
       </div>
      )
    }
    if(page >= 198){
      return(
        <div className={"navigation-container"}>
          <img className='arrow' src={require('./images/arrow-left.png')} alt="arrow-left" onClick={()=> changePage("backward")}/>
          <p onClick={() => setPage(1)} className={`number ${page === pages.at(1) && "active-number"}`}>1</p>
          <p className={`number`}>...</p>
          <p onClick={() => setPage(198)} className={`number ${page === pages.at(198) && "active-number"}`}>198</p>
          <p onClick={() => setPage(199)} className={`number ${page === pages.at(199) && "active-number"}`}>199</p>
          <p onClick={() => setPage(200)} className={`number ${page === pages.at(200) && "active-number"}`}>200</p>
       </div>
      )
    }
  }
  return (
    <div className={"nav-wrapper"}> 
      {renderPaginator()}
    </div>
  )
}
