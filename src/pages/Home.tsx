import { useContext, useState } from 'react';
import NewsContext from '../context/NewsContext';
import Header from '../components/Header/Header';
import NewsGallery from '../components/NewsGallery/NewsGallery';
import { FilterWrapper, MainWrapper } from './style';
import { fetchAPIFiltered, fetchAPI } from '../utils/utils';
import HighlightNews from '../components/HighlightNews/HighlightNews';
import { NewsType } from '../types';
import MoreNews from '../components/MoreNews/MoreNews';

const FILTERS_NAME = {
  1: 'destaques',
  2: 'release',
  3: 'noticia',
  4: 'favoritos',
};

function Home() {
  const { news, updateNews } = useContext(NewsContext);
  const [favorites, setFavorites] = useState<NewsType[]>([]);
  const [filterHighlight, setFilterHighlight] = useState(1);

  const fetchNewsFiltered = async (tipo: string) => {
    const data = await fetchAPIFiltered(tipo, 10, 1);
    updateNews(data.items);
  };

  const fetchNews = async () => {
    const data = await fetchAPI(10, 1);
    updateNews(data.items);
  };

  const handleFilter = (filter: number) => {
    if (filter === 2 || filter === 3) {
      fetchNewsFiltered(FILTERS_NAME[filter]);
      setFilterHighlight(filter);
      return;
    }

    if (filter === 4) {
      const favoritesStorage = JSON
        .parse(localStorage.getItem('favoritesNews') as string) || [];

      setFavorites(favoritesStorage);
      setFilterHighlight(filter);
      return;
    }

    fetchNews();
    setFilterHighlight(filter);
  };

  const highlightNews = news[0];
  const msgNoResult = (filterHighlight === 4)
    ? 'Você ainda não possui favoritos'
    : 'Nenhum resultado encontrado';

  if (!highlightNews) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <MainWrapper>
        <HighlightNews highlightNews={ highlightNews } />
        <FilterWrapper filterHighlight={ filterHighlight }>
          <button
            onClick={ () => handleFilter(1) }
          >
            Mais Recentes
          </button>
          <button
            onClick={ () => handleFilter(2) }
          >
            Releases
          </button>
          <button
            onClick={ () => handleFilter(3) }
          >
            Notícias
          </button>
          <button
            onClick={ () => handleFilter(4) }
          >
            Favoritos
          </button>
        </FilterWrapper>
        { (favorites.length === 0 && filterHighlight === 4) && <p>{ msgNoResult }</p> }
        { filterHighlight !== 4 && <NewsGallery news={ news } /> }
        <MoreNews />
      </MainWrapper>

    </>
  );
}

export default Home;
