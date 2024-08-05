import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EpisodeList.css';

function EpisodesList({ selectedEpisode, onSelectEpisode }) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode')
      .then(response => setEpisodes(response.data.results))
      .catch(error => console.error('Error fetching episodes:', error));
  }, []);

  return (
    <ul className="episode-list">
      {episodes.map(episode => (
        <li 
          key={episode.id}
          className={selectedEpisode?.id === episode.id ? 'selected' : ''}
          onClick={() => onSelectEpisode(episode)}
        >
          {episode.name}
        </li>
      ))}
    </ul>
  );
}

export default EpisodesList;
