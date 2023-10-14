import { useContext, useState } from 'react';
import NewsContext from '../context/NewsContext';
import Header from '../components/Header/Header';
import NewsGallery from '../components/NewsGallery/NewsGallery';
import { FilterWrapper, HighlightNewsWrapper } from './style';
import ReadMoreButton from '../components/ReadMoreButton/ReadMoreButton';
import { fetchAPIFiltered, fetchAPI } from '../utils/fetchAPI';

const BASE_URL_IMAGES = 'https://agenciadenoticias.ibge.gov.br/';

const FILTERS_NAME = {
  1: 'destaques',
  2: 'release',
  3: 'noticia',
  4: 'favoritos',
};

function Home() {
  const { news, updateNews } = useContext(NewsContext);
  const [filterHighlight, setFilterHighlight] = useState(1);

  const fetchNewsFiltered = async (tipo: string) => {
    const data = await fetchAPIFiltered(tipo, 20, 1);
    updateNews(data.items);
  };

  const fetchNews = async () => {
    const data = await fetchAPI(20, 1);
    updateNews(data.items);
  };

  const handleFilter = (filter: number) => {
    if (filter === 2 || filter === 3) {
      fetchNewsFiltered(FILTERS_NAME[filter]);
      setFilterHighlight(filter);
      return;
    }

    if (filter === 4) {
      const favorites = JSON.parse(localStorage.getItem('favorites') as string) || [];

      if (favorites.length > 0) {
        updateNews(favorites);
      }
      setFilterHighlight(filter);
      return;
    }

    fetchNews();
    setFilterHighlight(filter);
  };

  const highlightNews = news[0];

  if (!highlightNews) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <HighlightNewsWrapper id="highlight-news">
        <div>
          <img
            src={ `${BASE_URL_IMAGES}${JSON
              .parse(highlightNews.imagens as string).image_intro}` }
            alt=""
          />
        </div>
        <div>
          <h3>{highlightNews.titulo}</h3>
          <p>{highlightNews.introducao}</p>
          <ReadMoreButton
            href={ highlightNews.link }
          >
            Leia a notícia aqui
          </ReadMoreButton>
        </div>
      </HighlightNewsWrapper>
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

      <NewsGallery news={ news } />

    </>
  );
}

export default Home;
