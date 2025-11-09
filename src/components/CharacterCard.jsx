const CharacterCard = ({ character }) => {
  return (
    <div className="col">
      <div className="character-card">
        <div className="character-card-image-wrapper">
          <img
            src={character.image}
            className="character-card-image"
            alt={character.name}
          />
        </div>
        <div className="character-card-content">
          <h3 className="character-name">{character.name}</h3>
          <p className="character-race">
            {character.race} - {character.gender}
          </p>
          
          <div className="character-stats">
            <div className="stat-item">
              <span className="stat-label">Base KI:</span>
              <span className="stat-value">{character.ki}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Total KI:</span>
              <span className="stat-value">{character.maxKi}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Affiliation:</span>
              <span className="stat-value">{character.affiliation}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;