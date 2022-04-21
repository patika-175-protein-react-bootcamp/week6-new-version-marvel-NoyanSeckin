import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { t } from 'i18next';

const hash = "438313238a66c5fa9402c3235820e596";

export default function CharacterDetail() {
  const {id} = useParams();
  const [characterDetails, setCharacterDetails] = useState([]);
  const loremText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis vero illo accusamus quam optio a. Non saepe, nam iusto distinctio eveniet eligendi assumenda molestiae ex aspernatur reiciendis nostrum! Enim.';
  async function fetchCharacterDetails(){
    const response = await axios(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=986efdb7820b2ac70e3a61e19ed53fba&hash=${hash}`);
    console.log(response.data.data.results)
    setCharacterDetails(response.data.data.results);
  }
  function renderCharacter(){
    if(characterDetails.length > 0){
      return characterDetails.map(character => {
        return(
          <div key={character.id} className='details-container'>
            <div className='detail-container'>
              <div className={"card-container"} >
                <div className={"card-horizontal-rule"}> </div>
                <img src={character.thumbnail.path + '/portrait_incredible.jpg'} className={"card-image"} alt="card" />
                <p className={"w-text card-text"}>{character.name}</p>
                <p style={{marginTop: 0}}  className={"w-text card-text"}>
                </p>
              </div>
              <div className='attributes-container'>
                <h3 className='attributes-header'>{t('description')}</h3>
                <p className='description-p'>{character.description || loremText } </p>
              </div>
            </div>
            <div className='series-stories-container'>
              <div className='series-container'>
                <h3 className='attributes-header'>{t('series')}</h3>
              {character.series.items.map(serie => {
                  return(
                    <div>
                      <p>{serie.name}</p>
                      <img src={serie.resource} alt="" />
                    </div>
                  )
                })}
              </div>
              <div className='stories-container'>
                <h3 className="attributes-header">{t('stories')}</h3>
                {character.stories.items.map(story => {
                  return(
                    <div>
                      <p>{story.name}</p>
                      <img src={story.resourceURI} alt="" />
                    </div>
                  )
                })}
              </div>
           </div>
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
