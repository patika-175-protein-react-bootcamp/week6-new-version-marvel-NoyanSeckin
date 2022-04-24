import axios from 'axios'

import {React, useState, useEffect} from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Pagination from '../components/Pagination'
import SearchInput from '../components/SearchInput'
import LanguageSwitchers from '../components/LanguageSwitchers'

const hash = "438313238a66c5fa9402c3235820e596";
export default function Home() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [characterNames, setCharacterNames] = useState([]);
  const [detailedCharacter, setDetailedCharacter] = useState(null);
  // 
  function getDetailedCharacter(character){
    setDetailedCharacter(character);
    console.log(detailedCharacter)
  }
  const imageIsValid = (str) => {
    if(str.slice(-19) !== 'image_not_available'){
      return true
    } else return false;
  }

  const fetchMarvelApi = async() =>{
    const response = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=986efdb7820b2ac70e3a61e19ed53fba&hash=${hash}`);
    const recievedCharacters = response.data.data.results;
    const filteredRecievedCharacters = [];
    const recievedCharacterNames = [];
    // filter characters with broken images
    recievedCharacters.forEach(character => {
      // character id in the if statement belongs to a chr with broken img
      if(imageIsValid(character.thumbnail.path) && character.id !== 1010846){
        filteredRecievedCharacters.push(character);
        recievedCharacterNames.push({name: character.name, id: character.id});
      }
    })
    setCharacters(filteredRecievedCharacters);
    setCharacterNames(recievedCharacterNames);
    
  }

  useEffect(()=>{
    fetchMarvelApi()
  }, [])
  return (
    <div>
       <Header></Header>
        <div className='input-container'>
          <SearchInput getDetailedCharacter={getDetailedCharacter} characterNames={characterNames}></SearchInput>
          <LanguageSwitchers></LanguageSwitchers>
        </div>
        <Cards characters={characters}></Cards>
        <Pagination  page={page} setPage={setPage}></Pagination>
    </div>
  )
}
