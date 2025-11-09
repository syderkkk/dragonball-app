const SearchBar = ({ 
  searchTerm, 
  onSearchChange,
  selectedRace, 
  setSelectedRace, 
  handleClear,
  races 
}) => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="row g-3">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por nombre..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={selectedRace}
              onChange={(e) => setSelectedRace(e.target.value)}
            >
              <option value="">Todas las razas</option>
              {races.map((race, index) => (
                <option key={index} value={race}>
                  {race}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3">
            <button className="btn btn-outline-secondary w-100" onClick={handleClear}>
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;