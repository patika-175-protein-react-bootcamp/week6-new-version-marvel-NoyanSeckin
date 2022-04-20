import React from 'react'

export default function Pagination({page, setPage}) {
  const changePage = (action) => {
    if(typeof action === 'number'){
      setPage(action);
    }
    else if(typeof action === 'string'){
      action === "backward" && setPage(page - 1);  
      action === "forward" && setPage(page + 1) ;
    }
  }
  // Create page nums within given range
  const generatePageNums = (arr, minRange, maxRange) => {
    const nums = arr.filter(page => page > minRange && page < maxRange );
    const numTags = nums.map(num => {
      return <p onClick={() => changePage(num)} className={`number ${page === num && "active-number"}`}>{num}</p>
    });
    return numTags;
  }
  const leftArrow = () =>{
    return <img className='arrow' src={require('../images/arrow-left.png')} alt="arrow-left" onClick={()=> {changePage("backward");}}/>;
  }
  const rightArrow = () => {
    return <img className='arrow' src={require('../images/arrow-right.png')} alt="arrow-right" onClick={()=> {changePage("forward");}}/>;
  }
  const threeDots = () =>{
    return <p className={`number`}>...</p>;
   }
  const page1 = () => {
    return <p onClick={() => changePage(1)} className={`number ${page === 1 && "active-number"}`}>1</p>;
  }
  const page200 = () => {
    return <p onClick={() => changePage(200)} className={`number`}>200</p>
  }
  const dynamicPage = (page, value) => {
   return <p onClick={() => changePage(page + value)}  className='number'>{page + value}</p>
  }
  const renderPaginator = () => {
    let pages = [];
    for(let i=0; i <= 200; i++){
      pages.push(i);
    }
    if(page < 5){
      return(
        <div className={"navigation-container"}>
          {generatePageNums(pages, 0, 5)}
          {threeDots()}
          {page200()}
          {rightArrow()}
       </div>
      )
    }
    if(page > 4 && page < 196){
       return(
       <div className={"navigation-container"}>
          {leftArrow()}
          {page1()}
          {threeDots()}

          {dynamicPage(page, -1)}
          <p className='number active-number'>{page}</p>
          {dynamicPage(page, 1)}
          
          {threeDots()}
          {page200()}
          {rightArrow()}
       </div>
      )
    }
    if(page > 195 && page < 200){
      return(
        <div className={"navigation-container"}>
          {leftArrow()}
          {page1()}
          {threeDots()}
          {generatePageNums(pages, 195, 200)}
          {page200()}
        </div>
      )
    }
    if(page > 197){
      return(
        <div className={"navigation-container"}>
          {leftArrow()}
          {page1()}
          {threeDots()}
          {generatePageNums(pages, 197, 201)}
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
