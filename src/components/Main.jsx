import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Pokeinfo from './Pokeinfo';
import axios from 'axios';

function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokedex, setPokedex] = useState();
  const [offset, setOffset] = useState(0);

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  
  };

  const getPokemon = async (res) => {
    const pokemonData = await Promise.all(
      res.slice(0, 10).map(async (item) => {
        const result = await axios.get(item.url);
        // console.log(result.data)
        return result.data;
      })
    );

    setPokemon((prevState) => [...prevState, ...pokemonData]);
  };

  // const getPokemon = async (res) => {
  //   const pokemonData = await Promise.all(
  //    .map(async (item) => {
  //       const result = await axios.get(item.url);
  //       return result.data;
  //     })
  //   );

  //   setPokemon(pokemonData);
  // };


  useEffect(() => {
    pokeFun();
  }, [url]);

  const handleNextClick = () => {
    setPokemon([]);
    setOffset((prevOffset) => prevOffset + 10);
    setUrl(`https://pokeapi.co/api/v2/pokemon/?offset=${offset + 10}&limit=10`);
  };

  const handlePreviousClick = () => {
    setPokemon([]);
    setOffset((prevOffset) => prevOffset - 10);
    setUrl(`https://pokeapi.co/api/v2/pokemon/?offset=${offset - 10}&limit=10`);
  };

  return (
    <div>
      <p className='title'>PokeMon</p>
      <div className="output-container">
        <Pokeinfo data={pokedex} />
      </div>

      <div className='container'>

        <div className="top-container">
          <Cards pokemon={pokemon} loading={loading} infoPokemon={(poke) => setPokedex(poke)} />
          <div className="btn-group">
            {prevUrl && <button  className='btn-prev'onClick={handlePreviousClick}>Previous</button>}
            {nextUrl && <button className='btn-nxt' onClick={handleNextClick}>Next</button>}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Main;
