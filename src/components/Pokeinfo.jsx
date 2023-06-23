import React, { useState } from 'react';

function Pokeinfo({ data }) {
  console.log(data)
  // console.log(data.species)
  const [showAbilities, setShowAbilities] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showspecies, setShowspecies] = useState(false)
  const [showhabit, setShowhabit] = useState(false)

  const toggleAbilities = () => {
    setShowAbilities(!showAbilities);
    setShowStats(false);
    setShowspecies(false)
    setShowhabit(false)
  };

  const toggleStats = () => {
    setShowStats(!showStats);
    setShowAbilities(false);
    setShowspecies(false)
    setShowhabit(false)
  };

  const toggleSpecies = () => {
    setShowspecies(!showspecies);
    setShowAbilities(false);
    setShowStats(false)
    setShowhabit(false)
  };

  const togglehabit = () => {
    setShowhabit(!showhabit)
    setShowspecies(false);
    setShowAbilities(false);
    setShowStats(false)
  };


  return (
    <div className='poke-main'>

      {!data ? (
        ''
      ) : (
        <>
          <div className='data-container'>
            <img className='data-img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt={data.name} onClick={() => { setShowAbilities(false); setShowStats(false); }} />
            <p className='data-name'>{data.name}</p>

          </div>
          <div className="buttons">
            <button className='button' onClick={toggleAbilities}>Abilities</button>
            <button  className='button' onClick={toggleStats}>Group</button>
            <button  className='button' onClick={toggleSpecies}>Species</button>
            <button  className='button' onClick={togglehabit}>Habit</button>
          </div>
          {showAbilities && !showStats && !showspecies && !showhabit && (
            <div className="abilities">
              {data.abilities.map(poke => (
                <div className="group" key={poke.ability.name}>
                  <h3 className='ability-name'>{poke.ability.name}</h3>

                </div>
              ))}
            </div>
          )}

          {showStats && !showAbilities && !showspecies && !showhabit && (
            <div className="abilities">
              {data.stats.map(poke => (

                <h3 className='ability-name' key={poke.stat.name}>{poke.stat.name}: {poke.base_stat}</h3>
              ))}
            </div>
          )}

          {showspecies && !showStats && !showAbilities && !showhabit && (
            <div className="abilities">
              <h3 className='ability-name'>{data.species.name}</h3>
            </div>
          )}

          {showhabit && !showAbilities && !showspecies && !showStats && (
            <div className="abilities">
                {data.types.map(poke => (
                <div className="group" key={poke.type.name}>
                  <h3 className='ability-name'>{poke.type.name}</h3>

                </div>
              ))}
            </div>
          )}
        </>
      )}

    </div>
  );
}

export default Pokeinfo;
