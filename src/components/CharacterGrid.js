import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CharacterGrid.css';

function CharacterGrid({ episode }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const characterUrls = episode.characters;
      const characterPromises = characterUrls.map(url => axios.get(url));
      const characterResponses = await Promise.all(characterPromises);
      setCharacters(characterResponses.map(res => res.data));
    };

    if (episode) {
      fetchCharacters();
    }
  }, [episode]);

  return (
    <div className="character-grid">
      {characters.map(character => (
        <img key={character.id} src={character.image} alt={character.name} />
      ))}
    </div>
  );
}

export default CharacterGrid;
