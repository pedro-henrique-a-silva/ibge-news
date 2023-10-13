import { NewsType } from "../../types";
import { NewsGalleryWrapper, NewsCard } from "./style";

const BASE_URL_IMAGES = "https://agenciadenoticias.ibge.gov.br/"


type NewsGalleryProps = {
  news: NewsType[];

}
function NewsGallery(props: NewsGalleryProps) {
  const { news } = props;
  return (
    <NewsGalleryWrapper>
      {news.map((newsItem) => (
        <NewsCard>
           <div>
            <img 
              src={`${BASE_URL_IMAGES}${JSON.parse(newsItem.imagens as string).image_intro}`} 
              alt="" 
            />
          </div>
          <div>
            <h3>{newsItem.titulo}</h3>
            <p>{newsItem.introducao}</p>
            <a 
              href={newsItem.link}
              target="_blank"
            >
              Leia a notícia aqui
            </a>
          </div>
        </NewsCard>
      ))}
    </NewsGalleryWrapper>
  )
}

export default NewsGallery;