// src/components/GameCatalog.js
import React from 'react';
import GameCard from './GameCard';
import '../styles/GameCatalog.css';
import '../styles/style.css';

function GameCatalog() {
  // Lista de jogos que queremos exibir
  const games = [
    {
      title: 'Dungeon Fighter',
      description: "Explorar dungeons assustadoras, encontrar tesouros, comprar itens mágicos poderosos, e desafiar as criaturas mais horríveis. Será que o seu grupo será capaz de derrotar o chefe final?",
      image: 'https://storage.googleapis.com/ludopedia-imagens-jogo/2c322_41543_m.png',
    },
    {
      title: 'When I Dream',
      description: 'Seja um espírito bondoso e ajude o Sonhador fornecendo dicas sobre o sonho antes que ele seja enganado pelos espíritos maldosos. Feche seus olhos e mergulhe em "When I Dream"!',
      image: 'https://storage.googleapis.com/ludopedia-imagens-jogo/e9ac9_86774.jpg',
    },
    {
        title: 'Magic Maze',
        description: 'Depois de terem todas sua posses roubadas, um mago, um guerreiro, um elfo e um anão são forçados a roubarem um shopping/labirinto mágico próximo para pegar todo o equipamento necessário para sua próxima aventura.',
        image: 'https://storage.googleapis.com/ludopedia-imagens-jogo/5e6ec_80662_m.jpg',
      },
    // Adicione outros jogos aqui
  ];

  return (
    <div className="catalog-container">
      {games.map((game, index) => (
        <GameCard 
          key={index}
          title={game.title} 
          description={game.description} 
          image={game.image}
        />
      ))}
    </div>
  );
}

export default GameCatalog;
