import React from 'react'
export default function Cards(props)  {
  const imageIsValid = (str) => {
    if(str.slice(-19) !== 'image_not_available'){
      return true
    } else return false;
  }
  return (
    <div className={"cards-container"}>
      {props.currentPage.characters?.map(character => {
          if(imageIsValid(character.thumbnail.path)){
            return(
              <div 
                className={"card-container"}
                >
                <div className={"card-horizontal-rule"}> </div>
                <img src={character.thumbnail.path + '/portrait_incredible.jpg'} className={"card-image"} alt="card" />
                <p className={"w-text card-text"}>{character.name}</p>
                <p style={{marginTop: 0}}  className={"w-text card-text"}>
                </p>
             </div>
            )
          }
      })}
    </div>
  )
}
