import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const Lista = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);
  const [itemsPerPage, setItemsPerPage] = useState(Number(searchParams.get('limit')) || 10);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedRace, setSelectedRace] = useState(searchParams.get('race') || '');
  
  const { data, meta, loading, error } = useCharacters(currentPage, itemsPerPage, searchTerm, selectedRace);

  useEffect(() => {
    const params = {};
    if (currentPage > 1) params.page = currentPage;
    if (itemsPerPage !== 10) params.limit = itemsPerPage;
    if (searchTerm) params.search = searchTerm;
    if (selectedRace) params.race = selectedRace;
    
    setSearchParams(params);
  }, [currentPage, itemsPerPage, searchTerm, selectedRace, setSearchParams]);

  useEffect(() => {
    if (searchTerm || selectedRace) {
      setCurrentPage(1);
    }
  }, [searchTerm, selectedRace]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleRaceChange = (value) => {
    setSelectedRace(value);
  };

  const handleClear = () => {
    setSearchTerm('');
    setSelectedRace('');
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (newLimit) => {
    setItemsPerPage(newLimit);
    setCurrentPage(1);
  };

  const allRaces = [
    'Saiyan', 'Human', 'Namekian', 'Majin', 'Frieza Race', 
    'Android', 'Jiren Race', 'God', 'Angel', 'Evil', 
    'Nucleico', 'Nucleico benigno', 'Unknown'
  ];

  const races = !searchTerm && !selectedRace && data.length > 0
    ? [...new Set(data.map((char) => char.race))]
    : allRaces;

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-warning">Listado de Personajes</h1>
      
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        selectedRace={selectedRace}
        setSelectedRace={handleRaceChange}
        handleClear={handleClear}
        races={races}
      />

      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <>
          {data.length === 0 ? (
            <div className="alert alert-info text-center">
              No se encontraron personajes con los filtros seleccionados
            </div>
          ) : (
            <>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4">
                {data.map((character) => (
                  <CharacterCard key={character.id} character={character} />
                ))}
              </div>

              {/* Mostrar paginación solo cuando no hay filtros activos */}
              {meta && !searchTerm && !selectedRace && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={meta.totalPages}
                  onPageChange={handlePageChange}
                  itemsPerPage={itemsPerPage}
                  onItemsPerPageChange={handleItemsPerPageChange}
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Lista;