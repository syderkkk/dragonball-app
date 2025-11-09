import { useState, useEffect } from 'react';
import { characterService } from '../services/characterService';

export const useCharacters = (page = 1, limit = 10, searchTerm = '', selectedRace = '') => {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      
      try {
        let result;
        
        if (searchTerm || selectedRace) {
          const arrayResult = await characterService.filterCharacters(searchTerm, selectedRace);
          result = {
            items: Array.isArray(arrayResult) ? arrayResult : [],
            meta: null
          };
        } else {
          result = await characterService.getAllCharacters(page, limit);
        }
        
        setData(result.items || []);
        setMeta(result.meta || null);
      } catch (err) {
        console.error('Error fetching characters:', err);
        setError('Error al cargar los personajes. Por favor, intenta nuevamente.');
        setData([]);
        setMeta(null);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchCharacters();
    }, searchTerm ? 500 : 0);

    return () => clearTimeout(timeoutId);
  }, [page, limit, searchTerm, selectedRace]);

  return { data, meta, loading, error };
};