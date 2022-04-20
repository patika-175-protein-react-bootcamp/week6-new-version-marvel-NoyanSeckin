import {React, useState} from 'react'

import { NavLink } from "react-router-dom";


export default function SearchInput({characterNames, getDetailedCharacter}) {
  const [userSearch, setUserSearch] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");
  
  const onChange = (e) => {
    const userInput = e.target.value;

    const filteredItems = characterNames.filter(
      (suggestion) =>
        suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(filteredItems.sort());
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };
  
  return (
    <div className='position-relative'>
      <label className='search-input-label'>Karakter Ara</label>
      <input type="text" className='search-input' placeholder='Aramak istediğiniz karakteri yazınız'
      value={input}
      onChange={(event)=> onChange(event)}/>
      <div className='suggestions-container'>
        {filteredSuggestions.map(suggestion => {
          return(
              <NavLink key={suggestion.id} to={`characterdetail/${suggestion.id}`}>
                  <p className='suggestion-p'>Karakter Adı: {suggestion.name}
                  </p>
              </NavLink>
          )
        })}
      </div>
    </div>
  )
}

