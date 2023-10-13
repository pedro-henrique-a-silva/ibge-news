import { useContext } from "react";
import NewsContext from "../context/NewsContext";
import Header from "../components/Header/Header";
import { FilterWrapper, HighlightNewsWrapper } from './style';

const BASE_URL_IMAGES = "https://agenciadenoticias.ibge.gov.br/"

function Home() {
  const { news } = useContext(NewsContext);

  const highlightNews = news[0];

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
          >
            Leia a notícia aqui
          </a>
        </div>
      </HighlightNewsWrapper>
      <FilterWrapper>
        <button>Mais Recentes</button>
        <button>Releases</button>
        <button>Notícias</button>
        <button>Favoritos</button>
      </FilterWrapper>
      

    </div>
  );
}

export default Home;
