import {React, useState} from 'react'
export default function LanguageSwitchers() {

  const [activeButton, setActiveButton] = useState('TR');

  function renderButtons(){
    const buttons = ['FR', 'EN', 'TR'];
    return buttons.map(btn => {
      return(
        <button key={btn} onClick={()=> setActiveButton(btn)} className={`input-buttons ${activeButton === btn && 'active-button'}`}>{btn}</button>
      )
    })
  }
  return (
    <div className='as-end'>
     {renderButtons()}
    </div>
  )
}
