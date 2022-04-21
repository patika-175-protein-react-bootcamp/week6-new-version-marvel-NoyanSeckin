import {React, useState, useEffect} from 'react'

import { NavLink } from "react-router-dom";
import {useTranslation} from 'react-i18next';

export default function SearchInput({characterNames, getDetailedCharacter}) {

  const {t, i18n} = useTranslation();

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");
  
  const onChange = (event) => {
    const userInput = event.target.value;
    const filteredItems = characterNames.filter(
      (suggestion) =>
        suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setInput(event.target.value);
    setFilteredSuggestions(filteredItems.sort());
    setShowSuggestions(true);
  };
  useEffect(() => {
    if(!input){
      setShowSuggestions(false);
    }else if(input){
      setShowSuggestions(true);
    }
  }, [input]);
  return (
    <div className='position-relative'>
      <label className='search-input-label'>{t('search_characters')}</label>
      <input type="text" className='search-input' placeholder={t('type_in_the_character_you_want_to_search')}
      value={input}
      onChange={(event)=> onChange(event)}/>
      <div className='suggestions-container'>
        {showSuggestions && filteredSuggestions.map(suggestion => {
          return(
              <NavLink key={suggestion.id} to={`characterdetail/${suggestion.id}`}>
                  <p className='suggestion-p'>
                    {t('character_name')}: {suggestion.name}
                  </p>
              </NavLink>
          )
        })}
      </div>
    </div>
  )
}

