import React, { useState } from 'react';
import '../styles/GameCatalog.css';

function GameCard({ title, description, image }) {
  // Estado para favorito
  const [isFavorited, setIsFavorited] = useState(false);

  // Função para alternar o estado de favorito
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="game-card">
      <img src={image} alt={title} className="game-image" />
      <h3 className="game-title">{title}</h3>
      <p className="game-description">{description}</p>
      
      {/* Botão de Favorito */}
      <button 
        onClick={toggleFavorite}
        className={`favorite-button ${isFavorited ? 'favorited' : ''}`}>
        {isFavorited ? 'Remover +Favoritos' : 'Adicionar +Favoritos'}
      </button>
    </div>
  );
}

export default GameCard;
