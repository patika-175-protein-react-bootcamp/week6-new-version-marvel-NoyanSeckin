import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const hash = "438313238a66c5fa9402c3235820e596";

export default function CharacterDetail() {
  const {id} = useParams();
  const [characterDetails, setCharacterDetails] = useState([]);

  async function fetchCharacterDetails(){
    const response = await axios(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=986efdb7820b2ac70e3a61e19ed53fba&hash=${hash}`);
    console.log(response.data.data.results)
    setCharacterDetails(response.data.data.results);
  }
  function renderCharacter(){
    if(characterDetails.length > 0){
      return characterDetails.map(character => {
        return(
          <div className='detail-container'>
            <div className={"card-container"} >
              <div className={"card-horizontal-rule"}> </div>
              <img src={character.thumbnail.path + '/portrait_incredible.jpg'} className={"card-image"} alt="card" />
              <p className={"w-text card-text"}>{character.name}</p>
              <p style={{marginTop: 0}}  className={"w-text card-text"}>
              </p>
            </div>
            {/* <div className='attributes-container'>
              <h5>Description</h5>
              <p className='description-p'>{character.description}</p>
            </div> */}
         </div>
      )
    })
    }
  }
  useEffect(()=> {
    fetchCharacterDetails();
  }, [])
  return (
    <div className='container'>
      {renderCharacter()}
    </div>
  )
}
