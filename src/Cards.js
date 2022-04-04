import React from 'react'
let adamWarlockImgWidth = "width: 225px";
let pStyleWithAka = "margin-bottom: 0";
let divStyleWithAka =
  "align-items: center; justify-content: end; flex-direction: column";
export default function Cards(props)  {
  // const renderCards =()=> {
  //   const currentPage = props.currentPage;
  //   console.log("props current", currentPage);
  //   currentPage.map(character => {
  //     console.log(character.name);
      
  //  })

  // }
  const imageIsValid = (str) => {
    if(str.slice(-19) !== 'image_not_available'){
      return true
    } else return false;
  }
  console.log(props.currentPage)
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
                  {/* character.aka && {character.aka} */}
                </p>
            </div>
            )
          }
      })}
    </div>
  )
}
