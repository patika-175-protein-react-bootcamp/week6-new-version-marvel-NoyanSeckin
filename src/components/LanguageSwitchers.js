import {React, useState} from 'react'
import i18next from 'i18next';

export default function LanguageSwitchers() {

  const [activeButton, setActiveButton] = useState('TR');

  function renderButtons(){
    const buttons = ['FR', 'EN', 'TR'];
    return buttons.map(btn => {
      return(
        <button key={btn} 
        onClick={()=> {setActiveButton(btn); i18next.changeLanguage(btn.toLowerCase())}} 
        className={`input-buttons ${activeButton === btn && 'active-button'}`}>{btn}</button>
      )
    })
  }
  return (
    <div className='as-end'>
     {renderButtons()}
    </div>
  )
}
