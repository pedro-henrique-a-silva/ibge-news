import { useContext, useState } from 'react';
import NewsContext from '../context/NewsContext';
import Header from '../components/Header/Header';
import NewsGallery from '../components/NewsGallery/NewsGallery';
import { FilterWrapper, MainWrapper } from './style';
import { fetchAPIFiltered, fetchAPI, FILTERS_NAME } from '../utils/utils';
import HighlightNews from '../components/HighlightNews/HighlightNews';
import { NewsType } from '../types';
import MoreNews from '../components/MoreNews/MoreNews';

function Home() {
  const {
    news,
    updateNews,
    updatePagination,
  } = useContext(NewsContext);
  const [favorites, setFavorites] = useState<NewsType[]>([]);
  const [filterHighlight, setFilterHighlight] = useState(1);

  const handleFilter = async (filter: number) => {
    if (filter === 2 || filter === 3) {
      const data = await fetchAPIFiltered(FILTERS_NAME[filter], 10, 1);
      updateNews(data.items);
      setFilterHighlight(filter);
      updatePagination('beginWith2');
      return;
    }

    if (filter === 4) {
      const favoritesStorage = JSON
        .parse(localStorage.getItem('favoritesNews') as string) || [];

      setFavorites(favoritesStorage);
      setFilterHighlight(filter);
      return;
    }

    const data = await fetchAPI(10, 1);
    updateNews(data.items);
    setFilterHighlight(filter);
    updatePagination('beginWith2');
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
        { filterHighlight === 4 && <NewsGallery news={ favorites } /> }
        { filterHighlight !== 4 && <MoreNews filterHighlight={ filterHighlight } /> }

      </MainWrapper>

    </>
  );
}

export default Home;
