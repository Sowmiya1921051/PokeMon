import React from 'react'
import imageUrl from '../images/imageUrl.png'
const Cards =({pokemon,loading,infoPokemon})=> {

  // console.log(pokemon)

  return (

    <div>
    {loading ? (
        <div className="loading-container">
          <img className="loading-image" src={imageUrl} alt="Loading Pokemon" />
        </div>
      ) : (
        pokemon.map((item) => (
          <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
            <img className="img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`} alt="" />
          </div>
        ))
      )}
  </div>
  
  )
}

export default Cards