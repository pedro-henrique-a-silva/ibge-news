import { useContext, useState } from "react";
import NewsContext from "../context/NewsContext";
import Header from "../components/Header/Header";
import NewsGallery from "../components/NewsGallery/NewsGallery";
import { FilterWrapper, HighlightNewsWrapper } from './style';

const BASE_URL_IMAGES = "https://agenciadenoticias.ibge.gov.br/"

function Home() {
  const { news } = useContext(NewsContext);
  const [filterHighlight, setFilterHighlight] = useState(1);

  const highlightNews = news[0];

  const handleFilterHighlight = (filter: number) => {
    setFilterHighlight(filter);
  }

  if (!highlightNews) {
    return <div>Loading...</div>
  }

  
  return (
    <div>
      <Header />
      <HighlightNewsWrapper>
        <div>
          <img 
            src={`${BASE_URL_IMAGES}${JSON.parse(highlightNews.imagens as string).image_intro}`} 
            alt="" 
          />
        </div>
        <div>
          <h3>{highlightNews.titulo}</h3>
          <p>{highlightNews.introducao}</p>
          <a 
            href={highlightNews.link}
            target="_blank"
          >
            Leia a notícia aqui
          </a>
        </div>
      </HighlightNewsWrapper>
      <FilterWrapper filterHighlight={filterHighlight}>
        <button 
          onClick={() => handleFilterHighlight(1)}
        >
            Mais Recentes
        </button>
        <button 
          onClick={() => handleFilterHighlight(2)}
        >
          Releases
        </button>
        <button 
          onClick={() => handleFilterHighlight(3)}
        >
          Notícias
        </button>
        <button 
          onClick={() => handleFilterHighlight(4)}
        >
          Favoritos
        </button>
      </FilterWrapper>

      <NewsGallery news={news}/>
      

    </div>
  );
}

export default Home;
