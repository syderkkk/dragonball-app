import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';
import CharacterCard from '../components/CharacterCard';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const Home = () => {
  const { data, loading, error } = useCharacters(1, 8);

  return (
    <div className="container my-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <h1 className="display-3 fw-bold text-warning mb-3">
          Bienvenido al Universo Dragon Ball
        </h1>
        <p className="lead text-muted mb-4">
          Explora información detallada sobre tus personajes favoritos de la legendaria serie Dragon Ball
        </p>
        <Link to="/lista" className="btn btn-warning btn-lg px-5">
          Ver Todos los Personajes
        </Link>
      </section>

      {/* Personajes Destacados */}
      <section className="mt-5">
        <h2 className="text-center mb-4">Personajes Destacados</h2>
        
        {loading && <Loading />}
        {error && <ErrorMessage message={error} />}
        
        {!loading && !error && (
          <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-4">
              {data.slice(0, 8).map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
            
            <div className="text-center mt-4">
              <Link to="/lista" className="btn btn-outline-warning">
                Ver Listado Completo →
              </Link>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
