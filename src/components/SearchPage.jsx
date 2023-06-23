// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchPage = () => {
//   const [pokemonName, setPokemonName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleInputChange = (event) => {
//     setPokemonName(event.target.value);
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError('');

//     axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
//       .then(response => {
//         setLoading(false);
//         setSearchResults([response.data]);
//       })
//       .catch(error => {
//         setLoading(false);
//         setError('Error occurred while searching for the Pokémon.');
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input type="text" value={pokemonName} onChange={handleInputChange} />
//         <button type="submit">Search</button>
//       </form>

//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}

//       <div>
//         {searchResults.map(pokemon => (
//           <div key={pokemon.id}>
//             <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//             <p>{pokemon.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchPage;
