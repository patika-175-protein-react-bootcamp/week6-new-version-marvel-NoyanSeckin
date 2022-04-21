import React from 'react'
import { NavLink } from "react-router-dom";
export default function Cards({characters})  {
  return (
    <div className={"cards-container"}>
      {characters?.map(character => {
            return(
              <NavLink key={character.name} to={`/characterdetail/${character.id}`}>
                <div className={"card-container"}>
                  <div className={"card-horizontal-rule"}> </div>
                  <img src={character.thumbnail.path + '/portrait_incredible.jpg'} className={"card-image"} alt="card" />
                  <p className={"w-text card-text"}>{character.name}</p>
                  <p style={{marginTop: 0}}  className={"w-text card-text"}>
                  </p>
               </div>
              </NavLink>
            )
      })}
    </div>
  )
}
