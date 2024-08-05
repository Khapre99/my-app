import React, { useState } from 'react';
import EpisodesList from './components/EpisodesList';
import CharacterGrid from './components/CharacterGrid';
import './App.css';

function App() {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <div className="content">
        <div className="episodes">
          <EpisodesList 
            selectedEpisode={selectedEpisode} 
            onSelectEpisode={setSelectedEpisode} 
          />
        </div>
        <div className="characters">
          {selectedEpisode ? (
            <CharacterGrid episode={selectedEpisode} />
          ) : (
            <p>Select an episode to view characters</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
