import React from 'react'

export default function Header() {
  return (
    <div>
      <img class="main-image" src={require('../images/main-image.png')} alt="marvel-heroes-pic" />
      <img class="marvel-logo" src={require('../images/marvel-logo.png')} alt="marvel-logo" />
    </div>
  )
}
